import { ChangeEventHandler, FC } from "react";
import { SearchInput } from "./SearchInput.tsx";

type IProps = {
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
  searchValue: string;
  onSendMessage: () => void;
};

const Navbar: FC<IProps> = (props) => {
  const { searchValue, onSearchChange, onSendMessage } = props;

  return (
    <div className="fixed bottom-0 bg-stone-800 w-full flex justify-between items-center p-3 text-white">
      <div className="basis-1/4 flex justify-center items-center">
        <h1 className="text-2xl">Jarvis</h1>
      </div>
      <div className="basis-1/2 flex justify-center items-center">
        <SearchInput
          value={searchValue}
          onClick={onSendMessage}
          onChange={onSearchChange}
        />
      </div>
      <div></div>
    </div>
  );
};

export { Navbar };
