import React from 'react';
import { OSIcon, CertificateIcon, CubeIcon, GameIcon, FilmIcon } from './icons/ProIcons';

const ProBenefits: React.FC = () => {
    const benefits = [
        { icon: <OSIcon />, text: 'Aprenda a Criar Sistemas Operacionais' },
        { icon: <CertificateIcon />, text: 'Certificado de Código Oficial' },
        { icon: <CubeIcon />, text: 'Crie Modelagens 3D Incríveis' },
        { icon: <GameIcon />, text: 'Desenvolva Seus Próprios Jogos' },
        { icon: <FilmIcon />, text: 'Produza Filmes de Animação' },
    ];

    return (
        <div className="mt-20 md:mt-32 w-full max-w-5xl mx-auto">
            <div className="relative rounded-2xl p-8 border border-yellow-500/30 bg-gray-900 overflow-hidden shadow-2xl shadow-yellow-500/10">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
                </div>
                
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-200">
                            Block Code Pro
                        </span>
                    </h2>
                    <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
                        Desbloqueie seu potencial máximo com acesso a cursos avançados e exclusivos.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12 text-center">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-black/20 transform hover:scale-105 transition-transform duration-300">
                            <div className="flex-shrink-0 mb-3 text-yellow-400">
                                {benefit.icon}
                            </div>
                            <p className="font-semibold text-sm text-gray-300">{benefit.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-center">
                    <button className="bg-gradient-to-r from-yellow-500 to-amber-400 text-gray-900 font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-yellow-500/20 hover:scale-105 transform transition-transform duration-300">
                        Tornar-se Pro por apenas R$10
                    </button>
                    <p className="mt-3 text-xs text-gray-500">Pagamento único. Acesso vitalício.</p>
                </div>
            </div>
        </div>
    );
};

export default ProBenefits;
