import { FC } from "react";

type IProps = {
  label: string;
  onClick: () => void;
  className: string;
};

const Button: FC<IProps> = (props) => {
  const { label, onClick, className } = props;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
