import Markdown from "react-markdown";
import Article from "../../blogs/test.md?raw";
import Header from "../../components/typography/Header";
import { GoDotFill } from "react-icons/go";
import ImportantText from "../../components/typography/ImportantText";
import { BlogTag } from "../blog/BlogSection";

export type Metadata = {
  id: string;
  markdown: string;
  title: string;
  author: string;
  date: string;
  subtitle: string;
  tags: string[];
  hero_image: string;
};

export interface PageProps {
  metadata: Metadata;
}

function Page({ metadata }: PageProps) {
  return (
    <div className="pt-2">
      {/* Article Metadata */}
      <div className="mb-20">
        <div className="mb-12">
          <Header text={metadata.title} />
        </div>
        <div className="mb-6">
          <ImportantText text={metadata.subtitle} />
        </div>
        <div className="flex items-center justify-center gap-1 text-sm text-custom-whiskey font-medium tracking-wider mb-6">
          <img
            src="/profile.jpeg"
            className="w-6 h-6 rounded-full border mr-1.5 "
          />
          <span className="text-custom-chaKy">{metadata.author}</span>
          <GoDotFill className="w-2 h-2 mt-0.5 text-custom-coral" />
          <span className="text-custom-chaKy">{metadata.date}</span>
        </div>
        <div className="mt-4 flex flex-wrap justify-center items-center gap-3">
          {metadata.tags.map((tag) => {
            return <BlogTag text={tag} />;
          })}
        </div>
      </div>

      <Markdown
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="mb-8 font-customEyeCatcher text-5xl text-custom-malibu"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="mb-6 font-customEyeCatcher text-4xl text-custom-malibu"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p className="tracking-wide font-medium text-sm" {...props} />
          ),
        }}
      >
        {Article}
      </Markdown>
    </div>
  );
}

export default Page;
