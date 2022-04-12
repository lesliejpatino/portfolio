import React, { useEffect } from 'react'
import Emoji from 'a11y-react-emoji';
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
        <div className="col-12 my-5 border" id="home-div">
            <div className="col-lg-7 col-md-9 col-sm-10 border my-5 py-5 text-center" id="hello">
                <h1> Welcome! </h1>
                <img 
                    src={helloBitmoji} 
                    alt="my-bitmoji" 
                    id="my-bitmoji"
                    className="my-4"
                    height="200px"
                    width="200px" 
                    />

                    <h2>Website In Progress...</h2>
                    <h3>04.12.22</h3>

                    <br />
        </div>
        </div>

    )
};

