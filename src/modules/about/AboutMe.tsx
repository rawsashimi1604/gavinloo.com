import Header from "../../components/typography/Header";
import ImportantText from "../../components/typography/ImportantText";

function AboutMe() {
  return (
    <section className="font-customRoboto flex-col items-center justify-center mt-6">
      <div className="mb-2">
        <Header text="About me." />
      </div>

      <div className="mt-20 mb-16 flex justify-between gap-20">
        <img src="profile.jpeg" className="rounded-full w-80" />
        <div>
          <h2 className="font-customEyeCatcher text-custom-chaKy text-4xl text-left">
            I'm a Software Engineer working from sunny Singapore!
          </h2>
          <h4 className="font-medium font-customInter tracking-wide text-left mt-6 ">
            Over the past 1.5 years, I've worked in various areas across the web
            stack, including frontend, backend as well as dabbled in devops.
          </h4>
          <h4 className="font-medium font-customInter tracking-wide text-left mt-4 ">
            Currently, I'm in my 3rd year studying my Bachelor's in Software
            Engineering, graduating in 2025.
          </h4>

          <h4 className="font-medium font-customInter tracking-wide text-left mt-4">
            I love sharing my knowledge with others and making a positive impact
            - seeing others grow, learn, and succeed through the knowledge I
            share brings me great joy!
          </h4>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
