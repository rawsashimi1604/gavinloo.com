import { GoDotFill } from "react-icons/go";
import Header from "../../components/typography/Header";
import ImportantText from "../../components/typography/ImportantText";

export interface BlogTagProps {
  text: string;
}

function BlogTag({ text }: BlogTagProps) {
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
      <div className="flex flex-col gap-2 mt-12">
        <div className="bg-custom-dark/30 rounded-xl flex flex-col transition-all hover:translate-y-1 p-8 pb-6">
          <h1 className="text-custom-chaKy font-medium tracking-wider text-2xl mb-2 font-customEyeCatcher">
            CSS Decoded.
          </h1>
          <div className="flex items-center gap-1 text-xs text-custom-whiskey font-medium tracking-wider mb-1.5">
            <span className="text-custom-coral">Gavin Loo</span>
            <GoDotFill className="w-2 h-2 mt-0.5 text-custom-coral" />
            <span className="text-custom-coral">18 May 2023</span>
          </div>
          <h2 className="text-xs text-custom-whiskey font-medium tracking-wider ">
            Sharing my thoughts on how I think about HTML and Cascading Style
            Sheets (CSS)!
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <BlogTag text="HTML" />
            <BlogTag text="HTML" />
            <BlogTag text="HTML" />
            <BlogTag text="HTML" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
