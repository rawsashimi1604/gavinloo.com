import ConsoleLog from "../../components/typography/ConsoleLog";
import Header from "../../components/typography/Header";
import ImportantText from "../../components/typography/ImportantText";

import { FaBriefcase, FaPencilAlt } from "react-icons/fa";

export interface WorkExperienceTagProps {
  text: string;
}

function WorkExperienceTag({ text }: WorkExperienceTagProps) {
  return (
    <span className="inline-block text-sm bg-custom-dark/40 text-custom-green px-2 py-1 rounded-xl">
      {text}
    </span>
  );
}

function Experiences() {
  return (
    <div className="mb-2">
      <Header text="Career Stuff." />
      <div className="flex w-full items-center justify-center mt-12">
        <ImportantText text="A breakdown of my professional experience." />
      </div>

      <h2 className="font-customRoboto tracking-widest mt-10 ">
        <FaBriefcase className="inline-block mr-2 mb-1" />
        WORK EXPERIENCE
      </h2>

      <div className="mt-2">
        <ConsoleLog text="i'm currently on a Work Study Degree program with Standard Chartered Bank. it's a term in term out program consisting of 3 total cycles. on my 3rd cycle now!" />
      </div>

      <div className="mt-4  p-4 bg-custom-dark/20 rounded-[20px] font-customInter tracking-wider duration-150 hover:-translate-y-1 hover:bg-custom-dark/25">
        <h3 className="text-lg font-customMono tracking-normal text-custom-chaKy">
          Standard Chartered Bank
        </h3>
        <span>
          <span className="text-sm text-custom-coral">
            Integration Developer
          </span>
          <span className="px-2 text-custom-dark">|</span>
          <span className="text-sm text-custom-whiskey">
            Jan 2024 - Dec 2024
          </span>
        </span>

        <div className="mt-2 text-sm">
          - Led development for consent reporting Java REST application,
          automating generation of reports on API and open banking metrics for
          regulatory compliance.
        </div>
        <div className="mt-2 text-sm">
          - Developed and deployed (Azure Pipelines) Java API Manifest
          validation script to facilitate APIOps within the bank.
        </div>
        <div className="mt-2 text-sm">
          - Designed and did proof-of-concept on stateless config file
          declaration architecture to remove database dependency on Kong API
          Gateway.
        </div>
        <div className="mt-2 text-sm">
          - Developed and deployed (Openshift) integration testing REST APIs to
          test end to end open banking flows.
        </div>
        <div className="mt-2 text-sm">
          - Developed unit test toolkit to enable teammates to verify HTTP
          responses against Open Banking Specification JSON Schemas.
        </div>

        <div className="mt-6">
          <h2 className="text-custom-malibu mb-2">technologies</h2>
          <div className="flex items-center gap-2 flex-wrap">
            <WorkExperienceTag text="Java" />
            <WorkExperienceTag text="Kong Gateway" />
            <WorkExperienceTag text="REST API" />
            <WorkExperienceTag text="Git" />
            <WorkExperienceTag text="Azure Pipelines" />
            <WorkExperienceTag text="Oauth2" />
            <WorkExperienceTag text="Postman" />
            <WorkExperienceTag text="JWT" />
            <WorkExperienceTag text="Docker" />
            <WorkExperienceTag text="Kubernetes" />
            <WorkExperienceTag text="Openshift" />
            <WorkExperienceTag text="JUnit" />
            <WorkExperienceTag text="Mockito" />
            <WorkExperienceTag text="JSON Schema" />
            <WorkExperienceTag text="Elastic" />
            <WorkExperienceTag text="Kibana" />
            <WorkExperienceTag text="Logstash" />
            <WorkExperienceTag text="Java Spark" />
            <WorkExperienceTag text="Jooq" />
            <WorkExperienceTag text="Apache POI" />
            <WorkExperienceTag text="iText" />
          </div>
        </div>
      </div>

      <div className="mt-4  p-4 bg-custom-dark/20 rounded-[20px] font-customInter tracking-wider duration-150 hover:-translate-y-1 hover:bg-custom-dark/25">
        <h3 className="text-lg font-customMono tracking-normal text-custom-chaKy">
          Singapore Institute of Technology
        </h3>
        <span>
          <span className="text-sm text-custom-coral">
            Student Developer Lead
          </span>
          <span className="px-2 text-custom-dark">|</span>
          <span className="text-sm text-custom-whiskey">
            May 2023 - Jan 2024
          </span>
        </span>

        <div className="mt-2 text-sm">
          - Led the redevelopment initiative for an in-house scheduling
          solution, overseeing the entire process from design to deployment.
        </div>
        <div className="mt-2 text-sm">
          - Mentored team of 5 members, providing guidance on best practices and
          help navigate them through the tech stack.
        </div>
        <div className="mt-2 text-sm">
          - Architected the solution on AWS infrastructure, leveraging
          technologies such as TypeScript, Node.js, and React.js to deliver a
          modern and efficient application.
        </div>
        <div className="mt-2 text-sm">
          - Implemented comprehensive unit testing using Jest and adopted
          Behavior-Driven Development (BDD) practices with Gherkin.
        </div>
        <div className="mt-2 text-sm">
          - Collaborated closely with the Zoom and SIT development teams.
        </div>
        <div className="mt-2 text-sm">
          - Established a CI pipeline using GitHub Actions, enabling automated
          testing and code quality checks.
        </div>
        <div className="mt-2 text-sm">
          - Migration of data schema from legacy MySQL database.
        </div>
        <div className="mt-2 text-sm">
          - Setup DNS and HTTPS, while implementing authorization and
          authentication mechanisms like JWT, OAuth2 for enhanced access
          control.
        </div>

        <div className="mt-6">
          <h2 className="text-custom-malibu mb-2">technologies</h2>
          <div className="flex items-center gap-2 flex-wrap">
            <WorkExperienceTag text="AWS EC2" />
            <WorkExperienceTag text="AWS S3" />
            <WorkExperienceTag text="AWS ALB" />
            <WorkExperienceTag text="AWS Route53" />
            <WorkExperienceTag text="AWS ACM" />
            <WorkExperienceTag text="Typescript" />
            <WorkExperienceTag text="Node.js" />
            <WorkExperienceTag text="React.js" />
            <WorkExperienceTag text="Tailwind" />
            <WorkExperienceTag text="Jest" />
            <WorkExperienceTag text="Gherkin" />
            <WorkExperienceTag text="Git" />
            <WorkExperienceTag text="Github Actions" />
            <WorkExperienceTag text="MySQL" />
            <WorkExperienceTag text="Oauth2" />
            <WorkExperienceTag text="JWT" />
            <WorkExperienceTag text="Docker" />
            <WorkExperienceTag text="Websockets" />
            <WorkExperienceTag text="NGINX" />
          </div>
        </div>
      </div>

      <div className="mt-4  p-4 bg-custom-dark/20 rounded-[20px] font-customInter tracking-wider duration-150 hover:-translate-y-1 hover:bg-custom-dark/25">
        <h3 className="text-lg font-customMono tracking-normal text-custom-chaKy">
          Standard Chartered Bank
        </h3>
        <span>
          <span className="text-sm text-custom-coral">
            Integration Developer
          </span>
          <span className="px-2 text-custom-dark">|</span>
          <span className="text-sm text-custom-whiskey">
            May 2023 - Aug 2023
          </span>
        </span>

        <div className="mt-2 text-sm">
          - Worked on migration of Internal APIs of the bank via APIClarity
          Engine, reconstructing Open API Specifications (OAS), helping reduce
          the number of shadow and zombie APIs.
        </div>
        <div className="mt-2 text-sm">
          - Deployed APIClarity Engine via Kubernetes and Helm templating engine
          on on-premise Openshift clusters.
        </div>
        <div className="mt-2 text-sm">
          - Developed API manifest generation and validation tool to help with
          automating API Gateway onboarding efforts for the bank using ADO
          Pipelines and REST API.
        </div>

        <div className="mt-6">
          <h2 className="text-custom-malibu mb-2">technologies</h2>
          <div className="flex items-center gap-2 flex-wrap">
            <WorkExperienceTag text="Kubernetes" />
            <WorkExperienceTag text="Helm" />
            <WorkExperienceTag text="Openshift" />
            <WorkExperienceTag text="Kong Gateway" />
            <WorkExperienceTag text="APIClarity" />
            <WorkExperienceTag text="Docker" />
            <WorkExperienceTag text="Linux/Bash" />
            <WorkExperienceTag text="Python" />
            <WorkExperienceTag text="Java 17" />
            <WorkExperienceTag text="Gradle" />
            <WorkExperienceTag text="IntelliJ" />
            <WorkExperienceTag text="Jackson" />
            <WorkExperienceTag text="Lombok" />
            <WorkExperienceTag text="SLF4J" />
            <WorkExperienceTag text="ADO Pipelines" />
            <WorkExperienceTag text="ADO REST API" />
            <WorkExperienceTag text="Jira" />
          </div>
        </div>
      </div>

      <div className="mt-4  p-4 bg-custom-dark/20 rounded-[20px] font-customInter tracking-wider duration-150 hover:-translate-y-1 hover:bg-custom-dark/25">
        <h3 className="text-lg font-customMono tracking-normal text-custom-chaKy">
          Standard Chartered Bank
        </h3>
        <span>
          <span className="text-sm text-custom-coral">
            Integration Developer
          </span>
          <span className="px-2 text-custom-dark">|</span>
          <span className="text-sm text-custom-whiskey">
            May 2022 - Aug 2022
          </span>
        </span>

        <div className="mt-2 text-sm">
          - Developed internal API portal as part of API Platforms Team to MVP1
          over the course of the development lifecycle.
        </div>
        <div className="mt-2 text-sm">
          - Operated in an agile environment with daily standups, kept track of
          user stories/bugs in Jira and participated in 2 hours of sprint
          planning every fortnight.
        </div>
        <div className="mt-2 text-sm">
          - Worked with designers to convert over 30 Figma designs to code using
          HTML, TailwindCSS and React.
        </div>
        <div className="mt-2 text-sm">
          - Integrated REST APIs from the backend team to React microfrontend
          application.
        </div>
        <div className="mt-2 text-sm">
          - Wrote unit tests using Jest/Enzyme/React-testing-library to increase
          code coverage by 40% in SonarQube.
        </div>

        <div className="mt-6">
          <h2 className="text-custom-malibu mb-2">technologies</h2>
          <div className="flex items-center gap-2 flex-wrap">
            <WorkExperienceTag text="React" />
            <WorkExperienceTag text="Tailwind" />
            <WorkExperienceTag text="HTML" />
            <WorkExperienceTag text="Redux" />
            <WorkExperienceTag text="Jest" />
            <WorkExperienceTag text="Enzyme" />
            <WorkExperienceTag text="React-testing-library" />
            <WorkExperienceTag text="Git/Bitbucket" />
            <WorkExperienceTag text="Jira" />
            <WorkExperienceTag text="REST APIs" />
            <WorkExperienceTag text="Webpack (microfrontends)" />
          </div>
        </div>
      </div>

      <h2 className="font-customRoboto tracking-widest mt-10 ">
        <FaPencilAlt className="inline-block mr-2 mb-1" />
        SCHOOL
      </h2>

      <div className="mt-4  p-4 bg-custom-dark/20 rounded-[20px] font-customInter tracking-wider duration-150 hover:-translate-y-1 hover:bg-custom-dark/2">
        <h3 className="text-lg font-customMono tracking-normal text-custom-chaKy">
          Singapore Institute of Technology
        </h3>
        <span>
          <span className="text-sm text-custom-coral">
            BE(Hons) - Software Engineering
          </span>
          <span className="px-2 text-custom-dark">|</span>
          <span className="text-sm text-custom-whiskey">2021 - 2025</span>
          <span className="px-2 text-custom-dark">|</span>
          <span className="text-sm text-custom-purple">GPA: 4.2/5</span>
        </span>

        <div className="mt-2 text-sm">
          - Teaching Assistant - INF1009 Object-Oriented-Programming (Java)
        </div>
      </div>
    </div>
  );
}

export default Experiences;
