import React from 'react'
import '../styling/Portfolio.css'
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Portfolio() {

    const organizarr = process.env.PUBLIC_URL + '/assets/images/organizarr-site.png';
    const covid = process.env.PUBLIC_URL + '/assets/images/covid-site.png';
    const ignite = process.env.PUBLIC_URL + '/assets/images/ignite.png';
    const dream = process.env.PUBLIC_URL + '/assets/images/dream-team.png';
    const pwdGenerator = process.env.PUBLIC_URL + '/assets/images/pwdgen-site.png';
    const adviceBot = process.env.PUBLIC_URL + '/assets/images/advicebot.png';

    return (
        <>
            <div className='portfolio-div'>
                <br />
                <br />
                <br />
                <br />

                <div className="col-7 mt-5 portfolio-intro">
                    <h1>Welcome to my portfolio!</h1>
                    <p>
                        The projects below were built using the MERN Stack. Each project includes a description, my role & responsibilities if it wasn't a solo effort, and the technology stack used. Additionally, the github repo is linked for each project and the deployed site can be accessed (when applicable) by clicking on the project title.
                    </p>
                </div>

                <div className="col-12 my-5 projects justify-content-center">
                    {/* Card 1 */}
                    <div className="card col-lg-3 col-md-5 col-sm-5 mx-4 my-5 p-0" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                        <a
                            href="https://dry-badlands-77030.herokuapp.com/"
                            rel="noreferrer"
                            target="_blank"
                            className="text-center project-title text-white p-2">
                            Organizarr
                        </a>

                        <img className="project-images" src={organizarr} alt="org site" />

                        <ul className="project-desc p-3">
                            <li className="bg-white">
                                This full stack application was created with the busy student in mind. Users access a personal dashboard where they can save notes, to-do lists and create/attend study groups.
                            </li>
                            <hr />
                            <li className="bg-white">
                                <strong className="bg-white role">Role: </strong>
                                Project management, UI, model creation, Javascript, Handlebars, debugging
                            </li>
                            <li className="bg-white mt-3"> <strong className="bg-white">Tech Stack: </strong>
                                Handlebars, Bootstrap, Javascript, Express, Node, Sequelize
                            </li>
                            <li className="bg-white text-center mt-3">
                                <a
                                    href="https://github.com/lesliejpatino/Organizarr"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="github-repo bg-white">
                                    <FontAwesomeIcon className="fa-xl bg-white" icon={faGithub} />
                                    <br />
                                    View GitHub Repo
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Card 2 */}
                    <div className="card col-lg-3 col-md-5 col-sm-5 mx-4 my-5 p-0" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                        <a
                            href="https://lesliejpatino.github.io/Find-Covid-Testing/"
                            rel="noreferrer"
                            target="_blank"
                            className="text-center project-title text-white p-2">
                            Map-A-Covid-Test
                        </a>
                        <img className="project-images" src={covid} alt="covid site" />

                        <ul className="project-desc p-3">
                            <li className="bg-white">
                                Through a simple and straightforward UI, this application helps users find Covid testing sites based on their exact location.
                            </li>
                            <hr />
                            <li className="bg-white"> <strong className="bg-white">Role: </strong>
                                Third party API’s, form validation, UI, Javascript
                            </li>
                            <li className="bg-white mt-3"> <strong className="bg-white">Tech Stack: </strong>
                                HTML, Javascript, jQuery, Foundation/CSS, Parsley, Google & Covid API’s
                            </li>

                            <li className="bg-white text-center mt-3">
                                <a
                                    href="https://github.com/lesliejpatino/Find-Covid-Testing"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="github-repo bg-white">
                                    <FontAwesomeIcon className="fa-xl bg-white" icon={faGithub} />
                                    <br />
                                    View GitHub Repo
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="card col-lg-3 col-md-5 col-sm-5 mx-4 my-5 p-0" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                        <a
                            href="https://fierce-sands-31159.herokuapp.com/"
                            rel="noreferrer"
                            target="_blank"
                            className="text-center project-title text-white p-2">
                            Ignite
                        </a>

                        <img className="project-images" src={ignite} alt="blog site" />

                        <ul className="project-desc p-3">
                            <li className="bg-white">
                                This full stack application helps couples stay connected by igniting meaningful conversation and providing each partner with personalized ideas to make the other feel loved.
                            </li>
                            <hr />
                            <li className="bg-white"> <strong className="bg-white">Role: </strong>
                                Concept Development, Questionnaire logic via React and Javascript
                            </li>
                            <li className="bg-white mt-3"> <strong className="bg-white">Tech Stack: </strong>
                                MongoDB, Express, React, Node, Bootstrap </li>
                            <li className="bg-white text-center mt-3">
                                <a href="https://github.com/lesliejpatino/Ignite"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="github-repo bg-white">
                                    <FontAwesomeIcon className="fa-xl bg-white" icon={faGithub} />
                                    <br />
                                    View GitHub Repo
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Card 4 */}
                    <div className="card col-lg-3 col-md-5 col-sm-5 mx-4 my-5 p-0" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                        <a
                            href="https://lesliejpatino.github.io/advice-bot/"
                            rel="noreferrer"
                            target="_blank"
                            className="text-center project-title text-white p-2">
                            Advice-Bot
                        </a>

                        <img className="project-images" src={adviceBot} alt="notes site" />

                        <ul className="project-desc p-3">
                            <li className="bg-white">
                                This single page application uses the Advice Slip API to fetch random pieces of advice and display them to the user. The user will find that at times Advice-Bot may offer a few words of wisdom, and other times it will simply provide a quick laugh.
                            </li>
                            <hr />
                            <li className="bg-white mt-3"> <strong className="bg-white">Tech Stack: </strong>
                                Advice Slip API, Javascript, Bootstrap, CSS, HTML
                            </li>
                            <li className="bg-white text-center mt-3">
                                <a
                                    href="https://github.com/lesliejpatino/advice-bot"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="github-repo bg-white">
                                    <FontAwesomeIcon className="fa-xl bg-white" icon={faGithub} />
                                    <br />
                                    View GitHub Repo
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Card 5 */}
                    <div className="card col-lg-3 col-md-5 col-sm-5 mx-4 my-5 p-0" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                        <a
                            href="https://obscure-waters-08324.herokuapp.com/"
                            rel="noreferrer"
                            target="_blank"
                            className="text-center project-title text-white p-2">
                            Dream Team Generator
                        </a>

                        <img className="project-images" src={dream} alt="notes site" />

                        <ul className="project-desc p-3">
                            <li className="bg-white">
                                This command line application allows the user to add employee information directly through the command line. Questions differ depending on the type of employee and once complete, an HTML file is generated to display each team members information on cards.
                            </li>
                            <hr />
                            <li className="bg-white mt-3"> <strong className="bg-white">Tech Stack: </strong>
                                Node.js, Inquirer & File System (NPM packages), Jest
                            </li>
                            <li className="bg-white text-center mt-3">
                                <a
                                    href="https://github.com/lesliejpatino/Dream-Team-Generator"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="github-repo bg-white">
                                    <FontAwesomeIcon className="fa-xl bg-white" icon={faGithub} />
                                    <br />
                                    View GitHub Repo
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Card 6 */}
                    <div className="card col-lg-3 col-md-5 col-sm-5 mx-4 my-5 p-0" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">                    <a
                        href="https://lesliejpatino.github.io/Password-Generator/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-center project-title text-white p-2">
                        Password Generator
                    </a>
                        <img className="project-images" src={pwdGenerator} alt="pwd site" />

                        <ul className="project-desc p-3">
                            <li className="bg-white"> This application generates a custom password for the user dependent on their preferences. If the user fails to specificy any criteria for their password, they will receive an error message.
                            </li>
                            <hr />
                            <li className="bg-white mt-3"> <strong className="bg-white">Tech Stack: </strong>
                                HTML, CSS, Javascript </li>
                            <li className="bg-white text-center mt-3">
                                <a
                                    href="https://github.com/lesliejpatino/Password-Generator"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="github-repo bg-white">
                                    <FontAwesomeIcon className="fa-xl bg-white" icon={faGithub} />
                                    <br />
                                    View GitHub Repo
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};