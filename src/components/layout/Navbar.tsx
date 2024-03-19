import React from "react";

function Navbar() {
  return (
    <nav className="font-customInter text-custom-chaKy flex items-center justify-center py-5">
      <ul className="flex items-center justify-center gap-6 text-sm tracking-wider">
        {/* Selected */}
        <li className="cursor-pointer flex items-center justify-center gap-2 bg-custom-lightWhite/5 py-1.5 px-4 rounded-[30px]">
          <span className="animate-">Home</span>
          <span className="inline-block text-custom-lightWhite text-xs py-1 px-2.5 rounded-lg border-custom-dark border-[0.5px]">
            /
          </span>
        </li>

        {/* Non selected */}
        <li className="cursor-pointer">Work</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Blog</li>
      </ul>
    </nav>
  );
}

export default Navbar;
