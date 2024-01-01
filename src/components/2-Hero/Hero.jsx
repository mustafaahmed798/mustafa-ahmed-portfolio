import React from "react";
import "./Hero.css";
import mustafa from "./mustafa.png";
import heroAnimation from "./animation/hero.json";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src={mustafa} alt="" className="avatar" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title"><Typewriter options={{strings:['Mustafa Ahmed' , 'Frontend developer | React.js'], autoStart:true ,loop:true }} /></h1>
        <p className="sub-title">
          i'm mustafa ahmed , i'm a frontend developer using react js ,i'm
          graduated from faculty of computers and information menofia university
          ,I finished my military service in the Egyptian Armed Forces as an
          officer, and I am now seeking to develop my abilities to achieve what
          is better and better for my professional career.
        </p>
        <a href="https://www.google.com/" target="_blank" alt='' rel="noreferrer"><button className="resume">Download my resume</button></a>
        <div className="icons flex">
          <a href="https://twitter.com/mustafaahmed48" target="_blank" alt='' rel="noreferrer"><div className="icon icon-x"></div></a>
          <a href="https://www.instagram.com/mustafaahmed7407/" target="_blank" alt='' rel="noreferrer"><div className="icon icon-instagram"></div></a>
          <a href="https://github.com/mustafaahmed798" target="_blank" alt='' rel="noreferrer"><div className="icon icon-github"></div></a>
          <a href="https://www.linkedin.com/in/frontend-mustafa-ahmed/" target="_blank" alt='' rel="noreferrer"><div className="icon icon-linkedin-square"></div></a>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie
          loop={true}
          style={{ height: "320px", width: "320px" }}
          animationData={heroAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
