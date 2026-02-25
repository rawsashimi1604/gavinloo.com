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
            I'm a Software Engineer based in sunny Singapore!
          </h2>
          <h4 className="font-medium font-customInter tracking-wide text-left mt-6 ">
            I have 5 years of experience contributing to open-source projects
            across frontend, backend, and Kubernetes. I'm a polyglot developer
            across multiple languages with strong software engineering
            fundamentals.
          </h4>
          <h4 className="font-medium font-customInter tracking-wide text-left mt-4 ">
            My specialty is in API gateways and reverse proxies, having worked in the space across my career. Currently, I
            work as a Software Engineer at Standard Chartered.
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
            , as well as teaching my friends and fellow colleagues software engineering best practices! I love sharing my
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
