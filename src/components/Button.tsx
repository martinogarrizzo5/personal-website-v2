import classNames from "classnames";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
}

function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={classNames("btn", className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
