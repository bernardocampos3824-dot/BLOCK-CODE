import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-10 h-10">{children}</div>
);

export const OSIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5-1.5h6m-6 3h6m-6 3h6m-12 3h18a2.25 2.25 0 002.25-2.25v-13.5A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
        </svg>
    </IconWrapper>
);

export const CertificateIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 011.095-4.439c.47-1.128.905-2.296 1.255-3.527a9.75 9.75 0 01-2.35-7.163c0-.98.24-1.921.685-2.772 1.524-2.886 4.793-4.832 8.315-4.832s6.791 1.946 8.315 4.832c.445.851.685 1.792.685 2.772a9.75 9.75 0 01-2.35 7.163c.35 1.231.785 2.399 1.255 3.527A9.75 9.75 0 0116.5 18.75z" />
        </svg>
    </IconWrapper>
);

export const CubeIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75l-9-5.25m9 5.25v9.75" />
        </svg>
    </IconWrapper>
);

export const GameIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5M9 12h-1.5m3.75 0H15m-3.75-3.75H15M4.5 9v3.75m3-3.75V9m6-3.75v3.75m3-3.75V9m-9 7.5h1.5m3.75 0h1.5m-12-3.75h15a2.25 2.25 0 012.25 2.25v3.75a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-3.75a2.25 2.25 0 012.25-2.25z" />
        </svg>
    </IconWrapper>
);

export const FilmIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3.75v3.75m-3.75-3.75v3.75m-1.5-15l-1.5 6m3-6l-1.5 6m6-6l-1.5 6m3-6l-1.5 6M6 6.75h.75m-.75 3h.75m-.75 3h.75m10.5-6h.75m-.75 3h.75m-.75 3h.75M9 6.75h6m-6 3h6m-6 3h6" />
        </svg>
    </IconWrapper>
);
