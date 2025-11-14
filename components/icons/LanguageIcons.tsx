
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-12 h-12">{children}</div>
);

export const LanguageIcons = {
  python: () => <IconWrapper><img src="https://aistudiocdn.com/L2Rldi9hc3NldHMvYXBwcy9ibG9jay1jb2RlLzE3MjE3NzM0NTc0MzMtcHl0aG9uLWljb24uc3Zn.svg" alt="Python Icon" /></IconWrapper>,
  javascript: () => <IconWrapper><img src="https://aistudiocdn.com/L2Rldi9hc3NldHMvYXBwcy9ibG9jay1jb2RlLzE3MjE3NzM0ODg2MTAtamF2YXNjcmlwdC1pY29uLnN2Zw.svg" alt="JavaScript Icon" /></IconWrapper>,
  html: () => <IconWrapper><img src="https://aistudiocdn.com/L2Rldi9hc3NldHMvYXBwcy9ibG9jay1jb2RlLzE3MjE3NzM1MDQ2OTEtaHRtbC1pY29uLnN2Zw.svg" alt="HTML Icon" /></IconWrapper>,
  css: () => <IconWrapper><img src="https://aistudiocdn.com/L2Rldi9hc3NldHMvYXBwcy9ibG9jay1jb2RlLzE3MjE3NzM1MTk0OTEtY3NzLWljb24uc3Zn.svg" alt="CSS Icon" /></IconWrapper>,
  java: () => <IconWrapper><img src="https://aistudiocdn.com/L2Rldi9hc3NldHMvYXBwcy9ibG9jay1jb2RlLzE3MjE3NzM1MzY0NzAtamF2YS1pY29uLnN2Zw.svg" alt="Java Icon" /></IconWrapper>,
  csharp: () => <IconWrapper><img src="https://aistudiocdn.com/L2Rldi9hc3NldHMvYXBwcy9ibG9jay1jb2RlLzE3MjE3NzM1NDk4NjEtY3NoYXJwLWljb24uc3Zn.svg" alt="C# Icon" /></IconWrapper>,
  cpp: () => <IconWrapper><img src="https://aistudiocdn.com/L2Rldi9hc3NldHMvYXBwcy9ibG9jay1jb2RlLzE3MjE3NzM1NjM3NDYtY3BwLWljb24uc3Zn.svg" alt="C++ Icon" /></IconWrapper>,
  php: () => <IconWrapper><img src="https://aistudiocdn.com/L2Rldi9hc3NldHMvYXBwcy9ibG9jay1jb2RlLzE3MjE3NzM1Nzc5MDgtcGhwLWljb24uc3Zn.svg" alt="PHP Icon" /></IconWrapper>,
  lua: () => <IconWrapper><img src="https://aistudiocdn.com/L2Rldi9hc3NldHMvYXBwcy9ibG9jay1jb2RlLzE3MjE3NzM1OTI4OTgtbHVhLWljb24uc3Zn.svg" alt="Lua Icon" /></IconWrapper>,
};
