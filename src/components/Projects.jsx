import React from "react";
import ProjectCard from "./ProjectCard.jsx"
import StreamDesk from "../assets/images/StreamDesk.jpg"
import DeskBuddy from "../assets/images/DeskBuddy.jpg"
import StreamProjections from "../assets/images/StreamProjections.png"
import SupportingMentalHealth from "../assets/images/SupportingMentalHealth.png"
import TransitHub from "../assets/images/TransitHub.jpg"

const projects = [
    {
        title: "StreamProjections",
        date: "apr 2024",
        description: "Examining online coworking livestreams as virtual alternatives to shared study spaces",
        image: StreamProjections,
        detailsLink: "https://drive.google.com/file/d/1vMpdiNoccNzKL-ALW238poJsmOPIFIOF/view?usp=sharing",
    },
    {
        title: "StreamDesk",
        date: "aug 2023",
        description: "Exploring situated information in livestreams of physical activities",
        image: StreamDesk,
        detailsLink: "https://drive.google.com/file/d/1815vhHLaX0WXGXFSFcAqq95KKtZl1_8M/view?usp=sharing",
    },
    {
        title: "Desk Buddy",
        date: "april 2023",
        description: "A friendly buddy that reminds you to stay active when you're sitting at your desk",
        image: DeskBuddy,
        detailsLink: "/projects/desk-buddy",
    },
    {
        title: "Supporting Mental Health with Social Robots via Conversation",
        date: "april 2023",
        description: "Design of Wallie, a social robot that provides emotional support through conversation and interactions",
        image: SupportingMentalHealth,
        detailsLink: "https://drive.google.com/file/d/1WQyUWqjA5B7Hixw7mZRUIPiGedlQVcO6/view?usp=sharing",
    },
    {
        title: "Transit Hub",
        date: "september 2022",
        description: "A prototype for a Calgary Ticketing App",
        image: TransitHub,
        detailsLink: "/projects/transit-hub",
    },
];

const Projects = () => {
    return (
        <div className="max-w-2xl mx-auto px-6 pt-8">
            <h2 className="text-xl font-bold text-black mb-6">Projects</h2>

            <div className="space-y-10">
                {projects.map((proj, i) => (
                    <ProjectCard key={i} {...proj} />
                ))}
            </div>
        </div>
    )
}

export default Projects;