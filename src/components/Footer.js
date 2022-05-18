import React from "react";
import "./styling/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faAt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    const resumePdf = process.env.PUBLIC_URL + '/assets/Resume.pdf'

    return (
        <footer class="row text-center text-white p-2">
            <h4 className="my-0 footer-name">
                Leslie Patino
            </h4>
            <p className="my-0 footer-text">
                Front End Developer
            </p>

            <p className="footer-text">
                <a href="https://github.com/lesliejpatino" rel="noreferrer" target="_blank" className="footer-text">
                    <FontAwesomeIcon className="px-3 fa-lg footer-icons" icon={faGithub} /> 
                </a>

                <a href="https://www.linkedin.com/in/lesliejpatino/" rel="noreferrer" target="_blank" className="footer-text">
                    <FontAwesomeIcon className="px-3 fa-lg footer-icons" icon={faLinkedin} /> 
                </a>

                <a href="mailto:lesliejpatino@gmail.com" rel="noreferrer" target="_blank" className="footer-text">
                    <FontAwesomeIcon className="px-3 fa-lg footer-icons" icon={faAt} /> 
                </a>

                <a href={resumePdf} rel="noreferrer" target="_blank" className="footer-text">
                    <FontAwesomeIcon className="px-3 fa-lg footer-icons" icon={faFileLines} /> 
                </a>
            </p>
        </footer>
    );
}