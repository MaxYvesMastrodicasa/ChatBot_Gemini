import { useState } from "react";
import { Navbar } from "./components/Navbar";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <>
      <div className="">
        <Navbar
          onSearchChange={(e) => setSearchInputValue(e.target.value)}
          searchValue={searchInputValue}
        ></Navbar>
      </div>
    </>
  );
}

export default App;
