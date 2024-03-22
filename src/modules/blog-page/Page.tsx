import Markdown from "react-markdown";
import Header from "../../components/typography/Header";
import { GoDotFill } from "react-icons/go";
import ImportantText from "../../components/typography/ImportantText";
import { BlogTag } from "../blog/BlogSection";
import { useEffect, useState } from "react";

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
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../../blogs/${metadata.id}.md`).then((md) => {
      fetch(md.default)
        .then((res) => res.text())
        .then((mdContent) => setContent(mdContent));
    });
  }, [metadata]);

  return (
    <div className="pt-2">
      {/* Article Metadata */}
      <div className="mb-16">
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

        <img src={metadata.hero_image} className="mt-14 opacity-80" />
      </div>

      <Markdown
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="mt-8 mb-8 font-customEyeCatcher text-5xl text-custom-chaKy"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="mt-7 mb-7 font-customEyeCatcher text-4xl text-custom-malibu"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="mt-6 mb-6 font-customEyeCatcher text-3xl text-custom-coral"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              className="mt-3 mb-3 tracking-wider font-customInter"
              {...props}
            />
          ),
          li: ({ node, ...props }) => {
            return (
              <div className="inline-flex gap-4 mt-1 mb-1">
                <GoDotFill className="min-w-3 w-4 h-3 mt-1.5 text-custom-purple" />
                <li {...props} />
              </div>
            );
          },
          code: ({ node, ...props }) => {
            return (
              <code
                className="font-customMono px-2 py-[1px] bg-gray-900 text-custom-whiskey rounded-sm"
                {...props}
              />
            );
          },
          img: ({ node, ...props }) => {
            return (
              <div className="flex justify-center">
                <img className="mt-6 mb-6 opacity-80" {...props} />
              </div>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}

export default Page;
