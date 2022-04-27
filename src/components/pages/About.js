import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styling/About.css'

export default function About() {
    const helloBitmoji = process.env.PUBLIC_URL + '/assets/images/bitmoji.png';

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <>
            <div className="col-12 my-5 py-3" id="home-div">
                <div className="col-lg-7 col-md-9 col-sm-10 my-5 py-5 text-center" id="hello">
                    <h1> Hi, I'm Leslie!</h1>
                    <h2> Full Stack Web Developer </h2>
                    <img
                        src={helloBitmoji}
                        alt="my-bitmoji"
                        id="my-bitmoji"
                        className="my-4"
                        height="200px"
                        width="200px"
                    />

                    <br />
                    I’m a former events director who loves creating websites, leading teams, and solving problems.
                    <br />

                    I thrive in environments that require creativity, as well as logical and analytical thinking and that is what most attracted me to web development. I longed for a career that provided results that were slightly objective, without sacrificing my desire for creative expression.
                    <br />

                    In 2021, I decided to become a full stack web developer and attended the University of California Berkeley Extension’s coding bootcamp.
                    Since then, I have acquired a plethora of technical skills and have also learned patience, adaptability, and the true meaning of a growth mindset.
                    <br />

                    Please stick around to view my portfolio and learn more about my current skill set and experience.
                </div>
            </div>

        </>


        // <div
        //     className="text-center quote mb-5 pb-5"
        //     id="hello"
        //     data-aos="zoom-in"
        //     data-aos-duration="1300">
        //     <h3> "The way we do one thing is the way we do everything." </h3>
        //     <h4 className="quote-by"> <em> - Iyanla Vanzant</em> </h4>
        // </div> 
    )
};

