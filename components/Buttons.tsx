import { PropsWithChildren } from "react";

export const enum ButtonColor {
  TEAL = "bg-teal-500 hover:bg-teal-600 text-white",
  GRAY = "bg-slate-200 hover:bg-slate-300 text-indigo-950",
  INDIGO = "bg-indigo-500 hover:bg-indigo-600 text-white"
}

type ButtonProps = {
  className?: string;
  isSubmit?: boolean;
  color: ButtonColor;
  onClick?: () => void;
};

type ButtonLinkProps = {
  className?: string;
  href: string;
  color: ButtonColor;
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
  isSubmit,
  color,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`${color} ${DEFAULT_CLASSES} ${className}`}
      type={isSubmit ? "submit" : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ButtonLink = ({
  className,
  color,
  href,
  children,
}: PropsWithChildren<ButtonLinkProps>) => {
  return (
    <a className={`text-center ${color} ${DEFAULT_CLASSES} ${className}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
