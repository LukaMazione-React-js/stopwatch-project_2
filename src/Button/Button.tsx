import { PropsWithChildren } from 'react';
import styles from './button.module.scss';

type ButtonProps = PropsWithChildren<{
  text?: string
}>;

export const Button = ({text }: ButtonProps) => {
  return <button className={`${styles.button}`}>{text}</button>;
};
