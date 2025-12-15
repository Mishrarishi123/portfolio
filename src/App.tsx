
import './App.css'
import Hero from './components/Hero'
import Nav from "./components/common/Nav";

function App() {

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        
      </main>
      
    </div>
  );
}


export default App
