import { ChangeEventHandler, FC } from "react";

type IProps = {
  onClick: () => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

const SearchInput: FC<IProps> = (props) => {
  const { onChange, onClick, value } = props;

  return (
    <div
      className="relative flex w-full"
      data-twe-input-wrapper-init
      data-twe-input-group-ref
    >
      <input
        type="search"
        className="peer block min-h-[auto] w-full rounded-xl  px-3 py-[0.32rem] leading-[1.6] text-black focus:outline focus:outline-orange-500 hover:outline hover:outline-orange-500"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
        onChange={onChange}
        value={value}
      />
      <button
        className="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        type="button"
        id="button-addon1"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        onClick={onClick}
      >
        <span className="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export { SearchInput };
