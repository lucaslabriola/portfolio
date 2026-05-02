import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Recruiters from "./components/Recruiters";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import RainBackground from "./components/RainBackground";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <> 
      <RainBackground />  
      <ScrollProgress />
      <Header />
      <Home />
      <About />
      <Projects />
      <Recruiters />
      <Contact />
      <Footer />
      <WhatsAppButton /> 
    </>
  );
}

export default App;
