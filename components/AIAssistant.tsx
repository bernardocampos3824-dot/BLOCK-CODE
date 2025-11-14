
import React, { useState, useRef, useEffect } from 'react';
import { askAI } from '../services/geminiService';
import { LoadingSpinner, PaperAirplaneIcon, SparklesIcon } from './icons/AudioIcons';

interface AIAssistantProps {
    lessonContent: string;
}

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ lessonContent }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const aiResponse = await askAI(input, lessonContent);
            const aiMessage: Message = { sender: 'ai', text: aiResponse };
            setMessages(prev => [...prev, aiMessage]);
        } catch (err) {
            setError('Desculpe, não consegui obter uma resposta. Por favor, tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    }

    return (
        <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
                <SparklesIcon />
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Assistente de IA</h2>
            </div>

            <div className="h-64 overflow-y-auto mb-4 p-4 bg-black/30 rounded-md border border-gray-600 flex flex-col gap-4">
                {messages.length === 0 && (
                    <div className="flex-grow flex items-center justify-center">
                        <p className="text-gray-400">Tem alguma dúvida sobre a lição? Pergunte ao Blocky!</p>
                    </div>
                )}
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-xl ${
                            msg.sender === 'user' 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-700 text-gray-200'
                        }`}>
                            <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                        </div>
                    </div>
                ))}
                 {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-gray-700 text-gray-200 px-4 py-2 rounded-xl inline-flex items-center">
                            <LoadingSpinner />
                            <span className="text-sm">Blocky está pensando...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {error && <p className="text-red-400 text-sm mb-2">{error}</p>}

            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Pergunte algo sobre esta lição..."
                    disabled={isLoading}
                    className="flex-grow bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors disabled:opacity-50"
                />
                <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-bold p-3 rounded-lg transition-all transform hover:scale-105"
                    aria-label="Enviar pergunta"
                >
                    {isLoading ? <LoadingSpinner /> : <PaperAirplaneIcon />}
                </button>
            </div>
        </div>
    );
};

export default AIAssistant;
