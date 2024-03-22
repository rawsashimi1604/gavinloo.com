import { useEffect } from "react";
import Container from "../components/layout/Container";
import NotFound from "../components/layout/NotFound";

function NotFound404() {
  useEffect(() => {
    document.title = "Page not Found | Gavin Loo";
  }, []);

  return (
    <Container>
      <NotFound />
    </Container>
  );
}

export default NotFound404;
