import { useEffect } from "react";
import Container from "../components/layout/Container";
import ProjectsList from "../modules/projects/ProjectsList";

function Projects() {
  useEffect(() => {
    document.title = "Projects | Gavin Loo";
  }, []);

  return (
    <Container>
      <div className="mt-6 mb-12">
        <ProjectsList />
      </div>
    </Container>
  );
}

export default Projects;
