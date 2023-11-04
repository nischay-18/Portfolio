import React from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";
import pdf from "../../../assets/Resume.pdf"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Nischay Sai Cherukuri</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
               
                <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Data Enthusiast")
                    .pauseFor(200)
                    .deleteAll()
                    .typeString("Machine Learning")
                    .pauseFor(200)
                    .deleteAll()
                    .typeString("Deep Learning")
                    .pauseFor(200)
                    .deleteAll()
                    .typeString("Natural Language Processing")
                    .pauseFor(200)
                    .deleteAll()
                    .typeString("Cloud Computing Enthusiast")
                    .pauseFor(200)
                    .deleteAll()
                    .typeString("Big Data Analyst")
                    .pauseFor(200)
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
              </h1>
            </span>
            <span className="profile-role-tagline">
            Empowering Decisions with Data-Driven Solutions.
            </span>
          </div>

          <div className="profile-options">
            <div>
            <a  href={pdf} target="_blank" rel="noopener noreferrer">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
            </div>
            
            <div class="profie-social">
                        <a class="color-white" href="https://github.com/nischay-18" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/nischaysaicherukuri/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
