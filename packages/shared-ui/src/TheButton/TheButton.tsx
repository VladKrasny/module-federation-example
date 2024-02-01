import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./TheButton.css";

export type TheButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export function TheButton({ children, ...buttonAttributes }: TheButtonProps) {
  return <button {...buttonAttributes}>{children}</button>;
}
