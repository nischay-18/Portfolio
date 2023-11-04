import React, { useEffect, useRef  } from "react";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

import "./Education.css";
//import lottie from 'lottie-web';
//import animationData from '../../images/animation_lo5v89lk.json';

import lottie from 'lottie-web';
import animationData from '../../images/animation_lo5v89lk.json';

export default function Education(props) {
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

    <div className="main-container1" id={props.id || ""}>    
    <ScreenHeading subHeading={""} title={"Education"} />
    
      <div className="central-form2 container">
        <div className="ani-cont">
            
        <div className="animation-container" ref={animationContainer}></div>
      </div>
        <div className="education-container">
          <div className="text-3xl font-bold underline education-details" >
            <div className="header">

            
            <h6 className="heading">The George Washington University, Washington, DC</h6>
            
            <span className="date">2022-2024</span>
            </div>
            <p class="degree">Master of Science in Data Science</p>
            <p></p>
            <p>Relevant Coursework: Data Mining, Data Warehousing and Visualization, Machine Learning, Cloud Computing, Linux for DevOps</p>

          </div>
          <div className="education-details">
          <div className="header">
          <h6 className="heading">Malla Reddy College of Engineering, Hyderabad, India</h6>
          <span className="date">2018-2022</span>
          </div>
           <p className="degree">Bachelor of Technology in Computer Science & Engineering</p>
           <p></p>
           <p>Relevant Coursework: C, C++, Database Management Systems, Data Structures and Algorithms, Java, Operating Systems</p>
          </div>
        </div>
      </div>
    </div>
  );
}
