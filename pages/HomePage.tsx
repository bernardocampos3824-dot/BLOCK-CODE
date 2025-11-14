import React from 'react';
import { courses } from '../data/lessons';
import { LanguageIcons } from '../components/icons/LanguageIcons';
import ProBenefits from '../components/ProBenefits';

interface HomePageProps {
  onSelectCourse: (courseId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectCourse }) => {
  return (
    <div className="flex flex-col items-center text-center mt-10 md:mt-20 relative isolate">
       <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-48 bg-purple-900/40 blur-3xl" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-gradient bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">
        Domine a Programação com seu Tutor Pessoal de IA
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12">
        O Block Code oferece aulas de programação interativas e gratuitas com uma IA por voz que explica conceitos complexos de forma simples e fácil de entender.
      </p>
      
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 tracking-wide">Escolha sua Linguagem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(courses).map(([id, course]) => {
            const Icon = LanguageIcons[id as keyof typeof LanguageIcons];
            return (
              <div
                key={id}
                onClick={() => onSelectCourse(id)}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col items-start text-left hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="bg-gray-900 p-3 rounded-full border border-gray-700 mb-4">
                  {Icon ? <Icon /> : <div className="w-12 h-12" />}
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm flex-grow">{course.description}</p>
                 <span className="mt-4 text-sm font-semibold text-purple-400">Comece a Aprender &rarr;</span>
              </div>
            );
          })}
        </div>
      </div>
      <ProBenefits />
    </div>
  );
};

export default HomePage;