import React from 'react'
import '../styling/Portfolio.css'

export default function Portfolio() {

    const organizarr = process.env.PUBLIC_URL + '/assets/images/organizarr-site.png';
    const covid = process.env.PUBLIC_URL + '/assets/images/covid-site.png';
    const ignite = process.env.PUBLIC_URL + '/assets/images/ignite.png';
    const dream = process.env.PUBLIC_URL + '/assets/images/dream-team.png';
    const pwdGenerator = process.env.PUBLIC_URL + '/assets/images/pwdgen-site.png';
    const scheduler = process.env.PUBLIC_URL + '/assets/images/sched-site.png';
    const gitHubLogo = process.env.PUBLIC_URL + '/assets/images/gh.png';


    return (
        <>
            <br />
            <br />
            <div className="col-12 my-5 projects">
                <div className="row mb-5 justify-content-center">

                    {/* Card 1 */}
                    <div className="card col-lg-3 col-md-5 col-sm-8 mx-4 mb-5 p-0">
                        <a href="https://dry-badlands-77030.herokuapp.com/" rel="noreferrer" target="_blank" className="text-center project-title text-white p-2">
                            Organizarr
                        </a>
                        <img className="project-images" src={organizarr} alt="org site" /> 

                        <ul className="project-desc bg-white p-3">
                            <li> This application was created with the busy student in mind. Users access a personal dashboard where they can save notes, to-do lists and create/attend study groups. </li>
                            <hr />
                            <li> <strong className="bg-white">Role:</strong> Project management, design, UI, model creation, client-side Javascript, Handlebars, debugging </li>
                            <li> <strong className="bg-white">Tech Stack:</strong> Handlebars, Bootstrap, Javascript, Express, Node, Sequelize </li>
                        </ul>

                        {/* <a href="https://github.com/lesliejpatino/Organizarr" rel="noreferrer" target="_blank">
                            <img src={gitHubLogo} alt="github-logo" className="m-2" id="repo-link" />
                        </a> */}
                    </div>

                    {/* Card 2 */}
                    <div className="card col-lg-3 col-md-5 col-sm-8 mx-4 mb-5 p-0">

                        <a href="https://lesliejpatino.github.io/Find-Covid-Testing/" rel="noreferrer" target="_blank" className="text-center project-title text-white p-2">
                            Map-A-Covid-Test
                        </a>
                        <img className="project-images" src={covid} alt="covid site" /> 

                        <ul className="project-desc bg-white p-3">
                            <li> Through a simple and straightforward UI, this application helps users find Covid testing sites in their area based on their exact location. </li>
                            <hr />
                            <li> <strong className="bg-white">Role:</strong> Third party API’s, form validation, UI, Javascript </li>
                            <li> <strong className="bg-white">Tech Stack:</strong> HTML, Javascript, jQuery, Foundation/CSS, Parsley, Google & Covid API’s </li>
                        </ul>

                        {/* <a href="https://github.com/lesliejpatino/Find-Covid-Testing" rel="noreferrer" target="_blank">
                            <img src={gitHubLogo} alt="github-logo" className="m-2" id="repo-link" />
                        </a> */}
                    </div>

                    {/* Card 3 */}
                    <div className="card col-lg-3 col-md-5 col-sm-8 mx-4 mb-5 p-0">

                        <a href="https://fierce-sands-31159.herokuapp.com/" rel="noreferrer" target="_blank" className="text-center project-title text-white p-2">
                            Ignite
                        </a>

                        <img className="project-images" src={ignite} alt="blog site" /> 
                        <ul className="project-desc bg-white p-3">
                            <li> This application helps couples stay connected by igniting meaningful conversation and
                                providing each partner personalized ideas to make the other feel loved. </li>
                            <hr />
                            <li> <strong className="bg-white">Role:</strong> Concept Development, Questionnaire logic via React and Javascript </li>
                            <li> <strong className="bg-white">Tech Stack:</strong> MongoDB, Express, React, Node, Bootstrap </li>
                        </ul>
                        {/* <a href="https://github.com/lesliejpatino/Ignite" rel="noreferrer" target="_blank">
                            <img src={gitHubLogo} alt="github-logo" className="m-2" id="repo-link" />
                        </a> */}

                    </div>
                </div>


                <div className="row mb-5 justify-content-center">
                    {/* Card 4 */}
                    <div className="card col-lg-3 col-md-5 col-sm-8 mx-4 mb-5 p-0">

                        <a href="https://obscure-waters-08324.herokuapp.com/" rel="noreferrer" target="_blank" className="text-center project-title text-white p-2">
                            Dream Team Generator
                        </a>

                        <img className="project-images" src={dream} alt="notes site" />

                        <ul className="project-desc bg-white p-3">
                            <li> This command line application allows the user to add employee information directly through the command line. Questions differ depending on the type of employee and once complete, an HTML file is generated to display each team members information on cards.
                            </li>
                            <hr />
                            <li> <strong className="bg-white">Tech Stack:</strong> Node.js, Inquirer & File System (NPM packages), Jest </li>
                        </ul>

                        {/* <a href="https://github.com/lesliejpatino/Dream-Team-Generator" rel="noreferrer" target="_blank">
                            <img src={gitHubLogo} alt="github-logo" className="m-2" id="repo-link" />
                        </a> */}
                    </div>

                    {/* Card 5 */}
                    <div className="card col-lg-3 col-md-5 col-sm-8 mx-4 mb-5 p-0">
                        <a href="https://lesliejpatino.github.io/Password-Generator/" rel="noreferrer" target="_blank" className="text-center project-title text-white p-2">
                            Password Generator
                        </a>
                        <img className="project-images" src={pwdGenerator} alt="pwd site" />



                        <ul className="project-desc bg-white p-3">
                            <li> This application generates a custom password for the user dependent on their preferences. If the user fails to specificy any criteria for their password, they will receive an error message. </li>
                            <hr />
                            <li> <strong className="bg-white">Tech Stack:</strong> HTML, CSS, Javascript </li>
                        </ul>

                        {/* <a href="https://github.com/lesliejpatino/Password-Generator" rel="noreferrer" target="_blank">
                            <img src={gitHubLogo} alt="github-logo" className="m-2" id="repo-link" />
                        </a> */}
                    </div>

                    {/* Card 6 */}
                    <div className="card col-lg-3 col-md-5 col-sm-8 mx-4 mb-5 p-0">
                        <a href="https://lesliejpatino.github.io/Schedule-Your-Workday/" rel="noreferrer" target="_blank" className="text-center project-title text-white p-2">
                            Work Day Scheduler
                        </a>

                        <img className="project-images" src={scheduler} alt="scheduler site" /> <br />

                        <ul className="project-desc bg-white p-3">
                            <li> This is a daily schedule application that allows the user to save events for each hour of the work day. </li>
                            <hr />
                            <li> <strong className="bg-white">Tech Stack:</strong> HTML, CSS, Javascript, jQuery, Moment.js </li>
                        </ul>

                        {/* <a href="https://github.com/lesliejpatino/Schedule-Your-Workday" rel="noreferrer" target="_blank">
                            <img src={gitHubLogo} alt="github-logo" className="m-2" id="repo-link" />
                        </a> */}
                    </div>
                </div>

            </div>
        </>
    );
};