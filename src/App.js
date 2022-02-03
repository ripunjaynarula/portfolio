import "./styles/style.css";
// import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Top from "./components/Top";


const App = () => {
  return (
    <div>
      <Top />
      <Nav />
      <Header />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
