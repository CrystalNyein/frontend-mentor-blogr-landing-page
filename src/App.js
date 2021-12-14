import "./App.css";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <MainSection />
      <FooterSection />
    </div>
  );
};

export default App;
