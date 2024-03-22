import { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import Page, { Metadata } from "../modules/blog-page/Page";
import NotFound from "../components/layout/NotFound";
import { useParams } from "react-router-dom";
import metadataJson from "../blogs/meta.json";

function BlogPost() {
  const { contentId } = useParams();
  const [metadata, setMetadata] = useState<Metadata | null>(null);

  useEffect(() => {
    const found = metadataJson.filter((article) => article.id === contentId);
    if (found.length > 0) {
      setMetadata(found[0]);
    }
  }, [contentId]);

  return (
    <Container>
      <div className="mt-6 mb-12">
        {metadata ? <Page metadata={metadata} /> : <NotFound />}
      </div>
    </Container>
  );
}

export default BlogPost;
