import { useState } from "react";
import { Navbar } from "./components/Navbar";
import ChatBot from "./AIConnect";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [messages, setMessages] = useState<{ sender: "user" | "jarvis"; text: string }[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (searchInputValue.trim() === "") return;

    // Ajouter le message de l'utilisateur
    setMessages([...messages, { sender: "user", text: searchInputValue }]);

    const response = await ChatBot(searchInputValue);

    // Ajouter la réponse de Jarvis
    setMessages([
      ...messages,
      { sender: "user", text: searchInputValue },
      { sender: "jarvis", text: response },
    ]);

    setSearchInputValue("");
  };

  const handleEditMessage = (index: number, newMessage: string) => {
    const updatedMessages = [...messages];
    updatedMessages[index].text = newMessage;
    setMessages(updatedMessages);
  };

  const handleDeleteMessage = (index: number) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
  };

  const handleResetMessage = async (index: number) => {

    const userMessage = messages[index - 1]?.text;

    if (!userMessage || messages[index].sender !== "jarvis") return;

    const newResponse = await ChatBot(userMessage);

    const updatedMessages = [...messages];
    updatedMessages[index].text = newResponse;
    setMessages(updatedMessages);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-1 overflow-auto p-4">
          <div className="border border-gray-300 p-4 rounded-lg h-[calc(100vh-10vh)] overflow-y-auto bg-gray-100">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`relative flex flex-col mb-3 ${message.sender === "user" ? "items-end" : "items-start"
                  } group`}
              >
                <div className="text-gray-500 text-sm mb-1">
                  {message.sender === "user" ? "Vous" : "Jarvis"}
                </div>
                <div
                  className={`p-2 rounded-lg shadow ${message.sender === "user"
                    ? "bg-orange-500 text-right"
                    : "bg-gray-300 text-left"
                    } ${message.text.length > 50 ? "max-w-lg" : "max-w-md"} relative`}
                >
                  {message.text}
                  {message.sender === "user" ? (
                    <div className="absolute top-0 right-0 hidden group-hover:flex space-x-2">
                      <button
                        onClick={() => handleEditMessage(index, prompt("Modifier le message :", message.text) || message.text)}
                        className="bg-gray-900 text-white px-2 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteMessage(index)}
                        className="bg-gray-900 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  ) : (
                    <div className="absolute top-0 left-0 hidden group-hover:flex">
                      <button
                        onClick={() => handleResetMessage(index)}
                        className="bg-gray-900 text-white px-2 py-1 rounded"
                      >
                        Reset
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mb-3">
          <Navbar
            onSearchChange={handleSearchChange}
            searchValue={searchInputValue}
            onSendMessage={handleSendMessage}
          />
        </div>
      </div>
    </>
  );
}

export default App;
