import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  function isSelected(path) {
    return path == window.location.pathname;
  }

  return (
    <nav className="font-customInter text-custom-chaKy flex items-center justify-center py-5">
      <ul className="flex items-center justify-center gap-6 text-sm tracking-wider">
        <Link to="/">
          <li
            className={`${
              isSelected("/") && " bg-custom-lightWhite/5  rounded-[30px] "
            } flex items-center justify-center gap-2 cursor-pointer py-1.5 px-3 `}
          >
            Home
            <span className="inline-block text-custom-lightWhite text-xs py-1 px-2.5 rounded-lg border-custom-dark border-[0.5px]">
              /
            </span>
          </li>
        </Link>

        <Link to="/work">
          <li
            className={`${
              isSelected("/work") &&
              " flex items-center justify-center gap-2 bg-custom-lightWhite/5  rounded-[30px] "
            } cursor-pointer py-1.5 px-3 `}
          >
            Work
          </li>
        </Link>

        <Link to="/about">
          <li
            className={`${
              isSelected("/about") &&
              " flex items-center justify-center gap-2 bg-custom-lightWhite/5  rounded-[30px] "
            } cursor-pointer py-1.5 px-3`}
          >
            About
          </li>
        </Link>

        <Link to="/projects">
          <li
            className={`${
              isSelected("/projects") &&
              " flex items-center justify-center gap-2 bg-custom-lightWhite/5 rounded-[30px]  "
            } cursor-pointer py-1.5 px-3 `}
          >
            Projects
          </li>
        </Link>

        <Link to="/blog">
          <li
            className={`${
              isSelected("/blog") &&
              " flex items-center justify-center gap-2 bg-custom-lightWhite/5  rounded-[30px] "
            } cursor-pointer py-1.5 px-3`}
          >
            Blog
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
