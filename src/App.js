import "./styles/style.css";
// import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Top from "./components/Top";
import LoadingScreen from 'react-loading-screen';
import { useState, useEffect} from "react";


const App = () => {

  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);
    return () => clearTimeout(timer);

  });

  return (
    <div>
      <LoadingScreen
    loading={load}
    bgColor='#191919'
    spinnerColor='#B40301'
    textColor='white'
    // logoSrc='/logo.png'
  > 
    <Top />
      <Nav />
      <Header style={{backgroundColor:"black"}} />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
  </LoadingScreen>
      
    </div>
  );
};

export default App;
