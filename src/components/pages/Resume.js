import React from 'react'
import '../styling/Resume.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Resume() {
    // const code = process.env.PUBLIC_URL + '/assets/images/code.JPG';
    const laptop = process.env.PUBLIC_URL + '/assets/images/laptop.jpg';
    const animation = process.env.PUBLIC_URL + '/assets/images/animation.png';
    const myResume = process.env.PUBLIC_URL + '/assets/Resume.pdf';

    return (
        <>
            <div className="col-12 my-5 ">
                <div
                    className="row my-5 py-5 skills-section justify-content-center">

                    <div className="col-4">
                        <img src={laptop} alt="code displaying on laptop" id="skills-img" />
                    </div>
                    {/* data-aos="fade-down-right" */}
                    <div className="col-4 skills">

                        <div className="row" >
                            <h3 className="text-center col-12 mb-0 p-2 pb-4 tech-skills">Technical Skills</h3>
                        {/* </div>

                        <div className="row"> */}

                            <div className="col-6 text-center all-skills">
                                <h5>Front End</h5>
                                <ul className="skills-list">
                                    <li>React</li>
                                    <li>Javascript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Handlebars</li>
                                    <li>Bootstrap</li>
                                    <li>jQuery</li>
                                    <li>Ajax/API's</li>
                                </ul>
                            </div>

                            <div className="col-6 text-center all-skills">
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

                        </div>

                    </div>



                </div>
            </div>


            <div className="row resume-section">
                <div className="col-5 resume-img mx-5">
                    <img
                        src={animation}
                        alt="animation"
                        id="animation"
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="2000"
                    />
                </div>
                {/* 
                <a
                    href={myResume}
                    rel="noreferrer"
                    target="_blank"
                    id="resume-link">
                    <h4 className="text-center"> - Download Resume -</h4>
                </a> */}

                <div className="col-5">
                    <embed
                        src={myResume}
                        width="550"
                        height="840">
                    </embed>
                </div>
            </div>

        </>
    )
}