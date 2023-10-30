import React from "react";
import Typical from "react-typical";
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
                <Typical
                  loop={Infinity}
                  steps={[
                    "Data Enthusiast 📊",
                    1000,
                    "Machine Learning 🤖",
                    1000,
                    "Deep Learning 🧠",
                    1000,
                    "Natural Language Processing 📝",
                    1000,
                    "Big Data Analyst 💾",
                    1000,
                    "Cloud Computing Enthusiast",
                    1000,
                  ]}
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
