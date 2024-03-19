import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-center py-5">
      <ul className="flex items-center justify-center gap-6">
        <li>Home</li>
        <li>Work</li>
        <li>About</li>
        <li>Projects</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

export default Navbar;
