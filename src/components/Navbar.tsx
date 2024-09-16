import { ChangeEventHandler, FC } from "react";
import { Button } from "./Button.tsx";
import { SearchInput } from "./SearchInput.tsx";

type IProps = {
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
  searchValue: string;
};

const Navbar: FC<IProps> = (props) => {
  const { searchValue, onSearchChange } = props;

  return (
    <div className="sticky top-0 bg-stone-800 w-full flex justify-between items-center p-3 text-white">
      <div className="basis-1/4 flex justify-center items-center">
        <h1 className="text-2xl">WatchMeSwipe</h1>
      </div>
      <div className="basis-1/2 flex justify-center items-center">
        <SearchInput
          value={searchValue}
          onClick={() => console.log(searchValue)}
          onChange={onSearchChange}
        />
      </div>
      <div className="basis-1/6 flex justify-center items-center">
        <Button
          className="bg-orange-500 text-black font-semibold py-2 px-4 rounded hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 border border-stone-800 hover:border-gray-500 w-1/2"
          label="Connexion"
          onClick={() => console.log("test")}
        ></Button>
      </div>
    </div>
  );
};

export { Navbar };
