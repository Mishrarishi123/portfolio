import "./App.css";
import About from "./components/pages/about/About";
import Hero from "./components/pages/hero/Hero";
// import Nav from "./components/common/Nav";
import SplashCursor from "./components/ui/cursor/SplashCursor";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <SplashCursor />
      <main>
        {/* <Nav /> */}
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
