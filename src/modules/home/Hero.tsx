import React from "react";
import Header from "../../components/typography/Header";

function Hero() {
  return (
    <section className="font-customRoboto flex-col items-center justify-center">
      <div className="mb-2">
        <Header text="Hi. I'm Gavin." />
      </div>
      <div className="mb-8">
        <Header text="A Software Engineer" />
      </div>
      <div className="flex w-full items-center justify-center">
        <h2 className="text-sm text-center max-w-[50%] tracking-wider">
          I'm passionate about the craft of software engineering.
        </h2>
      </div>
    </section>
  );
}

export default Hero;
