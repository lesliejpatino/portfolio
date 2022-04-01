import React from 'react'

export default function Resume() {

    return (
        <>
            <div className="row text-center skills-section my-5 py-5">

                <div className="col-3 skills">

                    <div className="row">
                        <h3 className="text-center">Technical Skills</h3>
                    </div>

                    <div className="row my-2">

                        <div className="col-6 text-center">
                            <h4>Front End</h4>
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

                        <div className="col-6 text-center">
                            <h4>Back End</h4>
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

                <div className="col-7 this-img">
                    {/* <img src={headshot} alt="leslies headshot" id="skills-img" /> */}
                </div>
            </div>
        </>
    )
}