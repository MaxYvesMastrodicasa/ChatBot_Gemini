import { GoogleGenerativeAI } from "@google/generative-ai";

const apiToken = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiToken as string);
console.log(apiToken);

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
