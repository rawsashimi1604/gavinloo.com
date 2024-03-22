import { useEffect } from "react";
import Container from "../components/layout/Container";
import Hero from "../modules/home/Hero";
import KeyPoints from "../modules/home/KeyPoints";
import Skills from "../modules/home/Skills";

function Home() {
  useEffect(() => {
    document.title = "Home | Gavin Loo";
  }, []);

  return (
    <Container>
      <div className="mt-6">
        <Hero />
      </div>

      <div className="mt-14">
        <KeyPoints />
      </div>

      <div className="mt-16 mb-16">
        <Skills />
      </div>
    </Container>
  );
}

export default Home;
