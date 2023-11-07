import React from "react";
import StreamDesk from "../assets/images/StreamDesk.jpg"
import DeskBuddy from "../assets/images/DeskBuddy.jpg"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="">
            <div className="body py-28">
                <h1 className="text-5xl">hi, i'm jane!</h1>
                <p className="py-4">a developer, designer and artist </p>
            </div>
            <div className="py-24">
                <h1 className="text-2xl py-6">featured works</h1>
                <div className="flex flex-row gap-2 flex-wrap justify-between">
                    <div className="flex flex-col w-[300px] md:w-[44%] mb-6">
                        <a href=""></a>
                        <img className="w-full card mb-5" src={StreamDesk} alt="StreamDesk"/>
                        <a href="" target="_blank" class="font-extrabold text-lg">Stream Desk</a>
                        <p className="text-gray-600">aug 2023</p>
                        <p>exploring situated information in livestreams of physical activities</p>
                    </div>
                    <div className="flex flex-col w-[300px] md:w-[44%] mb-6">
                        <a href=""></a>
                        <img className="w-full card mb-5" src={DeskBuddy} alt="DeskBuddy"/>
                        <a href="" target="_blank" class="font-extrabold text-lg">Desk Buddy</a>
                        <p className="text-gray-600">april 2023</p>
                        <p>a buddy that reminds you to stay active when you're sitting at your desk</p>
                    </div>
                    <Link to="/projects"> see all projects → </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;