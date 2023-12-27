import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
        <h3>Contact</h3>
        <h1>Get in Touch</h1>

        <div className="sosmed">
            <h5>muhammadyusuf.muhayuf@gmail.com</h5>
            <a href="https://github.com/Muhayuf"><FontAwesomeIcon className="sosmedIcon" icon={faGithub} size="lg" style={{color: "#393e46",}} /></a>
            <a href="https://www.linkedin.com/in/muhammad-yusuf-588280208/"><FontAwesomeIcon className="sosmedIcon" size="lg" icon={faInstagram} style={{color: "#393e46",}} /></a>        
            <a href="https://www.instagram.com/muhayuf/"><FontAwesomeIcon className="sosmedIcon" icon={faLinkedin} size="lg" style={{color: "#393e46",}} /></a>
        </div>
        <div className="copyright">
            <p>Copyright © 2023. Develop & Designed by Muhammad Yusuf</p>
        </div>
    </footer>
  );
}

export default Footer;