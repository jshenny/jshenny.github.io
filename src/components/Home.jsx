import React from "react";
import StreamDesk from "../assets/images/StreamDesk.jpg"
import DeskBuddy from "../assets/images/DeskBuddy.jpg"
import ProfilePic from "../assets/images/ProfilePic.png"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="max-w-2xl mx-auto px-6 pt-12">
            <div className="body">
                <img className="w-[200px] md:w-[200px] my-4" src={ProfilePic} alt="Profile Pic"/>
                {/* <h1 className="text-3xl">hi, i'm jane!</h1> */}
                <p className="py-4">Hello I’m Jane! I am an human-computer interaction researcher interested in creativity support tools and artist communities, particularly in visual arts. </p>
                    
                <p className="py-4"> I recently graduated from the University of Calgary with a Master's in Computer Science, advised by Dr. Lora Oehlberg, where I also completed my undergraduate degree.
                    During my studies, I served as a Teaching Assistant for Human-Computer Interaction, interned as a UX/UI Designer at Mastercard, and interned as a Software Developer at Morgan Stanley.
                </p>
                    
                <p className="py-4"> Beyond research, I enjoy reading, playing games, and making art. Recently, I've gotten into plein air painting — getting outside and capturing scenes in the outdoors. </p>

                <p>You can reach me at jshen019@gmail.com.</p>
            </div>
            {/* ... featured works section unchanged ... */}
        </div>
    )
}

export default Home;