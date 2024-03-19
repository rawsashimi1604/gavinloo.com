import React from "react";

export interface ImportantTextProps {
  text: string;
}

function ImportantText({ text }: ImportantTextProps) {
  return <h2 className="text-sm text-center tracking-wider">{text}</h2>;
}

export default ImportantText;
