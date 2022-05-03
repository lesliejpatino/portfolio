import React from 'react'
import '../styling/Resume.css'
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyball, faFilePen, faDumbbell, faFileLines, faAt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Resume() {
    const headshot = process.env.PUBLIC_URL + '/assets/images/headshot.png';
    const resumePdf = process.env.PUBLIC_URL + '/assets/Resume.pdf'


    return (
        <>
            <br />
            <br />
            <div className="resume-body m-5 py-5">

                <div className="col-8 resume-intro text-center">
                        <h3 className="mt-4">Front end developer, leader, and events director <br /> based in Las Vegas, NV.</h3>
                        <img
                        src={headshot}
                        alt="my headshot"
                        id="headshot"
                        className="mt-2"
                        height="200px"
                        width="200px"
                    />
                    <br />
                    <div className="mt-2">

                    <a href="https://www.linkedin.com/in/lesliejpatino/" rel="noreferrer" target="_blank" >
                    <FontAwesomeIcon className="p-3 fa-lg" icon={faLinkedin} /> 
                    </a>

                    <a href="mailto:lesliejpatino@gmail.com" rel="noreferrer" target="_blank" >
                    <FontAwesomeIcon className="p-3 fa-lg" icon={faAt} /> 
                    </a>
                    
                    <a href={resumePdf} rel="noreferrer" target="_blank" >
                    <FontAwesomeIcon className="p-3 fa-lg" icon={faFileLines} /> 
                    </a>

                    </div>
                    </div>

                <div className="col-lg-7 col-md-10 col-sm-9 my-5 experience">
                    <div className="row" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                        <h3 className="mt-4">Education</h3>
                        <a href="https://www.parchment.com/u/award/43e60f093755f2032677e3c70afaf78f" rel="noreferrer" target="_blank">
                        <p>University of California Berkeley Extension - Full Stack Web Development Bootcamp</p>
                        </a>
                    </div>
                    <hr />

                    <div className="row" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500"> 
                        <h3 className="mt-4">Technical Skills</h3>

                        <div className="col-lg-4 col-md-4">
                            <h5>Front End</h5>
                            <ul className="skills-list">
                                <li>React</li>
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Handlebars</li>
                                <li>Bootstrap</li>
                                <li>jQuery</li>
                                <li>API's</li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <h5>Back End</h5>
                            <ul className="skills-list">
                                <li>Node</li>
                                <li>Express</li>
                                <li>mySql</li>
                                <li>Sequelize</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <h5>Other</h5>
                            <ul className="skills-list">
                                <li>Microsoft Office</li>
                                <li>Canva</li>
                                <li>Apple/iOS</li>
                                <li>Windows OS</li>
                                <li>Google Drive</li>
                            </ul>
                        </div>

                    </div>
                    <hr />

                    <div className="row" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                        <h3 className="mt-4">Other Skills</h3>
                        <div className="col-lg-4 col-md-4">
                            <ul className="skills-list">
                                <li>Fluent in English & Spanish</li>
                                <li>Planning & Logistics</li>
                                <li>Budgeting</li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <ul className="skills-list">
                                <li>Leadership</li>
                                <li>Time Management</li>
                                <li>Working in Teams</li>

                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <ul className="skills-list">
                                <li>Public Speaking</li>
                                <li>Adaptability</li>
                                <li>Clear Communication</li>
                            </ul>
                        </div>
                    </div>
                    <hr />

                    {/* EXPERIENCE */}
                    <div className="row" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                        <h3 className="mt-4">Experience</h3>
                        <div className="col-lg-4 col-md-4">
                            <ul className="jobs">
                                <li className="job-title">Digital Content Specialist</li>
                                <li>@ Freelance</li>
                                <li>2021-current</li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <ul className="jobs">
                                <li className="job-title">Lifestyle Director</li>
                                <li>@ FirstService Residential</li>
                                <li>2020-2021</li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <ul className="jobs">
                                <li className="job-title">Asst Community Manager</li>
                                <li>@ FirstService Residential</li>
                                <li>2020-2021</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                        <div className="col-lg-4 col-md-4">
                            <ul className="jobs">
                                <li className="job-title">Promotional Specialist</li>
                                <li>@ Freelance</li>
                                <li>2013-2020</li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <ul className="jobs">
                                <li className="job-title">Asst Spa Director</li>
                                <li>@ LifeTime Fitness</li>
                                <li>2018-2019</li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <ul className="jobs">
                                <li className="job-title">Business Operations</li>
                                <li>@ Silvas Speaks</li>
                                <li>2018</li>
                            </ul>
                        </div>
                    </div>
                    <hr />


                    <div className="row" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                    <h3 className="mt-4">Also Busy With</h3>
                        <div className="col-lg-4 col-md-4">
                            <ul className="jobs">
                                <li className="job-title">Beach Volleyball <FontAwesomeIcon icon={faVolleyball} /> </li>
                                

                                </ul>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <ul className="jobs">
                                <li className="job-title">Writing <FontAwesomeIcon icon={faFilePen} /> </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <ul className="jobs">
                                <li className="job-title">Weightlifting <FontAwesomeIcon icon={faDumbbell} /> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>

            </>
            )
}
