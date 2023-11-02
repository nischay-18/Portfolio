import React, { useEffect, useRef } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./AboutMe.css";
import lottie from 'lottie-web';
import animationData from '../../images/Animation - 1698619103837.json'
import pdf from "../../assets/Resume.pdf"
export default function AboutMe(props) {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => anim.destroy(); // optional clean up for unmounting
  }, []);
  




  const SCREEN_CONSTSANTS = {
    description:
      "Pursuing a Master's in Data Science, I have honed my skills in machine learning, deep learning, NLP, and Big Data. My practical experience, combined with proficiency in AWS and Azure, uniquely positions me to deliver innovative, data-driven solutions for your organization.",
    highlights: {
      bullets: [
        "Computer Vision Techniques",
        "Natural Language Processing for Text Analysis",
        "Machine Learning Model Development",
        "Cloud Platforms (AWS, Azure)",
        "Big Data Analysis",
        "Statistical Methods for Data Interpretation",
        "Data Visualization Skills",
        "Data Cleaning and Preprocessing",
        "Effective Team Collaboration",
        "Commitment to Continuous Learning"
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container main-container-02" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="central-form3 container">
        <div className="ani-cont1">            
            <div className="animation-container" ref={animationContainer}></div>
        </div>
        <div className="about-me-card">          
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <a  href={pdf} target="_blank" rel="noopener noreferrer">
                <button className="btn highlighted-btn">Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}




