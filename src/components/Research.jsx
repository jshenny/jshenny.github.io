import React from "react";
import PublicationCard from "./PublicationCard.jsx"
import SustainingCreativityImg from "../assets/images/SustainingCreativity.png"
import BuildingOutDesignFictionImg from "../assets/images/BuildingOutDesignFiction.png"

const publications = [
    {
        title: "Sustaining Creativity: Insights from Online Art Challenges",
        authors: "Jane Shen, Lora Oehlberg",
        description: "Exploring how online art challenges shape participation in online creative communities.",
        image: SustainingCreativityImg, 
        formatLabel: "Paper (PDF)",
        formatLink: "https://dl.acm.org/doi/epdf/10.1145/3803784.3807526",
        venue: "C&C 2026",
    },
    {
        title: "Building Out Design Fiction: Designing Future Social Media Interactions for Amateur Artists",
        authors: "Jane Shen, Lora Oehlberg",
        description: "Using design fiction to design future social media interactions for amateur artists",
        image: BuildingOutDesignFictionImg,
        formatLabel: "Poster (PDF)",
        formatLink: "https://drive.google.com/file/d/130NmldLtab8w8qlHzcMPkvpMs8NG8QAI/view?usp=sharing",
        venue: "GI 2025",
    },
];

const Research = () => {
    return (
        <div className="max-w-2xl mx-auto px-6 pt-8">
            <h2 className="text-xl font-bold text-black mb-4">Publications</h2>
            <p className="text-sm text-gray-800 mb-6">
                See my <a target="_blank" href="https://drive.google.com/file/d/1EmvgDyEDtfcWTmYapvakr9mGL4m5yAKV/view?usp=sharing" className="underline">here!</a>
            </p>

            <div className="space-y-10">
                {publications.map((pub, i) => (
                    <PublicationCard key={i} {...pub} />
                ))}
            </div>
        </div>
    )
}

export default Research;