import { useEffect } from "react";
import Container from "../components/layout/Container";
import BlogSection from "../modules/blog/BlogSection";

function Blog() {
  useEffect(() => {
    document.title = "Blog | Gavin Loo";
  }, []);

  return (
    <Container>
      <div className="mt-6 mb-12">
        <BlogSection />
      </div>
    </Container>
  );
}

export default Blog;
