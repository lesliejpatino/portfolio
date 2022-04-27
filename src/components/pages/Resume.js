import React from 'react'
import '../styling/Resume.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Resume() {
    // const animation = process.env.PUBLIC_URL + '/assets/images/animation.png';
    // const myResume = process.env.PUBLIC_URL + '/assets/Resume.pdf';
    const headshot = process.env.PUBLIC_URL + '/assets/images/headshot.png';

    return (
        <>
            <div className="resume-body my-5 py-5">

                <div className="col-8 resume-intro text-center">
                        <h3 className="mt-4">Full stack developer, leader, and events director based in Las Vegas, NV.</h3>
                        <img
                        src={headshot}
                        alt="my headshot"
                        id="headshot"
                        height="200px"
                        width="200px"
                    />
                    </div>

                <div className="col-7 my-5 experience">
                    <div className="row">
                        <h3 className="mt-4">Education</h3>
                        <p>University of California Berkeley Extension - Full Stack Web Development Bootcamp</p>
                    </div>
                    <hr />

                    <div className="row">
                        <h3 className="mt-4">Technical Skills</h3>

                        <div className="col-4">
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

                        <div className="col-4">
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

                        <div className="col-4">
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

                    <div className="row">
                        <h3 className="mt-4">Other Skills</h3>
                        <div className="col-4">
                            <ul className="skills-list">
                                <li>Fluent in English/Spanish</li>
                                <li>Planning & Logistics</li>
                                <li>Budgeting</li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul className="skills-list">
                                <li>Leadership</li>
                                <li>Time Management</li>
                                <li>Working in Teams</li>

                            </ul>
                        </div>

                        <div className="col-4">
                            <ul className="skills-list">
                                <li>Public Speaking</li>
                                <li>Adaptability</li>
                                <li>Clear Communication</li>
                            </ul>
                        </div>
                    </div>
                    <hr />

                    {/* EXPERIENCE */}
                    <div className="row">
                        <h3 className="mt-4">Experience</h3>
                        <div className="col-4">
                            <ul className="jobs">
                                <li className="job-title">Digital Content Specialist</li>
                                <li>@ Freelance</li>
                                <li>2021-current</li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul className="jobs">
                                <li className="job-title">Lifestyle Director</li>
                                <li>@ FirstService Residential</li>
                                <li>2020-2021</li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul className="jobs">
                                <li className="job-title">Asst Community Manager</li>
                                <li>@ FirstService Residential</li>
                                <li>2020-2021</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <ul className="jobs">
                                <li className="job-title">Promotional Specialist</li>
                                <li>@ Freelance</li>
                                <li>2013-2020</li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul className="jobs">
                                <li className="job-title">Asst Spa Director</li>
                                <li>@ LifeTime Fitness</li>
                                <li>2018-2019</li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul className="jobs">
                                <li className="job-title">Business Operations</li>
                                <li>@ Silvas Speaks</li>
                                <li>2018</li>
                            </ul>
                        </div>
                    </div>
                    <hr />


                    <div className="row">
                        <h3 className="mt-4">Also Busy With</h3>
                        <div className="col-4">
                            <ul className="jobs">
                                <li className="job-title">Beach Volleyball</li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul className="jobs">
                                <li className="job-title">Writing</li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul className="jobs">
                                <li className="job-title">Weightlifting</li>
                            </ul>
                        </div>
                        {/* <p className="text-center">download my resume</p> */}

                    </div>
                </div>
                </div>

            </>
            )
}


            // <div className="row resume-section">
            //     <div className="col-5 resume-img mx-5">
            //         <img
            //             src={animation}
            //             alt="animation"
            //             id="animation"
            //             data-aos="fade-right"
            //             data-aos-easing="linear"
            //             data-aos-duration="2000"
            //         />
            //     </div> 

             
            //     <a
            //         href={myResume}
            //         rel="noreferrer"
            //         target="_blank"
            //         id="resume-link">
            //         <h4 className="text-center"> - Download Resume -</h4>
            //     </a> 

            // <div className="col-5">
            //         <embed
            //             src={myResume}
            //             width="550"
            //             height="840">
            //         </embed>
            //     </div>

