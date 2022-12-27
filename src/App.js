import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
