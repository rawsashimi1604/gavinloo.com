import Container from "../components/layout/Container";
import AboutMe from "../modules/about/AboutMe";

import { FaNetworkWired } from "react-icons/fa";
import Journey from "../modules/about/Journey";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About | Gavin Loo";
  }, []);

  return (
    <Container>
      <AboutMe />

      <div className="flex justify-center mt-12 mb-16">
        <FaNetworkWired />
      </div>

      <Journey />
    </Container>
  );
}

export default About;
