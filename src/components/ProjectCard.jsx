import React from "react";

const ProjectCard = ({ title, date, description, image, detailsLink }) => {
    return (
        <div className="grid grid-cols-5 gap-6">
            <div className="col-span-2">
                <div className="w-full aspect-[3/2] bg-gray-200">
                    {image && (
                        <img src={image} alt={`${title} image`} className="w-full h-full object-cover" />
                    )}
                </div>
            </div>
            <div className="col-span-3">
                <h3 className="text-black text-base font-semibold mb-1">
                    {title}
                </h3>
                <p className="italic text-sm text-gray-700 mb-2">
                    {date}
                </p>
                <p className="text-sm text-gray-800 mb-2">
                    {description}
                </p>
                 <p className="text-sm text-gray-800">
                    <a href={detailsLink} target="_blank" className="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500">
                        Details
                    </a>
                </p>
            </div>
        </div>
    )
}

export default ProjectCard;