import { useState } from "react";
import { Navbar } from "./components/Navbar";
import ChatBot from "./AIConnect";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [messages, setMessages] = useState<{ sender: "user" | "jarvis"; text: string }[]>([]);
  const [editingMessageIndex, setEditingMessageIndex] = useState<number | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (searchInputValue.trim() === "") return;

    if (editingMessageIndex !== null) {

      await handleEditMessage(editingMessageIndex, searchInputValue);
      setEditingMessageIndex(null);
    } else {

      setMessages([...messages, { sender: "user", text: searchInputValue }]);

      const response = await ChatBot(searchInputValue);

      setMessages([
        ...messages,
        { sender: "user", text: searchInputValue },
        { sender: "jarvis", text: response },
      ]);
    }

    setSearchInputValue("");
  };

  const handleEditMessage = async (index: number, newMessage: string) => {
    const updatedMessages = [...messages];
    const originalJarvisIndex = index + 1;

    updatedMessages[index].text = newMessage;


    const newResponse = await ChatBot(newMessage);


    if (updatedMessages[originalJarvisIndex] && updatedMessages[originalJarvisIndex].sender === "jarvis") {
      updatedMessages[originalJarvisIndex].text = newResponse;
    } else {

      updatedMessages.splice(originalJarvisIndex, 0, { sender: "jarvis", text: newResponse });
    }

    setMessages(updatedMessages);
  };

  const handleDeleteMessage = (index: number) => {
    const updatedMessages = messages.filter((_, i) => i !== index && i !== index + 1);
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

  const handleStartEditMessage = (index: number) => {
    setSearchInputValue(messages[index].text);
    setEditingMessageIndex(index);
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
                </div>
                <div className="flex justify-end mt-2 space-x-2">
                  {message.sender === "user" ? (
                    <>
                      <button
                        onClick={() => handleStartEditMessage(index)}
                        className="p-2 rounded"
                      >
                        <img src="/editer.png" alt="Éditer" className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteMessage(index)}
                        className="p-2 rounded"
                      >
                        <img src="/poubelle.png" alt="Supprimer" className="h-5 w-5" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleResetMessage(index)}
                      className="p-2 rounded"
                    >
                      <img src="/recharger.png" alt="Recharger" className="h-5 w-5" />
                    </button>
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
