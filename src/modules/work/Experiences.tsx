import Comment from "../../components/typography/Comment";
import ConsoleLog from "../../components/typography/ConsoleLog";
import Header from "../../components/typography/Header";
import ImportantText from "../../components/typography/ImportantText";

function Experiences() {
  return (
    <div className="mb-2">
      <Header text="Career Stuff." />
      <div className="flex w-full items-center justify-center mt-6">
        <ImportantText text="A breakdown of my professional experience." />
      </div>

      <h2 className="font-customRoboto tracking-widest mt-10 ">
        WORK EXPERIENCE
      </h2>

      <div className="mt-2">
        <ConsoleLog text="i'm currently on a Work Study Degree program with Standard Chartered Bank. it's a term in term out program consisting of 3 total cycles. on my 3rd cycle now!" />
      </div>
    </div>
  );
}

export default Experiences;
