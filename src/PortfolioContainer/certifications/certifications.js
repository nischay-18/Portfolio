import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import aws from '../../../src/images/download.jpeg';
import ml from '../../../src/images/ml2.jpeg';
import tf from '../../../src/images/tf1.png';
import pytorch from '../../../src/images/pytorch.png';
import ai from '../../../src/images/ai1.jpeg';
import nlp from '../../../src/images/nlp1.png';

import "./certifications.css";

function certifications() {
    const certificationslist = [
        {
            image: aws, 
            title: "AWS Certified Solutions Architect",
            link: "https://www.credly.com/badges/7e6fa14f-61f6-4505-bba8-832dacc03e1d"
        },
        {
            image: ml, 
            title: "Machine Learning",
            link: "https://www.udemy.com/certificate/UC-4b16216a-591b-40eb-aa68-694f70f38f91/"
        },
        {
            image: tf, 
            title: "TensorFlow",
            link: "https://www.udemy.com/certificate/UC-819c0735-5961-4bc4-9454-bb5da6cc0003/"
        },
        {
            image: pytorch, 
            title: "Pytorch",
            link: "https://www.udemy.com/certificate/UC-615d723e-1f9c-466b-af99-edf1d06d2d95/"
        },
        {
            image: ai,
            title: "Artificial intelligence",
            link: "https://www.udemy.com/certificate/UC-39263d43-a7c2-465b-a20b-e21df2ae49bf/"
        },
        {
            image: nlp,
            title: "Natural Language Processing",
            link: "https://www.udemy.com/certificate/UC-39263d43-a7c2-465b-a20b-e21df2ae49bf/"
        }
    ];


    
    return (
        <div id="certifications">
        <div className="main-container-01">
                <ScreenHeading subHeading={""} title={"Certifications"} />
                
                <div className="central-form-2 container">
                    <div className="certifications-grid">
                        {certificationslist.map((cert, index) => (
                            <div key={index} className="certification-card">
                                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                    <img src={cert.image} alt={cert.title} />
                                    <p>{cert.title}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        
    );
}
    
export default certifications;