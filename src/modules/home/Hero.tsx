import React from "react";
import Header from "../../components/typography/Header";
import ImportantText from "../../components/typography/ImportantText";

function Hero() {
  return (
    <section className="font-customRoboto flex-col items-center justify-center">
      <div className="mb-2">
        <Header text="Hi. I'm Gavin." />
      </div>
      <div className="mb-12">
        <Header text="A Software Engineer." />
      </div>
      <div className="flex w-full items-center justify-center">
        <ImportantText text="I'm passionate about the craft of software engineering." />
      </div>
    </section>
  );
}

export default Hero;
