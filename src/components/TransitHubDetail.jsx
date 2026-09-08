import React from "react";
import LowFidelityPrototype from "../assets/images/LowFidelityPrototype.jpg"
import LowFidelityPrototype2 from "../assets/images/LowFidelityPrototype2.jpg"
import HighFidelityPrototype from "../assets/images/HighFidelityPrototype.jpg"

const TransitHubDetail = () => {
    return (
        <div className="max-w-2xl mx-auto px-6 pt-8 pb-16">
            <h2 className="text-xl font-bold text-black mb-1">TransitHub</h2>
            <p className="text-sm text-gray-800 mb-8">
                During my Human-Computer Interactions course, I worked in a team to
                develop a city transit ticketing system using a task-centered design
                process. At the time, Calgary's ticketing app was relatively new so
                    riders still primarily relied on paper tickets bought in stores or kiosks. 
                    Our goal was to design a user-centered mobile app that would let riders
                    purchase tickets directly from their phones.
            </p>

            {/* Swap in a real hero image once available
            <div className="w-full aspect-[3/2] bg-gray-200 mb-8" /> */}

            {/* <section className="mb-8">
                <h3 className="text-black text-base font-semibold mb-2">Background</h3>
                <p className="text-sm text-gray-800">
                    My team was tasked with designing a ticketing system for Calgary
                    Transit. At the time, Calgary's ticketing app was relatively new so
                    riders still primarily relied on paper tickets bought in stores or kiosks. 
                    Our goal was to design a user-centered mobile app that would let riders
                    purchase tickets directly from their phones.
                </p>
            </section> */}

            {/* <section className="mb-8">
                <h3 className="text-black text-base font-semibold mb-2">My Role</h3>
                <p className="text-sm text-gray-800">Designer, Developer</p>
            </section> */}

            <section className="mb-8">
                <h3 className="text-black text-base font-semibold mb-2">Users</h3>
                <p className="text-sm text-gray-800 mb-3">
                    We ran informal interviews with students, friends, and family, and
                    drew on our own experiences with the transit system to identify
                    potential users and their needs. Based on these interviews, we 
                    identified the following user groups:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                    <li>Frequent/experienced users</li>
                    <li>Casual users</li>
                    <li>Groups (multiple users)</li>
                </ul>
            </section>

            <section className="mb-8">
                <h3 className="text-black text-base font-semibold mb-2">Requirements</h3>
                <p className="text-sm text-gray-800 mb-3">
                    Based on our research, we identified the following requirements for the app:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 mb-4">
                    <li>A way to purchase a transit ticket or pass</li>
                    <li>Single-use tickets valid for 90 minutes</li>
                    <li>Displaying purchased tickets to the transit operator or system</li>
                    <li>Offline access to purchased tickets</li>
                    <li>Account creation</li>
                </ul>
            </section>

            <section className="mb-8">
                <h3 className="text-black text-base font-semibold mb-2">Low Fidelity Prototypes</h3>
                <p className="text-sm text-gray-800 mb-4">
                    We sketched out low-fidelity prototypes to explore initial design ideas and iterated on 
                    them based on feedback from our peers and instructor. We also ran a task-centered
                    walkthrough to find usability issues.
                </p>
                <div className="space-y-4">
                    <img src={LowFidelityPrototype} alt="Low fidelity wireframes: login, account creation, home, help, tickets and passes screens" className="w-full h-auto border border-gray-200" />
                    <img src={LowFidelityPrototype2} alt="Low fidelity wireframes: cart, checkout, payment, confirmation, and ticket activation screens" className="w-full h-auto border border-gray-200" />
                </div>
            </section>

            <section className="mb-8">
                <h3 className="text-black text-base font-semibold mb-2">High Fidelity Prototypes</h3>
                <p className="text-sm text-gray-800 mb-4">
                    Based on the feedback from the low-fidelity prototypes, we created high-fidelity prototypes 
                    through a .NET web app written in C#, using Razor Pages for the UI layer.
                </p>
                <img src={HighFidelityPrototype} alt="High fidelity prototype screens: login, account creation, tickets and passes, cart, ticket history, and ticket activation with QR code" className="w-full h-auto border border-gray-200" />
            </section>

            <section className="mb-8">
                <h3 className="text-black text-base font-semibold mb-2">Final Thoughts</h3>
                <p className="text-sm text-gray-800 mb-3">
                    Researching, prototyping, and iterating on this project resulted in
                    something I'm proud of, though there's still room to improve. Given more time,
                    I would have liked to further developed our designs as well as conduct more user 
                    testing to validate our findings and design decisions.
                </p>
            </section>

            {/* <section className="mb-8">
                <h3 className="text-black text-base font-semibold mb-2">Something I Want to Improve On</h3>
                <p className="text-sm text-gray-800">
                    I'd like to strengthen my research methods. Our interviews were
                    fairly informal and skewed toward people we already knew, which
                    limited how representative the sample was. The insights were still
                    useful, but a larger, more diverse pool of participants — plus time
                    for actual user testing on the prototype — would have made the
                    findings more reliable.
                </p>
            </section> */}

        </div>
    )
}

export default TransitHubDetail;