import React from "react";
import Me from "../assets/images/me.jpg"

const About = () => {
    return (
        <div className="flex flex-row gap-2 flex-wrap justify-between">
            <div className="flex flex-col w-[300px] md:w-[40%] mb-6">            
                <img src={Me} className="rounded"></img> 
            </div>
            <div className="flex flex-col w-[300px] md:w-[55%] mb-6">
                <p> Hello! <br></br> <br></br>
                    I'm a recent graduate from the University of Calgary studying computer science with a concentration in human-computer interactions. I love solving problems and 
                    learning new things<br></br> <br></br>
                    I like digital art, reading, playing video games and climbing in my free time.
                </p>
            </div>
        </div>
    )
}

export default About;