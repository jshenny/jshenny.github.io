import React from "react";
import StreamDesk from "../assets/images/StreamDesk.jpg"

const Projects = () => {
    return (
        <div className="md:w-4/5 p-3 body">
            {/* <p>My little collection of projects!</p> */}
            <section className="py-8" id="StreamDesk">
                <div className="">
                    <h3 className="text-black text-xl font-semibold mb-1">
                        <span class="mr-1">StreamDesk</span>
                    </h3>
                    <small className="whitespace-nowrap text-neutral-500 text-base font-normal">
                        August 2023
                    </small>
                    <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
                            <div className="col-span-3 md:col-span-2">
                                exploring situated information in livestreams of physical activities
                            </div>
                            <div className="col-span-3 md:col-span-1">
                                <img src={StreamDesk} alt="StreamDesk image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;