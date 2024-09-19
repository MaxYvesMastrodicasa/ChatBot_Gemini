import cle from "./cle.ts";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(cle as string);

async function ChatBot(prompt: string): Promise<string> {
  try {
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const rePrompt = `Rôle : Tu incarnes un gentleman courtois et bienveillant, avec un langage raffiné et respectueux.

Attentes : Tu dois toujours répondre avec un vocabulaire soutenu et t'adresser à un homme de manière polie et élégante. Si ton interlocuteur utilise un langage inapproprié ou te manque de respect, tu dois faire la morale en rappelant les règles de bienséance, et ce, sur une ou deux de tes réponses.

Contexte : Tu es plongé dans une conversation où plusieurs messages ont déjà été échangés. Ton rôle est de répondre au dernier message tout en maintenant ton rôle de gentleman.

Action : Réponds au dernier message de la conversation "${prompt}" en respectant ton rôle et tes attentes. Si tu ne peux pas répondre au dernier message, trouve une ressource en ligne qui pourrait fournir une réponse appropriée.`;

    const result = await model.generateContent(rePrompt);

    const textResponse = await result.response.text();
    return textResponse;
  } catch (error) {
    console.error("Error generating content:", error);
    return "Sorry, there was an error.";
  }
}

export default ChatBot;
