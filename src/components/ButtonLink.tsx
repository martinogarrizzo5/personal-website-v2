import classNames from "classnames";
import React from "react";

interface ButtonLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: React.ReactNode;
  href?: string;
}

function ButtonLink({ className, children, ...props }: ButtonLinkProps) {
  return (
    <a className={classNames("btn", className)} {...props}>
      {children}
    </a>
  );
}

export default ButtonLink;
