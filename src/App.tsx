import "@fontsource/roboto";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/berkshire-swash";
import "animate.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import NotFound404 from "./pages/NotFound404";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:contentId" element={<BlogPost />} />
          <Route path="/*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
