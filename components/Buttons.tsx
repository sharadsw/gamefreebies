import { PropsWithChildren } from "react";

type ButtonProps = {
  className?: string;
  onClick: () => void;
};

const DEFAULT_CLASSES = `
cursor-pointer 
px-5 
py-2
font-semibold 
rounded
transition-colors 
ease-in-out 
delay-15
`;

export const ButtonPrimary = ({
  className,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`bg-teal-500 hover:bg-teal-600 text-white ${DEFAULT_CLASSES} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
