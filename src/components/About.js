import React from "react";
import { image } from "../data/data";

function About() {
  return (<div id="about">About
  <h2>About Me</h2>
  <p> I am a Web Developer from {image.city}</p>
  <img src={image.image} alt="I made this" />
  </div>);
}

export default About;

