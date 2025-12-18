import "./App.css";
import About from "./components/pages/about/About";
import Hero from "./components/pages/hero/Hero";
import Projects from "./components/pages/projects/Projects";
import Skills from "./components/pages/skills/Skills";
import SplashCursor from "./components/ui/cursor/SplashCursor";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <SplashCursor />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
