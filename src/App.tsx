import { useState } from "react";
import { Navbar } from "./components/Navbar";
import ChatBot from "./AIConnect";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (searchInputValue.trim() === "") return;

    setMessages([...messages, `Toi: ${searchInputValue}`]);

    const response = await ChatBot(searchInputValue);

    setMessages([
      ...messages,
      `Toi: ${searchInputValue}`,
      `Jarvis: ${response}`,
    ]);

    setSearchInputValue("");
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-1 overflow-auto p-4">
          <div>
            {messages.map((message, index) => (
              <div key={index} className="mb-2">
                {message}
              </div>
            ))}
          </div>
        </div>
        <Navbar
          onSearchChange={handleSearchChange}
          searchValue={searchInputValue}
          onSendMessage={handleSendMessage}
        />
      </div>
    </>
  );
}

export default App;
