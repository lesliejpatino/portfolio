import React, { useEffect } from 'react'
import Emoji from 'a11y-react-emoji';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styling/About.css'

export default function About() {
    // const headshot = process.env.PUBLIC_URL + '/assets/images/IMG_E5901.JPG';
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className="col-12 my-5 border" id="home-div">
            <div className="col-lg-7 col-md-9 col-sm-10 border my-5 py-5 text-center" id="hello">
                <h1> Welcome! </h1>
                I know, I know ... another Web Developer portfolio. <Emoji symbol="🥱" label="yawning-face" />
                <br />
                You <em>might</em> be asking yourself: What sets this portfolio apart? Why take a chance on a junior web developer?
                <br />
                <br />
                The truth is, I have plenty of technical skills but they may not neccessarily "set me apart". What I bring to the table aside from that always expanding skillset is my mindset, determination and willingness to go the extra mile in everything I do. I'd love to share more about who I am as a person, and in turn as web developer.
                <br />
                ((You can skip this & go checkout my
                <a href="#portfolio"> portfolio </a> or <a href="#resume"> resume </a> ))
                <br />
                Else, <strong>scroll down</strong> to learn more.
                <br />
                <br />
                <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <br />
                <br />
            </div>

            <div 
                className="col-12 border my-5 py-5 text-center" 
                id="hello"
                data-aos="zoom-in"
                data-aos-duration="1300"
                >
                {/* May Insert IMG here */}
                <h3> "The way we do one thing is the way we do everything." </h3>
                <h4><em> - Iyanla Vanzant</em></h4>
            </div>

            <div
                className="col-lg-7 col-md-9 col-sm-10 border my-5 py-5 text-center"
                id="hello"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
            >
                <h5> Growth-Oriented. Considerate. Honest. Determined. </h5>
                <br />
                These 4 words shape how I operate daily, personally and professionally.
                <br />

                <strong><em>Growth: </em></strong>I am constantly seeking to improve, to learn and to be a better version of myself, no matter how minimally. I do this by reflecting on my behavior through journaling, meditating and conversation.
                <br />

                <strong><em>Considerate: </em></strong>I'm constantly reminding myself to be considerate of how my behaviors effect others. I aim to do this through the code that I write - making sure it's readable and constantly improving not only for myself, but for all who will come after me. I take care of myself so I can show up to work everyday and give my colleagues the best that I have to offer. & I do this in my personal life in small ways like letting people in front of me during rush hour, holding doors open for others, or picking up trash when I'm at the park.
                <br />

                <strong><em>Honest: </em></strong> Honesty helps me come to terms with my faults and value when others give me advice on ways I can improve. Honesty also allows me to build trust with others and allows me to create genuine relationships.
                <br />

                <strong><em>Determined: </em></strong> I thrive in challenges and when there are goals to accomplish. I am determined to be the best version of myself everyday and although I fail regularly, I am always pushing forward.
                <br />
                <br />
                If you've read this far, thank you!! I hope you stick around to explore my work or to connect with me!
                
                {/* Insert phone # & Email  */}
                <br />
                <a href="#portfolio"> My Portfolio </a> | <a href="#resume"> My Resume & Skills </a>
            </div>


            <br />
            <br />
        </div>

    )
};

