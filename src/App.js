import "./App.css";
import Head from "./components/Head";
import Hero from "./components/Hero";
import { BackgroundBeams } from "./components/ui/background-beams";
import { FloatingNav } from "./components/floating-navbar";
import { BrowserRouter } from "react-router-dom";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "./data";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    // <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10  ">
    <main className="relative w-full bg-black-100 flex justify-center items-center  flex-col overflow-hidden  sm:px-10  ">
      <BrowserRouter>
        <FloatingNav navItems={navItems} className={""} />
        <Head />
        <Hero />

        <BackgroundBeams />

        <br />
        <br />
        <br />
        <br />
        <br />
        <About />
        <RecentProjects />
        <Skills />
        <Contact />
      </BrowserRouter>
    </main>
  );
}

export default App;
