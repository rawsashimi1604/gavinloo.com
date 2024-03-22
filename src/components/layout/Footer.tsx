import { FaSpotify } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex gap-5 md:gap-0 flex-col md:flex-row justify-between">
      {/* Spotify + copyright */}
      <div>
        <div
          onClick={() =>
            window.open(
              "https://open.spotify.com/track/07QlP7twNI81IsqhKLFiER?si=a43e29aa1ee643b9",
              "_blank"
            )
          }
          className="bg-custom-malibu/20 p-3 px-5 rounded-[40px] flex items-center gap-4 md:w-[400px] mb-10 font-customRoboto duration-150 cursor-pointer hover:-translate-y-2 ease-in-out"
        >
          <FaSpotify className="w-12 h-12" />
          <div className="">
            <h2 className="text-custom-lightDark">On repeat</h2>
            <h2 className="font-medium">Reverie by Polyphia</h2>
          </div>
        </div>

        <span className="tracking-wide font-medium">&copy; 2024 Gavin Loo</span>
      </div>

      {/* Elsewehere and Contact */}
      <div className="flex gap-12">
        <ul className="flex flex-col gap-2">
          <li className="font-medium text-custom-chaKy mb-2">Other Links!</li>
          <li className="font-medium">
            <a href="https://github.com/rawsashimi1604" target="_blank">
              Github
            </a>
          </li>
          <li className="font-medium">
            <a
              href="https://www.linkedin.com/in/gavin-loo-853047143/"
              target="_blank"
            >
              CV
            </a>
          </li>
          <li className="font-medium">
            <a
              href="https://www.linkedin.com/in/gavin-loo-853047143/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="font-medium">
            <a href="https://www.youtube.com/@codinggavin" target="_blank">
              Youtube
            </a>
          </li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li className="font-medium text-custom-chaKy mb-2">Contact</li>
          <li className="font-medium">
            <a href="mailto:looweiren@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
