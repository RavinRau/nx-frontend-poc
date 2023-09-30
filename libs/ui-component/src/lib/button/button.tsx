import * as React from 'react';
import {ButtonHTMLAttributes, ReactNode} from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnIcon?: ReactNode;
  className?: string;
  color?: "primary" | "transparent" | "transparentPrimary" |"white";
  loading?: boolean;
  buttonLabelClass?: string;
}

export function Button(props : IButtonProps) {
  const { btnIcon, className, children, loading, color = 'primary', buttonLabelClass, ...otherProps } = props
  return (
    <button
      className="rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300" {...otherProps}>{children}</button>
  );
}

export default Button;
