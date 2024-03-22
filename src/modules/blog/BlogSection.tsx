import { GoDotFill } from "react-icons/go";
import Header from "../../components/typography/Header";
import ImportantText from "../../components/typography/ImportantText";

import metadataJson from "../../blogs/meta.json";
import { Link } from "react-router-dom";

export interface BlogTagProps {
  text: string;
}

export function BlogTag({ text }: BlogTagProps) {
  return (
    <div className="text-xs px-2 py-1 rounded-md bg-custom-chaKy/80 text-black font-medium tracking-wider">
      {text}
    </div>
  );
}

function BlogSection() {
  return (
    <div>
      <div className="mb-12">
        <Header text="Thoughts." />
      </div>
      <div className="flex w-full items-center justify-center">
        <ImportantText text="The place where I document my growth as a software engineer! Always pursuing craftsmanship." />
      </div>

      {/* Blogs */}
      <div className="flex flex-col gap-2 mt-20">
        {metadataJson.map((article) => {
          return (
            <Link
              to={`/blog/${article.id}`}
              className="bg-custom-dark/30 rounded-xl flex flex-col transition-all hover:translate-y-1 p-8 pb-6"
            >
              <h1 className="text-custom-chaKy font-medium tracking-wider text-2xl mb-2 font-customEyeCatcher">
                {article.title}
              </h1>
              <div className="flex items-center gap-1 text-xs text-custom-whiskey font-medium tracking-wider mb-1.5">
                <span className="text-custom-coral">{article.author}</span>
                <GoDotFill className="w-2 h-2 mt-0.5 text-custom-coral" />
                <span className="text-custom-coral">{article.date}</span>
              </div>
              <h2 className="text-xs text-custom-whiskey font-medium tracking-wider ">
                {article.subtitle}
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {article.tags.map((tag) => {
                  return <BlogTag text={tag} />;
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BlogSection;
