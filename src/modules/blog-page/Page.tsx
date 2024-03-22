import Markdown from "react-markdown";
import Article from "../../blogs/test.md?raw";
import Header from "../../components/typography/Header";
import { GoDotFill } from "react-icons/go";

function Page() {
  return (
    <div className="pt-2">
      {/* Article Metadata */}
      <div className="mb-10">
        <div className="mb-12">
          <Header text="CSS Decoded." />
        </div>
        <div className="flex items-center justify-center gap-1 text-sm text-custom-whiskey font-medium tracking-wider mb-1.5">
          <img
            src="/profile.jpeg"
            className="w-6 h-6 rounded-full border mr-1.5 "
          />
          <span className="text-custom-chaKy">Gavin Loo</span>
          <GoDotFill className="w-2 h-2 mt-0.5 text-custom-coral" />
          <span className="text-custom-chaKy">18 May 2023</span>
        </div>
      </div>

      <Markdown>{Article}</Markdown>
    </div>
  );
}

export default Page;
