
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { generateSpeech } from '../services/geminiService';
import { decode, decodeAudioData } from '../utils/audio';
import { LoadingSpinner, PlayIcon, PauseIcon, StopIcon, ArrowLeftIcon, ArrowRightIcon, CheckIcon } from '../components/icons/AudioIcons';
import { courses } from '../data/lessons';
import AIAssistant from '../components/AIAssistant';

const PROGRESS_KEY = 'blockCodeProgress';

interface ProgressData {
  [courseId: string]: number;
}

const getProgress = (): ProgressData => {
  try {
    const savedProgress = window.localStorage.getItem(PROGRESS_KEY);
    return savedProgress ? JSON.parse(savedProgress) : {};
  } catch (error) {
    console.error("Failed to load progress from localStorage", error);
    return {};
  }
};

const saveProgressForCourse = (courseId: string, lessonIndex: number): void => {
  try {
    const currentProgress = getProgress();
    currentProgress[courseId] = lessonIndex;
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(currentProgress));
  } catch (error) {
    console.error("Failed to save progress to localStorage", error);
  }
};

interface LessonPageProps {
  courseId: string;
}

const LessonPage: React.FC<LessonPageProps> = ({ courseId }) => {
  const course = courses[courseId as keyof typeof courses];
  const lessons = course.lessons;

  const [currentLessonIndex, setCurrentLessonIndex] = useState(() => {
    const progress = getProgress();
    return progress[courseId] || 0;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    const progress = getProgress();
    setCurrentLessonIndex(progress[courseId] || 0);
    stopAudio();
  }, [courseId]);

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    
    return () => {
        stopAudio();
        audioContextRef.current?.close();
    }
  }, []);

  const stopAudio = useCallback(() => {
    if (sourceNodeRef.current) {
        sourceNodeRef.current.stop();
        sourceNodeRef.current.disconnect();
        sourceNodeRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  const handlePlayAudio = useCallback(async () => {
    if (isPlaying) {
      stopAudio();
      return;
    }

    if (!audioContextRef.current) return;
    if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
    }
    
    setIsLoading(true);
    setError(null);

    try {
      const textToSpeak = lessons[currentLessonIndex].content.replace(/```[a-z]*\n|```/g, '');
      const base64Audio = await generateSpeech(textToSpeak);
      
      const decodedData = decode(base64Audio);
      const audioBuffer = await decodeAudioData(decodedData, audioContextRef.current, 24000, 1);

      stopAudio();

      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      source.start();
      
      source.onended = () => {
        setIsPlaying(false);
        sourceNodeRef.current = null;
      };

      sourceNodeRef.current = source;
      setIsPlaying(true);
    } catch (err) {
      setError('Falha ao gerar ou reproduzir áudio. Por favor, tente novamente.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [currentLessonIndex, isPlaying, stopAudio, lessons]);

  const goToLesson = (index: number) => {
    stopAudio();
    if (index >= 0 && index < lessons.length) {
      setCurrentLessonIndex(index);
      saveProgressForCourse(courseId, index);
    }
  };

  const currentLesson = lessons[currentLessonIndex];
  
  const renderContent = (content: string) => {
    return content.split(/(```[a-z]*\n[\s\S]*?```)/g).map((part, index) => {
      if (part.startsWith('```')) {
        const lang = part.match(/```(\w*)/)?.[1] || '';
        const code = part.replace(/```[a-z]*\n|```/g, '');
        return (
          <pre key={index} className="bg-black/30 border border-gray-700 rounded-lg p-4 my-4 overflow-x-auto relative">
             <span className="absolute top-2 right-2 text-xs text-gray-500 uppercase font-mono">{lang}</span>
            <code className="font-code text-sm text-cyan-300">{code}</code>
          </pre>
        );
      }
      return <p key={index} className="text-gray-300 leading-relaxed">{part}</p>;
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="md:w-1/4">
        <h2 className="text-xl font-bold mb-1">{course.title}</h2>
        <h3 className="text-sm text-gray-400 mb-4">Estrutura do Curso</h3>
        <nav>
          <ul>
            {lessons.map((lesson, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => goToLesson(index)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-all duration-300 flex items-center justify-between ${
                    currentLessonIndex === index
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-md'
                      : index < currentLessonIndex
                      ? 'text-gray-500 hover:bg-gray-800'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <span className={index < currentLessonIndex ? 'line-through' : ''}>
                    {lesson.title}
                  </span>
                  {index < currentLessonIndex && <CheckIcon />}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <section className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8 shadow-2xl shadow-black/30">
        <h1 className="text-3xl font-bold mb-4">{currentLesson.title}</h1>
        <div className="bg-gray-900/50 p-4 rounded-lg flex items-center gap-4 mb-6 border border-gray-700">
            <button
                onClick={handlePlayAudio}
                disabled={isLoading}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100"
                aria-label={isPlaying ? "Pausar narração" : "Reproduzir narração"}
            >
                {isLoading ? ( <LoadingSpinner /> ) : isPlaying ? ( <PauseIcon /> ) : ( <PlayIcon /> )}
                <span>{isLoading ? 'Gerando...' : isPlaying ? 'Pausar' : 'Ler em Voz Alta'}</span>
            </button>
            {isPlaying && (
                 <button
                    onClick={stopAudio}
                    className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    aria-label="Parar narração"
                >
                    <StopIcon />
                    <span>Parar</span>
                </button>
            )}
        </div>
        {error && <p className="text-red-400 bg-red-900/50 p-3 rounded-md mb-4">{error}</p>}
        <article className="prose prose-invert max-w-none prose-p:my-4">
            {renderContent(currentLesson.content)}
        </article>
        <div className="mt-8 pt-6 border-t border-gray-700 flex justify-between">
          <button
            onClick={() => goToLesson(currentLessonIndex - 1)}
            disabled={currentLessonIndex === 0}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            <ArrowLeftIcon />
            Anterior
          </button>
          <button
            onClick={() => goToLesson(currentLessonIndex + 1)}
            disabled={currentLessonIndex === lessons.length - 1}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Próximo
            <ArrowRightIcon />
          </button>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-700">
          <AIAssistant lessonContent={currentLesson.content} />
        </div>
      </section>
    </div>
  );
};

export default LessonPage;
