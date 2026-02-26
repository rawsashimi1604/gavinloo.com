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

      {/* <div className="mt-2">
        <ConsoleLog text="i'm currently on a Work Study Degree program with Standard Chartered Bank. it's a term in term out program consisting of 3 total cycles. on my 3rd cycle now!" />
      </div> */}

      <div className="mt-4  p-4 bg-custom-dark/20 rounded-[20px] font-customInter tracking-wider duration-150 hover:-translate-y-1 hover:bg-custom-dark/25">
        <h3 className="text-lg font-customMono tracking-normal text-custom-chaKy">
          Standard Chartered Bank
        </h3>
        <span>
          <span className="text-sm text-custom-coral">
            Software Engineer (Full-Time)
          </span>
          <span className="px-2 text-custom-dark">|</span>
          <span className="text-sm text-custom-whiskey">
            Jan 2025 - Present
          </span>
        </span>

        <div className="mt-2 text-sm">
          - Took ownership of delivering the bank's refreshed API Portal and
          API Registry, driving domain-driven design implementation end-to-end:
          development, infrastructure setup, mentoring junior engineers, and
          production hardening (CVE remediation, IdP integration, and
          microservice connectivity).
        </div>
        <div className="mt-2 text-sm">
          - Embedded the API Portal into a microfrontend architecture and
          strengthened an OpenAPI-first operating model, improving API
          governance and enabling follow-on capabilities such as MCP use cases,
          API SDK generation, and tighter API Gateway integration.
        </div>
        <div className="mt-2 text-sm">
          - In a second initiative, incubated an email platform from the
          Accelerate hackathon to production, shaping it from ideation into a
          microservice-based platform with AI classification, pub/sub messaging,
          IdP + OpenFGA authorization, and downstream audit-system integration.
        </div>
        <div className="mt-2 text-sm">
          - Led a cross-functional team of 7 engineers: planned stories,
          decomposed delivery tasks, designed API routes and database models,
          handled complex AuthN/AuthZ and service integrations, coordinated with
          UX, reviewed pull requests, coached developers, and set up integration
          test environments.
        </div>

        <div className="mt-6">
          <h2 className="text-custom-malibu mb-2">technologies</h2>
          <div className="flex items-center gap-2 flex-wrap">
            <WorkExperienceTag text="Java Spring Boot" />
            <WorkExperienceTag text="Java Quarkus" />
            <WorkExperienceTag text="Golang" />
            <WorkExperienceTag text="Gin" />
            <WorkExperienceTag text="React.ts" />
            <WorkExperienceTag text="Lit.js" />
            <WorkExperienceTag text="TypeScript" />
            <WorkExperienceTag text="Styled Components" />
            <WorkExperienceTag text="Microfrontends" />
            <WorkExperienceTag text="GraphQL" />
            <WorkExperienceTag text="REST" />
            <WorkExperienceTag text="Microsoft Graph API" />
            <WorkExperienceTag text="Azure AD" />
            <WorkExperienceTag text="OpenFGA" />
            <WorkExperienceTag text="JWT" />
            <WorkExperienceTag text="OAuth2" />
            <WorkExperienceTag text="Kong API Gateway" />
            <WorkExperienceTag text="OpenAPI Spec" />
            <WorkExperienceTag text="Apicurio" />
            <WorkExperienceTag text="Amazon EKS" />
            <WorkExperienceTag text="Knative" />
            <WorkExperienceTag text="Kubernetes" />
            <WorkExperienceTag text="PostgreSQL" />
            <WorkExperienceTag text="Pub/Sub" />
          </div>
        </div>
      </div>

      <div className="mt-4  p-4 bg-custom-dark/20 rounded-[20px] font-customInter tracking-wider duration-150 hover:-translate-y-1 hover:bg-custom-dark/25">
        <h3 className="text-lg font-customMono tracking-normal text-custom-chaKy">
          Standard Chartered Bank
        </h3>
        <span>
          <span className="text-sm text-custom-coral">
            Technology Internship (Work-Study)
          </span>
          <span className="px-2 text-custom-dark">|</span>
          <span className="text-sm text-custom-whiskey">
            May 2022 - Dec 2024
          </span>
        </span>

        <div className="mt-2 text-sm">
          - I started my first stint learning React and modern frontend
          development hands-on, building an internal API portal, translating
          30+ Figma screens into production code, integrating backend REST APIs
          into a microfrontend, and raising test confidence with
          Jest/Enzyme/React Testing Library.
        </div>
        <div className="mt-2 text-sm">
          - In my second stint, I moved closer to platform engineering and
          DevOps: deploying APIClarity on Kubernetes/OpenShift with Helm, then
          automating API manifest generation and configuration linting to make API Gateway
          onboarding faster and more reliable. This helped "shift left" the integration cycle and reduce manual toil for the team.
        </div>
        <div className="mt-2 text-sm">
          - By my third stint, I had transitioned fully into backend Java and
          open banking work, delivering API gateway consent reporting and integration testing
          APIs, building a unit test toolkit for Open Banking/OAS schema
          validation, and helping the team scale quality through BDD,
          OpenAPI-first workflows, and cloud deployment pipelines across
          AWS/Azure Pipelines/OpenShift.
        </div>

        <div className="mt-6">
          <h2 className="text-custom-malibu mb-2">technologies</h2>
          <div className="flex items-center gap-2 flex-wrap">
            <WorkExperienceTag text="React" />
            <WorkExperienceTag text="Tailwind" />
            <WorkExperienceTag text="Jest" />
            <WorkExperienceTag text="React-testing-library" />
            <WorkExperienceTag text="Java" />
            <WorkExperienceTag text="OpenAPI / OAS" />
            <WorkExperienceTag text="Open Banking" />
            <WorkExperienceTag text="Kong Gateway" />
            <WorkExperienceTag text="REST API" />
            <WorkExperienceTag text="Git" />
            <WorkExperienceTag text="Azure Pipelines" />
            <WorkExperienceTag text="AWS" />
            <WorkExperienceTag text="Oauth2" />
            <WorkExperienceTag text="Postman" />
            <WorkExperienceTag text="JWT" />
            <WorkExperienceTag text="Docker" />
            <WorkExperienceTag text="Kubernetes" />
            <WorkExperienceTag text="Helm" />
            <WorkExperienceTag text="Openshift" />
            <WorkExperienceTag text="JUnit" />
            <WorkExperienceTag text="Mockito" />
            <WorkExperienceTag text="JSON Schema" />
            <WorkExperienceTag text="BDD" />
            <WorkExperienceTag text="Groovy" />
            <WorkExperienceTag text="Spock" />
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
          - Started as a school project and grew into a real in-house scheduling
          platform, where I gained my first deep experience driving a product
          from requirements and design through implementation and deployment.
        </div>
        <div className="mt-2 text-sm">
          - Led a team of 5 engineers, guiding implementation standards and best
          practices across the stack while coordinating delivery with product
          and engineering stakeholders.
        </div>
        <div className="mt-2 text-sm">
          - Architected and deployed the solution on AWS (EC2, S3, ALB,
          Route53, ACM), building the application with TypeScript, Node.js,
          React.js, and Tailwind.
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
          - Set up DNS and HTTPS, and implemented secure authentication and
          authorization flows using JWT, OAuth2, and OIDC.
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
            <WorkExperienceTag text="OIDC" />
            <WorkExperienceTag text="JWT" />
            <WorkExperienceTag text="Docker" />
            <WorkExperienceTag text="Websockets" />
            <WorkExperienceTag text="NGINX" />
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
