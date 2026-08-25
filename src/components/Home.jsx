import React from "react";
import StreamDesk from "../assets/images/StreamDesk.jpg"
import DeskBuddy from "../assets/images/DeskBuddy.jpg"
import ProfilePic from "../assets/images/ProfilePic.png"
import HomePicture from "../assets/images/HomePicture.jpg"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="max-w-2xl mx-auto px-6 pt-8">
            <div className="body">
                <img className="w-[200px] md:w-[830px] my-4" src={HomePicture} alt="Profile Pic"/>
                {/* <h1 className="text-3xl">hi, i'm jane!</h1> */}
                <p className="py-4">Hi, I’m Jane! I'm a human-computer interaction researcher interested in creativity support tools and artist communities, particularly in visual arts. </p>
                    
                <p className="py-4"> I recently graduated from the University of Calgary with a Master's in Computer Science, advised by Dr. Lora Oehlberg. Previously, 
                    I served as a Teaching Assistant for courses on Human-Computer Interaction, interned as a UX/UI Designer at Mastercard, and interned as a Software Developer at Morgan Stanley.
                </p>
                    
                <p className="py-4"> Beyond research, I enjoy reading, playing video games, and making art. Recently, I've gotten into plein air painting — it's super fun getting outside and capturing scenes outdoors. </p>

                <p>You can reach me at <b>jshen019[at]gmail[dot]com</b>.</p>
            </div>
            {/* ... featured works section unchanged ... */}
        </div>
    )
}

export default Home;