import "./AboutContent.css";

import React from 'react';
import {Link} from "react-router-dom";
import photo1 from "../assets/reactjs.png";
import photo2 from "../assets/react.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I'm a react front-end developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stackt top">
                    <img src={photo1} className="img" alt="true"/>
                </div>
                <div className="img-stackt bottom">
                    <img src={photo2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default AboutContent;
