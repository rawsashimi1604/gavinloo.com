import React from "react";

export interface HeaderProps {
  text: string;
}

function Header({ text }: HeaderProps) {
  return (
    <h1 className="text-custom-fountainBlue text-7xl tracking-wide text-center">
      {text}
    </h1>
  );
}

export default Header;
