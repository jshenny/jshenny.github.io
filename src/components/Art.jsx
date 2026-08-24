import React, { useState } from "react";
import TunnelMountainPainting from "../assets/images/tunnelMountainPainting.jpg";
import PersimmonPainting from "../assets/images/persimmonPainting.jpg";
import ColinPainting from "../assets/images/colinPainting.jpg";

const artworks = [
    { src: TunnelMountainPainting, alt: "Gouache painting of view from Tunnel Mountain" },
    { src: PersimmonPainting, alt: "Gouache painting of a persimmon" },
    { src: ColinPainting, alt: "Digital illustration of a character in a green coat in the snow" },
    // Add more entries here as you create new pieces:
    // { src: NewPieceImg, alt: "Description of new piece" },
];

const Art = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="max-w-2xl mx-auto px-6 pt-8">
            <h2 className="text-xl font-bold text-black mb-4">Art</h2>
            <p className="text-sm text-gray-800 mb-6"> page is still a work-in-progress </p>

            <div className="columns-2 gap-4">
                {artworks.map((art, i) => (
                    <img
                        key={i}
                        src={art.src}
                        alt={art.alt}
                        onClick={() => setSelected(art)}
                        className="w-full mb-4 break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity"
                    />
                ))}
            </div>

            {selected && (
                <div
                    className="fixed inset-0 bg-black/40 flex items-center justify-center p-6 z-50"
                    onClick={() => setSelected(null)}
                >
                    <button
                        onClick={() => setSelected(null)}
                        aria-label="Close"
                        className="absolute top-6 right-6 text-white text-2xl leading-none w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                    >
                        ✕
                    </button>
                    <img
                        src={selected.src}
                        alt={selected.alt}
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-full max-h-full object-contain cursor-default"
                    />
                </div>
            )}
        </div>
    )
}

export default Art;