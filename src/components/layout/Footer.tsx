import { FaSpotify } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex justify-between">
      {/* Spotify + copyright */}
      <div>
        <div className="bg-custom-malibu/20 p-3 px-5 rounded-[40px] flex items-center gap-4 w-[400px] mb-10 font-customRoboto duration-150 cursor-pointer hover:-translate-y-2 ease-in-out">
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
          <li className="font-medium">Github</li>
          <li className="font-medium">CV</li>
          <li className="font-medium">LinkedIn</li>
          <li className="font-medium">Youtube</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li className="font-medium text-custom-chaKy mb-2">Contact</li>
          <li className="font-medium">Email</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
