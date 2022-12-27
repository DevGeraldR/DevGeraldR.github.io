import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Nav />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
