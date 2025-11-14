
import { GoogleGenAI, Modality } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateSpeech(text: string): Promise<string> {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text: `Diga com calma e clareza: ${text}` }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Zephyr' }, // Uma voz calma e clara
                    },
                },
            },
        });

        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (!base64Audio) {
            throw new Error("Nenhum dado de áudio recebido da API.");
        }

        return base64Audio;
    } catch (error) {
        console.error("Erro ao gerar fala:", error);
        throw new Error("Falha ao gerar fala da API Gemini.");
    }
}


export async function askAI(question: string, lessonContent: string): Promise<string> {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Com base no seguinte conteúdo da lição:\n\n---\n${lessonContent}\n---\n\nPor favor, responda a esta pergunta: ${question}`,
            config: {
                systemInstruction: "Você é um tutor de programação amigável e prestativo para iniciantes. Seu nome é 'Blocky'. Ao responder, seja encorajador e divida tópicos complexos em passos simples e fáceis de entender. Baseie sua resposta no contexto da lição fornecida. Se a pergunta estiver fora do escopo da lição, guie suavemente o usuário de volta ao tópico atual. Responda em português.",
            }
        });
        return response.text;
    } catch (error) {
        console.error("Erro ao perguntar à IA:", error);
        throw new Error("Falha ao obter uma resposta do assistente de IA.");
    }
}
