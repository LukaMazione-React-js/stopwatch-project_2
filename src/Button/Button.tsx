import { ReactNode } from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  children: string
}
export const Button = ({children}: ButtonProps) => {
  return <button className={`${styles.button}`}>{children}</button>;
};
