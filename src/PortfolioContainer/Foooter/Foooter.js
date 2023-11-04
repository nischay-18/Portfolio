import React from "react";
import "./Foooter.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Foooter() {
    return (
        <div className="footer-container">
            <div className="footer-parent">

                <div className="footer-content container-foot">
                    <div className="footer-left ">
                        <h3>Nischay Sai Cherukuri</h3>
                        <p><FaPhone className="icon-padding"/> +1 202-766-6004</p>
                        <p><FaEnvelope className="icon-padding" /><a href="mailto:chnischaysai@gwu.edu">chnischaysai@gwu.edu</a></p>
                        <p><FaMapMarkerAlt className="icon-padding"/> Arlington, VA</p>
                    </div>
                    <div className="footer-right">
                        <a class="color-white" href="https://github.com/nischay-18" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/nischaysaicherukuri/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
