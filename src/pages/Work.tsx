import { useEffect } from "react";
import Container from "../components/layout/Container";
import Experiences from "../modules/work/Experiences";

function Work() {
  useEffect(() => {
    document.title = "Work | Gavin Loo";
  }, []);

  return (
    <Container>
      <div className="mt-6 mb-10">
        <Experiences />
      </div>
    </Container>
  );
}

export default Work;
