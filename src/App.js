import Header from "./components/1-Header/Header";
import Hero from "./components/2-Hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [scrollBTN, setScrollBTN] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      
      if (window.scrollY >= 150) {
        setScrollBTN(true);
      } else {
        setScrollBTN(false);
      }
    });
  }, [scrollBTN]);

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a style={{ transition: "0.4s", opacity: scrollBTN ? 1 : 0 }} href="#up">
        <button className="scrolltop icon-circle-up"></button>
      </a>
    </div>
  );
}

export default App;
