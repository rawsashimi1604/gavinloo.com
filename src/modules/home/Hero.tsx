import React from "react";

function Hero() {
  return (
    <section className="font-customRoboto flex-col items-center justify-center">
      <h1 className="text-custom-fountainBlue text-7xl mb-2 tracking-wide text-center">
        Hi. I'm Gavin.
      </h1>
      <h1 className="text-custom-fountainBlue text-7xl mb-10 tracking-wide text-center">
        A Software Engineer
      </h1>
      <div className="flex w-full items-center justify-center">
        <h2 className="text-sm text-center max-w-[50%] tracking-wider">
          I'm passionate about the craft of software engineering.
        </h2>
      </div>
    </section>
  );
}

export default Hero;
