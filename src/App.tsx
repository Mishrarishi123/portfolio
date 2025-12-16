import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/common/Nav";
import SplashCursor from "./components/ui/cursor/SplashCursor";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <SplashCursor />
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
