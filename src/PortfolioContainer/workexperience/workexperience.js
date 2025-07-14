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
            <h6 className="heading">DC Water</h6>
            <span className="date">October 2024 - Present</span>
        </div>
        <p className="position">Data Consultant</p>
        </div>
        <div className="job-details">
        <div className="header">
            <h6 className="heading">GW, EEMI</h6>
            <span className="date">July 2024 - June 2025</span>
        </div>
        <p className="position">Analyst</p>
    </div>
      <div className="job-details">
        <div className="header">
            <h6 className="heading">The World Bank Group</h6>
            <span className="date">January 2024 - May 2024</span>
        </div>
        <p className="position">Data Science Consultant</p>
    </div>

    <div className="job-details">
        <div className="header">
            <h6 className="heading">The George Washington University, USA</h6>
            <span className="date">March 2023 - May 2024 </span>
        </div>
        <p className="position">Web Analyst</p>
    </div>

</div>
      </div>
    </div>
    
   
  );
}
