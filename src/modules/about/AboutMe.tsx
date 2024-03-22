import { Link } from "react-router-dom";
import Header from "../../components/typography/Header";

function AboutMe() {
  return (
    <section className="font-customRoboto  items-center justify-center mt-6 md:mb-16">
      <div className="md:mb-2">
        <Header text="About me." />
      </div>

      <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center  justify-between gap-8 md:gap-16">
        <img
          src="profile.jpeg"
          className="rounded-full shadow-gray-900 shadow-lg h-72 w-72"
        />
        <div className="">
          <h2 className="font-customEyeCatcher text-custom-chaKy text-4xl text-left">
            I'm a Software Engineer working from sunny Singapore!
          </h2>
          <h4 className="font-medium font-customInter tracking-wide text-left mt-6 ">
            Over the past 1.5 years, I've worked in various areas across the web
            stack, including frontend, backend as well as dabbled in devops. My
            specialties lie in development and the domain of API Gateways.
          </h4>
          <h4 className="font-medium font-customInter tracking-wide text-left mt-4 ">
            Currently, I'm in my 3rd year studying my Bachelor's in Software
            Engineering, graduating in 2025.
          </h4>

          <h4 className="font-medium font-customInter tracking-wide text-left mt-4">
            I'm also into helping others grow through{" "}
            <Link to="/blog">
              <span className="inline-block text-custom-green duration-150 hover:-translate-y-0.5">
                blogging
              </span>
            </Link>{" "}
            and{" "}
            <Link to="https://www.youtube.com/@codinggavin">
              <span className="inline-block text-custom-green duration-150 hover:-translate-y-0.5">
                Youtube
              </span>
            </Link>{" "}
            , as well as teaching my friends programming!I love sharing my
            knowledge with others and making a positive impact - seeing others
            grow, learn, and succeed through the knowledge I share brings me
            great joy!
          </h4>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
