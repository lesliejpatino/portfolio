import React from "react";
import "./styling/Footer.css";

export default function Footer() {

    const gitHubLogo = process.env.PUBLIC_URL + '/assets/images/gh.png';
    const linkedInLogo = process.env.PUBLIC_URL + '/assets/images/linkedin.png';
    const emailLogo = process.env.PUBLIC_URL + '/assets/images/email.png';
    const resumeLogo = process.env.PUBLIC_URL + '/assets/images/resume.png';
    const resumePdf = process.env.PUBLIC_URL + '/assets/Resume.pdf'

    return (
        <footer class="row text-center text-white p-2">
            <h4 className="mb-0 footer-text">
                Leslie Patino
            </h4>
            <p className="footer-text">
                Full Stack Web Developer
            </p>

            <p className="footer-text">
                <a href="https://github.com/lesliejpatino" rel="noreferrer" target="_blank" className="footer-text">
                    <img src={gitHubLogo} alt="github-logo" className="contact-logos" />
                </a>

                <a href="https://www.linkedin.com/in/lesliejpatino/" rel="noreferrer" target="_blank" className="footer-text">
                    <img src={linkedInLogo} alt="linkedin-logo" className="contact-logos" />
                </a>

                <a href="mailto:lesliejpatino@gmail.com" rel="noreferrer" target="_blank" className="footer-text">
                    <img src={emailLogo} alt="mail-logo" className="contact-logos" />
                </a>

                <a href={resumePdf} rel="noreferrer" target="_blank" className="footer-text">
                    <img src={resumeLogo} alt="mail-logo" className="contact-logos" />
                </a>

            </p>
        </footer>
    );
}