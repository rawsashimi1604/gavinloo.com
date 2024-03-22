import Container from "../components/layout/Container";
import Page from "../modules/blog-page/Page";

function BlogPost() {
  return (
    <Container>
      <div className="mt-6 mb-12">
        <Page />
      </div>
    </Container>
  );
}

export default BlogPost;
