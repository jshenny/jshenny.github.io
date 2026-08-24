import React from "react";

const conceptSketches = [
    "https://static.wixstatic.com/media/1718e7_d0051cc4112d4d91ac106f552e6ef0a1~mv2.jpg",
    "https://static.wixstatic.com/media/1718e7_88cec641f64a4e1e90783f618f9d43e7~mv2.jpg",
    "https://static.wixstatic.com/media/1718e7_caa3c26636084337b52c72c30329a38d~mv2.jpg",
    "https://static.wixstatic.com/media/1718e7_a9aaf8db9f1a454585ff1b6d8589cf84~mv2.jpg",
    "https://static.wixstatic.com/media/1718e7_b1cd7a77de704fe09be45560b0d7aa38~mv2.jpg",
    "https://static.wixstatic.com/media/1718e7_7efa95bf31e6421ba357ae41cb060bd2~mv2.jpg",
    "https://static.wixstatic.com/media/1718e7_8cd03665ae114f4bb4fee2d840f6c3c9~mv2.jpg",
    "https://static.wixstatic.com/media/1718e7_df1a67c1cb634655a189eab9ac571833~mv2.jpg",
    "https://static.wixstatic.com/media/1718e7_650e9009d8344a78870e40e54f4a89aa~mv2.jpg",
];

const detailedSketches = [
    "https://static.wixstatic.com/media/1718e7_d1e4a9c9288a446590614d9cd3e8ecf7~mv2.jpg",
    "https://static.wixstatic.com/media/1718e7_4df538b5be8d43679f8770e516e67362~mv2.png",
    "https://static.wixstatic.com/media/1718e7_d9894603f79c4e96976143f7cada78c1~mv2.jpg",
];

const DeskBuddyDetail = () => {
    return (
        <div className="max-w-2xl mx-auto px-6 pt-8 pb-16">
            <h2 className="text-xl font-bold text-black mb-1">Desk Buddy</h2>
            <p className="italic text-sm text-gray-700 mb-6">
                Jane Shen, Mackenzie Dalton, Martha Ibarra, Seyeon Sim
            </p>

            <img
                src="https://static.wixstatic.com/media/1718e7_4cb333e6f8bf438bac6a7b77f06c5cbd~mv2.jpg"
                alt="Desk Buddy device"
                className="w-full max-w-xs mx-auto mb-8"
            />

            <section className="mb-8">
                <h3 className="text-black text-base font-semibold mb-2">Description</h3>
                <p className="text-sm text-gray-800 mb-3">
                    Sitting for long stretches takes a toll on both physical and mental
                    wellbeing. Desk Buddy is a small companion robot that sits on your
                    desk and nudges you to get up and move once you've been seated too
                    long — aimed at people who spend a lot of time at a desk, like
                    students, artists, and remote workers.
                </p>
                <p className="text-sm text-gray-800 mb-3">
                    After roughly an hour of sitting, the bot prompts you to stand and
                    do a short set of exercises. It doubles as a small hand weight, so
                    you can pick it up and use it during your break rather than just
                    dismissing a notification.
                </p>
                <p className="text-sm text-gray-800">
                    An onboard accelerometer detects real movement to confirm you're
                    actually up and active, and a digit display counts squats as you go
                    — once you've hit your set, it shows "done" and resets the hour-long
                    timer.
                </p>
            </section>

            <section className="mb-8">
                <h3 className="text-black text-base font-semibold mb-2">Concept Sketches</h3>
                <p className="text-sm text-gray-800 mb-4">
                    Since this was our first hardware design project, early ideation
                    explored a wide range of self-care concepts before narrowing in on
                    the stand-up reminder direction.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {conceptSketches.map((src, i) => (
                        <img key={i} src={src} alt={`Concept sketch ${i + 1}`} className="w-full h-auto" />
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h3 className="text-black text-base font-semibold mb-2">Detailed Sketches</h3>
                <p className="text-sm text-gray-800 mb-4">
                    From there, we focused in on a pick-up-able bot that tracks motion
                    during the break to make sure the user actually gets the benefit of
                    stepping away from their desk.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {detailedSketches.map((src, i) => (
                        <img key={i} src={src} alt={`Detailed sketch ${i + 1}`} className="w-full h-auto" />
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-black text-base font-semibold mb-2">Project Source Code</h3>
                <p className="text-sm text-gray-800 mb-3">
                    Built with an Arduino Uno, an ADXL345 accelerometer, a 4-digit
                    7-segment display, and a Sony Toio, housed in a cardboard enclosure
                    to keep the wiring hidden.
                </p>
                {/* <p className="text-sm text-gray-800">
                    <a href="https://create.arduino.cc/editor/sysim123/8bd99e83-c9d7-4401-a1d1-d673d0c96625/preview" className="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500" target="_blank" rel="noreferrer">
                        Arduino code
                    </a>
                    {" "}·{" "}
                    <a href="https://glitch.com/edit/#!/grandiose-evanescent-wolf" className="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500" target="_blank" rel="noreferrer">
                        Toio code
                    </a>
                </p> */}
            </section>
        </div>
    )
}

export default DeskBuddyDetail;