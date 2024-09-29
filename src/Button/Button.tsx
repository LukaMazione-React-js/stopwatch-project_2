
type ButtonProps = {
  text?: string;
  className?: string
};

export const Button = ({ text, className }: ButtonProps) => {
  return <button className={`${className}`}>{text}</button>;
};
