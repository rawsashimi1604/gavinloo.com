import { ReactElement } from "react";
import Header from "../../components/typography/Header";
import { BiLogoVisualStudio } from "react-icons/bi";

import { FaCube, FaJava, FaLinux } from "react-icons/fa";
import {
  SiApachemaven,
  SiAxios,
  SiBitbucket,
  SiConfluence,
  SiCss3,
  SiCucumber,
  SiDocker,
  SiDotnet,
  SiElasticsearch,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGoland,
  SiGradle,
  SiHelm,
  SiIntellijidea,
  SiIterm2,
  SiJavascript,
  SiJest,
  SiJira,
  SiJson,
  SiJunit5,
  SiKibana,
  SiKong,
  SiKubernetes,
  SiLogstash,
  SiMarkdown,
  SiMongodb,
  SiMysql,
  SiNano,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNpm,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiQt,
  SiRecoil,
  SiRedhatopenshift,
  SiRedux,
  SiSelenium,
  SiSpring,
  SiSqlite,
  SiTailwindcss,
  SiTestinglibrary,
  SiVim,
  SiYaml,
  SiQuarkus,
  SiBruno,
  SiKnative,
  SiNatsdotio,
} from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaAws, FaGolang } from "react-icons/fa6";
import { SiHtml5 } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { GoDotFill } from "react-icons/go";
import Comment from "../../components/typography/Comment";
import ConsoleLog from "../../components/typography/ConsoleLog";
import { DiGroovy } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";

export interface SkillIconProps {
  icon: ReactElement;
  label: string;
}

function SkillIcon({ icon, label }: SkillIconProps) {
  return (
    <div className="flex-col items-center justify-center">
      <div className="text-5xl">{icon}</div>
      <span className="inline-block w-full text-[8.5px] text-center font-customInter tracking-widest">
        {label}
      </span>
    </div>
  );
}

export interface MethodTextProps {
  text: string;
}

function MethodText({ text }: MethodTextProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="tracking-wider text-sm text-custom-whiskey">{text}</span>
      <GoDotFill className="w-2 h-2 mt-1 text-custom-coral" />
    </div>
  );
}

function ReadingListText({ text }: MethodTextProps) {
  return (
    <div className="flex items-start gap-2">
      <div className="flex">
        <GoDotFill className="mt-1.5 text-[8px] text-custom-lightwhite" />
      </div>
      <span className="inline-block tracking-wider text-sm text-custom-malibu">
        {text}
      </span>
    </div>
  );
}

function Skills() {
  return (
    <section>
      <Header text="My Skills." />

      <div className="mt-8">
        <ConsoleLog text="a list of technologies i've worked with in the past!" />
      </div>

      <h2 className="font-customRoboto tracking-widest mt-6 flex-wrap">
        LANGUAGES
      </h2>
      <div className="flex flex-wrap items-center gap-2 py-2">
        <SkillIcon icon={<FaJava />} label="JAVA" />
        <SkillIcon icon={<FaGolang />} label="GOLANG" />
        <SkillIcon icon={<SiJavascript />} label="JS" />
        <SkillIcon icon={<SiTypescript />} label="TS" />
        <SkillIcon icon={<FaPython />} label="PYTHON" />
        <SkillIcon icon={<DiGroovy />} label="GROOVY" />
        <SkillIcon icon={<SiHtml5 />} label="HTML" />
        <SkillIcon icon={<SiCss3 />} label="CSS" />
        <SkillIcon icon={<FaLinux />} label="LINUX" />
        <SkillIcon icon={<SiGnubash />} label="BASH" />
        <SkillIcon icon={<SiJson />} label="JSON" />
        <SkillIcon icon={<SiYaml />} label="YAML" />
        <SkillIcon icon={<SiMarkdown />} label="MARKDOWN" />
      </div>

      <h2 className="font-customRoboto tracking-widest mt-6">
        FRAMEWORKS AND TOOLS
      </h2>
      <div className="flex items-center gap-2 py-2 flex-wrap">
        <SkillIcon icon={<SiQuarkus />} label="QUARKUS" />
        <SkillIcon icon={<SiApachemaven />} label="MAVEN" />
        <SkillIcon icon={<SiJunit5 />} label="JUNIT" />
        <SkillIcon icon={<SiSpring />} label="SPRING" />
        <SkillIcon icon={<SiBruno />} label="BRUNO" />
        <SkillIcon icon={<SiPostman />} label="POSTMAN" />
        <SkillIcon icon={<SiGradle />} label="GRADLE" />
        <SkillIcon icon={<SiNodedotjs />} label="NODE" />
        <SkillIcon icon={<SiNpm />} label="NPM" />
        <SkillIcon icon={<SiReact />} label="REACT" />
        <SkillIcon icon={<SiNextdotjs />} label="NEXT" />
        <SkillIcon icon={<SiRedux />} label="REDUX" />
        <SkillIcon icon={<SiTailwindcss />} label="TAILWIND" />
        <SkillIcon icon={<SiAxios />} label="AXIOS" />
        <SkillIcon icon={<SiExpress />} label="EXPRESS" />
        <SkillIcon icon={<SiPrisma />} label="PRISMA" />
        <SkillIcon icon={<SiRecoil />} label="RECOIL" />
        <SkillIcon icon={<SiJest />} label="JEST" />
        <SkillIcon icon={<SiCucumber />} label="CUCUMBER" />
        <SkillIcon icon={<SiTestinglibrary />} label="TEST LIB" />
        <SkillIcon icon={<SiSelenium />} label="SELENIUM" />
        <SkillIcon icon={<SiPandas />} label="PANDAS" />
        <SkillIcon icon={<SiQt />} label="QT" />
        <SkillIcon icon={<SiDotnet />} label=".NET" />
        <SkillIcon icon={<SiConfluence />} label="CONF" />
        <SkillIcon icon={<SiJira />} label="JIRA" />
      </div>

      <h2 className="font-customRoboto tracking-widest mt-6 ">
        DEVOPS AND CLOUD
      </h2>
      <div className="flex items-center gap-2 py-2 flex-wrap">
        <SkillIcon icon={<SiGit />} label="GIT" />
        <SkillIcon icon={<SiGithub />} label="GITHUB" />
        <SkillIcon icon={<SiBitbucket />} label="BB" />
        <SkillIcon icon={<VscAzureDevops />} label="AZURE" />
        <SkillIcon icon={<FaAws />} label="AWS" />
        <SkillIcon icon={<SiGithubactions />} label="GH ACTIONS" />
        <SkillIcon icon={<SiDocker />} label="DOCKER" />
        <SkillIcon icon={<FaCube />} label="T.CONTAINER" />
        <SkillIcon icon={<SiKubernetes />} label="K8S" />
        <SkillIcon icon={<SiKnative />} label="KNATIVE" />
        <SkillIcon icon={<SiHelm />} label="HELM" />
        <SkillIcon icon={<SiRedhatopenshift />} label="OPENSHIFT" />
        <SkillIcon icon={<SiElasticsearch />} label="ELASTIC" />
        <SkillIcon icon={<SiLogstash />} label="LOGSTASH" />
        <SkillIcon icon={<SiKibana />} label="KIBANA" />
        <SkillIcon icon={<SiNatsdotio />} label="NATS" />
      </div>

      <div className="flex flex-col md:flex-row md:items-center mt-6 gap-4 md:gap-12">
        <div>
          <h2 className="font-customRoboto tracking-widest">DATABASES</h2>
          <div className="flex flex-wrap items-center gap-2 py-2">
            <SkillIcon icon={<SiPostgresql />} label="POSTGRES" />
            <SkillIcon icon={<SiMysql />} label="MYSQL" />
            <SkillIcon icon={<SiMongodb />} label="MONGODB" />
            <SkillIcon icon={<SiSqlite />} label="SQLITE" />
          </div>
        </div>
        <div>
          <h2 className="font-customRoboto tracking-widest">
            API GATEWAY AND PROXIES
          </h2>
          <div className="flex  flex-wrap items-center gap-2 py-2">
            <SkillIcon icon={<SiKong />} label="KONG" />
            <SkillIcon icon={<SiNginx />} label="NGINX" />
          </div>
        </div>
        <div>
          <h2 className="font-customRoboto tracking-widest">IDES</h2>
          <div className="flex  flex-wrap items-center gap-2 py-2">
            <SkillIcon icon={<BiLogoVisualStudio />} label="VSCODE" />
            <SkillIcon icon={<SiIntellijidea />} label="INTELLIJ" />
            <SkillIcon icon={<SiGoland />} label="GOLAND" />
            <SkillIcon icon={<SiVim />} label="VIM" />
            <SkillIcon icon={<SiNano />} label="GNU NANO" />
            <SkillIcon icon={<SiIterm2 />} label="ITERM2" />
          </div>
        </div>
      </div>
      <h2 className="font-customRoboto tracking-widest mt-6 ">
        METHODOLOGIES x CONCEPTS
      </h2>
      <Comment text="// stuff i've picked up over the years." />
      <div className="flex items-center gap-2 py-2 flex-wrap">
        <MethodText text="agile" />
        <MethodText text="scrum" />
        <MethodText text="git flow" />
        <MethodText text="mentoring" />
        <MethodText text="sprint planning" />
        <MethodText text="requirement gathering" />
        <MethodText text="technical planning" />
        <MethodText text="delegation" />
        <MethodText text="clean code" />
        <MethodText text="software design patterns" />
        <MethodText text="software testing (unit, integration, e2e)" />
        <MethodText text="data structures and algorithms" />
        <MethodText text="solid principles" />
        <MethodText text="rest api" />
        <MethodText text="api security" />
        <MethodText text="authentication" />
        <MethodText text="authorization" />
        <MethodText text="basic networking" />
        <MethodText text="web protocols" />
        <MethodText text="uml and software diagramming" />
        <MethodText text="relational database design" />
        <MethodText text="microservices architecture" />
        <MethodText text="mvc architecture" />
        <MethodText text="monolith / clean architecture" />
        <MethodText text="domain driven design" />
        <MethodText text="api gateway" />
        <MethodText text="test driven development" />
        <MethodText text="open source" />
      </div>
      <h2 className="font-customRoboto tracking-widest mt-6 ">READING LIST</h2>

      <Comment text="// currently reading and past books i've read." />
      <div className="flex flex-col justify-center gap-2 py-2 flex-wrap">
        <ReadingListText text="Clean Code: A Handbook of Agile Software Craftsmanship - Robert Martin" />
        <ReadingListText text="Design Patterns - Gang of Four" />
        <ReadingListText text=" The Mythical Man-Month - Fred Brooks" />
        <ReadingListText text=" Designing Data-Intensive Applications - Martin Kleppmann" />
        <ReadingListText text=" The Pragmatic Programmer - Andy Hunt, Dave Thomas" />
        <ReadingListText text=" The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win - Gene Kim, Kevin Behr, George Spafford" />
        <ReadingListText text=" Refactoring: Improving the Design of Existing Code - Martin Fowler" />
        <ReadingListText text=" Domain-Driven Design: Tackling Complexity in the Heart of Software - Eric Evans" />
        <ReadingListText text="  Implementing Domain-Driven Design - Vaughn Vernon" />
      </div>
    </section>
  );
}

export default Skills;
