import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styling/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function About(handlePageChange) {
    const helloBitmoji = process.env.PUBLIC_URL + '/assets/images/bitmoji.png';

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <>
            <br />
            <br />
            <div className='whole-pg'>
                <div className='col-lg-10 col-md-11 mt-5 p-4 intro-div justify-content-between'>
                    <div className='col-lg-4 col-md-12 col-sm-9 mt-5 animation'>
                        <img
                            src={helloBitmoji}
                            alt="my-bitmoji"
                            id="my-bitmoji"
                        />
                    </div>

                    <div className='col-lg-8 col-md-12 col-sm-9 p-0 mb-5 intro'>
                        <h2 className='pt-4 hello'> Hi, I'm Leslie!</h2>
                        <h3 className='title'>
                            Front End Developer
                            <a href="https://www.linkedin.com/in/lesliejpatino/" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon className="px-2" icon={faLinkedin} />
                            </a>

                            <a href="mailto:lesliejpatino@gmail.com" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon className="px-1" icon={faAt} />
                            </a>
                        </h3>
                        <p className='pt-3'>
                        I’m a former events director who loves creating websites, leading teams, and solving problems.
                        <br />

                        I thrive in environments that require creativity, as well as logical and analytical thinking, which is what most attracted me to web development. I longed for a career that provided results that were slightly objective, without sacrificing my desire for creative expression.
                        <br />

                        In 2021, I became a full stack web developer through the University of California Berkeley Extension’s coding bootcamp.
                        Since then, I have acquired a plethora of technical skills and have also learned patience, adaptability, and the true meaning of a growth mindset.
                        <br />

                        Stick around, checkout my <a className="about-links" href="https://lesliejpatino.github.io/portfolio/#portfolio"> portfolio </a> & learn more about my <a className="about-links" href="https://lesliejpatino.github.io/portfolio/#resume"> skills and experience. </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

