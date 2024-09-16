import { ChangeEventHandler, FC } from "react";
import { Button } from "./Button.tsx";

type IProps = {
  onClick: () => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

const SearchInput: FC<IProps> = (props) => {
  const { onChange, value } = props;

  return (
    <div
      className="relative flex w-full"
      data-twe-input-wrapper-init
      data-twe-input-group-ref
    >
      <input
        type="search"
        className="peer block min-h-[auto] w-full rounded-xl  px-3 py-[0.32rem] leading-[1.6] text-black focus:outline focus:outline-orange-500 hover:outline hover:outline-orange-500"
        placeholder="Message Jarvis"
        aria-label="Search"
        aria-describedby="basic-addon1"
        onChange={onChange}
        value={value}
      />
      <div className="basis-1/2 flex justify-center items-center">
        <Button
          className="bg-orange-500 text-black font-semibold py-2 px-4 rounded hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 border border-stone-800 hover:border-gray-500 w-1/2"
          label="Prompt"
          onClick={() => console.log("test")}
        ></Button>
      </div>
    </div>
  );
};

export { SearchInput };
