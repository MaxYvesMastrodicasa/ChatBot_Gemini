import { GoogleGenerativeAI } from "@google/generative-ai";
import Gemini_key from "./cle.ts";

const genAI = new GoogleGenerativeAI(Gemini_key as string);

async function ChatBot(prompt: string): Promise<string> {
  try {
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);

    const textResponse = await result.response.text();
    return textResponse;
  } catch (error) {
    console.error("Error generating content:", error);
    return "Sorry, there was an error.";
  }
}

export default ChatBot;
