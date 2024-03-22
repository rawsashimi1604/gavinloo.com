import Container from "../components/layout/Container";
import AboutMe from "../modules/about/AboutMe";

import { FaNetworkWired } from "react-icons/fa";
import Journey from "../modules/about/Journey";

function About() {
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
