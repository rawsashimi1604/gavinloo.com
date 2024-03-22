import { SiKubernetes } from "react-icons/si";
import Header from "../../components/typography/Header";
import ImportantText from "../../components/typography/ImportantText";

import { TiArrowShuffle } from "react-icons/ti";
import { RiStockFill } from "react-icons/ri";
import { BsSpotify } from "react-icons/bs";
import { CgPokemon } from "react-icons/cg";
import { Link } from "react-router-dom";

function ProjectsList() {
  return (
    <section className="font-customRoboto flex-col items-center justify-center">
      <div className="mb-12">
        <Header text="Play." />
      </div>
      <div className="flex w-full items-center justify-center">
        <ImportantText text="A collection of open-sourced tools, guides and projects I've created over the years designed to be helpful and fun!" />
      </div>

      <div className="mt-14 grid grid-cols-5 gap-6">
        {/* Sushi gateway */}
        <Link
          to="https://github.com/rawsashimi1604/sushi-gateway"
          target="_blank"
          className="flex justify-between gap-3 col-span-5 md:col-span-3 p-8 rounded-md bg-custom-dark/20 w-full duration-150 hover:-translate-y-1 hover:bg-custom-dark/25"
        >
          <div>
            <h3 className="text-custom-chaKy text-lg font-customEyeCatcher tracking-wider">
              Sushi Gateway
            </h3>
            <span className="inline-block mt-7 text-custom-lightWhite tracking-wide font-medium font-customInter text-sm">
              A lightweight modular API Gateway written in Go.
            </span>
          </div>
          <div className="self-start p-5 rounded-full bg-custom-bg">
            <TiArrowShuffle className="text-4xl text-custom-malibu " />
          </div>
        </Link>

        {/* K8s starter */}
        <Link
          to="https://github.com/rawsashimi1604/k8s-starter-diagram"
          target="_blank"
          className="flex justify-between gap-3 col-span-5 md:col-span-2 p-8 rounded-md bg-custom-dark/20 w-full duration-150 hover:-translate-y-1 hover:bg-custom-dark/25"
        >
          <div>
            <h3 className="text-custom-chaKy text-lg font-customEyeCatcher tracking-wider">
              Kubernetes Starter
            </h3>
            <span className="inline-block mt-7 text-custom-lightWhite tracking-wide font-medium font-customInter text-sm">
              Excalidraw diagram for Kubernetes.
            </span>
          </div>
          <div className="self-start p-5 rounded-full bg-custom-bg">
            <SiKubernetes className="text-4xl text-custom-chaKy " />
          </div>
        </Link>

        {/* ReversionSys */}
        <Link
          to="https://github.com/rawsashimi1604/ReversionSys"
          target="_blank"
          className="flex gap-3 justify-between col-span-5 md:col-span-2 p-8 rounded-md bg-custom-dark/20 w-full duration-150 hover:-translate-y-1 hover:bg-custom-dark/25"
        >
          <div>
            <h3 className="text-custom-chaKy text-lg font-customEyeCatcher tracking-wider">
              ReversionSys
            </h3>
            <span className="inline-block mt-7 text-custom-lightWhite tracking-wide font-medium font-customInter text-sm">
              Semi-Automated Trading Bot using IBKR TWS API. Backtesting results
              included.
            </span>
          </div>
          <div className="self-start p-5 rounded-full bg-custom-bg">
            <RiStockFill className="text-4xl text-custom-purple " />
          </div>
        </Link>

        {/* Personal Website */}
        <Link
          to="https://github.com/rawsashimi1604/personal-website"
          target="_blank"
          className="flex gap-3 justify-between col-span-5 md:col-span-3 p-8 rounded-md bg-custom-dark/20 w-full duration-150 hover:-translate-y-1 hover:bg-custom-dark/25"
        >
          <div>
            <h3 className="text-custom-chaKy text-lg font-customEyeCatcher tracking-wider">
              Personal Website
            </h3>
            <span className="inline-block mt-7 text-custom-lightWhite tracking-wide font-medium font-customInter text-sm">
              React app for this website. Includes instructions on how to host
              and deploy your own.
            </span>
          </div>
        </Link>

        {/* Spotify Clone */}
        <Link
          to="https://github.com/rawsashimi1604/Spotify-Clone"
          target="_blank"
          className="flex gap-3 justify-between col-span-5 md:col-span-3 p-8 rounded-md bg-custom-dark/20 w-full duration-150 hover:-translate-y-1 hover:bg-custom-dark/25"
        >
          <div>
            <h3 className="text-custom-chaKy text-lg font-customEyeCatcher tracking-wider">
              Spotify Clone
            </h3>
            <span className="inline-block mt-7 text-custom-lightWhite tracking-wide font-medium font-customInter text-sm">
              Spotify web application replica. Requires premium.
            </span>
          </div>
          <div className="self-start p-5 rounded-full bg-custom-bg">
            <BsSpotify className="text-4xl text-custom-green " />
          </div>
        </Link>

        {/* Poke TCG DB */}
        <Link
          to="https://github.com/rawsashimi1604/Poke_TCG_DB"
          target="_blank"
          className="flex gap-3 justify-between col-span-5 md:col-span-2 p-8 rounded-md bg-custom-dark/20 w-full duration-150 hover:-translate-y-1 hover:bg-custom-dark/25"
        >
          <div>
            <h3 className="text-custom-chaKy text-lg font-customEyeCatcher tracking-wider">
              Poke TCG DB
            </h3>
            <span className="inline-block mt-7 text-custom-lightWhite tracking-wide font-medium font-customInter text-sm">
              Pokemon Trading Card Game database web application.
            </span>
          </div>
          <div className="self-start p-5 rounded-full bg-custom-bg">
            <CgPokemon className="text-4xl text-custom-deepRed " />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default ProjectsList;
