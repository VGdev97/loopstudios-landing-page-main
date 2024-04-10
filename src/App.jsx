import "./app.scss";
import FirstSection from "./components/FirstSection";
import GridSection from "./components/GridSection";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <header className="header">
        <Navbar />
        <Hero />
      </header>
      <FirstSection />
      <GridSection />
      <Footer />
    </main>
  );
}

export default App;
