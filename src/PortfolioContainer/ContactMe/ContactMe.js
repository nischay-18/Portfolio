import React, { useEffect, useRef, useState } from "react";

import { toast } from "react-toastify";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

import lottie from 'lottie-web';
import animationData from '../../images/Animation - 1698461819574.json';
import emailjs from 'emailjs-com';
import "./ContactMe.css";

export default function ContactMe(props) {
  const formRef = useRef(null);

  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => anim.destroy();
  }, []);
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7mxmt0b', 'template_7r4b30z', e.target, '5QXDD6KBl4rbrxL85')
        .then((result) => {
            toast.success("Message sent successfully!");
            if (formRef.current) {
              formRef.current.reset(); // Reset the form
          }
            setName("");  // Reset the name field
          setEmail("");  // Reset the email field
          setMessage("");  // Reset the message field
        }, (error) => {
            toast.error("Failed to send the message.");
        });
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div id="ContactMe">
      <div className="main-container1">   
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form3 container">
        <div className="ani-cont1">
          <div className="animation-container" ref={animationContainer}></div>
        </div>
        <div className="form about-me-card">
          <form onSubmit={sendEmail} ref={formRef} >
            <label htmlFor="name">Name</label>
            <input type="text" name="from_name" onChange={(e) => setName(e.target.value)} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />

            <label htmlFor="message">Message</label>
            <textarea name="message" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>

            <div className="send-btn">
              <button className="submit-button" type="submit">send</button>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
    
  );
}
