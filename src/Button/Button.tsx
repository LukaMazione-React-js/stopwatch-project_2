type ButtonProps = {
  text: string;
  className: string;
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({ text, className, onClick, disabled}: ButtonProps) => {
  return (
    <button
      className={`${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
