import cle from "./cle.ts";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(cle as string);
console.log("process.env.GOOGLE_API_KEY: ", cle);

async function ChatBot(prompt: string) {
  try {
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);

    const textResponse = await result.response.text();
    console.log(textResponse);
  } catch (error) {
    console.error("Error generating content:", error);
  }
}
export default ChatBot;
