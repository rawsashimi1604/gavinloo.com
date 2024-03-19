import React from "react";
import Navbar from "./Navbar";

export interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <main className="bg-custom-bg text-custom-lightWhite min-w-screen min-h-screen">
      <Navbar />
      {children}
    </main>
  );
}

export default Container;
