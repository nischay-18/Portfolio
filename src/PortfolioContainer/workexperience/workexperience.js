import React, { useEffect, useRef  } from "react";



import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

import "./workexperience.css";
//import lottie from 'lottie-web';
//import animationData from '../../images/animation_lo5v89lk.json';

import lottie from 'lottie-web';
import animationData from '../../images/Animation - 1698277530693.json';

export default function WorkExperience(props) {
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

  return (

    <div className="main-container-we" id={props.id || ""}>    
    <ScreenHeading subHeading={""} title={"Experience"} />
    
      <div className="central-form2 container">
        <div className="ani-cont">
            
        <div className="animation-container" ref={animationContainer}></div>
      </div>
      <div className="work-experience-container">
    
      <div className="job-details">
        <div className="header">
            <h6 className="heading">The World Bank Group</h6>
            <span className="date">January 2024 - May 2024</span>
        </div>
        <p className="position">Data Science Consultant</p>
     <div className="hi">
        <ul>
            <li>Assessed and visualized EU rail/road traffic flows using Eurostat data in NUTS 2 regions.</li>
            <li>Developed an interactive dashboard for country-level EU rail and road transport data analysis.</li>
            <li>Applied Machine Learning and econometrics for predicting railway stock prices and demand elasticity, aiding transport sector strategy.</li>
            <li>Collaborated in a team to propose emission reduction solutions aligned with the EU Green Deal, emphasizing transportation sector innovation and tech adoption.</li>
        </ul>
        </div>
    </div>

    <div className="job-details">
        <div className="header">
            <h6 className="heading">The George Washington University, USA</h6>
            <span className="date">March 2023 - May 2024</span>
        </div>
        <p className="position">Web Analyst</p>
     <div className="hi">
        <ul>
            <li>Managed and optimized content across GW Engineering and departmental websites using HTML and Drupal.</li>
            <li>Implemented SEO strategies, achieving a 7% increase in overall website score and enhancing key metrics.</li>
            <li>Analyzed website data to inform content strategy and align with user behavior trends.</li>
            <li>Collaborated with the communications director and academic staff to ensure cohesive communication strategies.</li>
        </ul>
        </div>
    </div>

    <div className="job-details">
        <div className="header">
            <h6 className="heading">GTCUBE</h6>
            <span className="date">May 2021 – July 2022</span>
        </div>
        <p className="position">Data Scientist</p>
        <ul>
            <li>Developed and optimized machine learning models for categorizing universities, enhancing student application recommendations, and improving accuracy by 20%.</li>
            <li>Leveraged predictive analytics for sales trend insights, boosting sales by 25% and guiding course and pricing strategy.</li>
            <li>Reduced data processing times by 15% by migrating workflows to AWS and optimizing resources.</li>
        </ul>
    </div>

</div>
      </div>
    </div>
   
  );
}
