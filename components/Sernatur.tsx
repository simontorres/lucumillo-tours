import Image from 'next/image';
import React from 'react';

interface SernaturLogos {
    name: string;
    logo: string;
    website: string;
}

const logos: SernaturLogos[] = [
    { name: "", logo: "/images/sernatur/logo_r.png", website: "https://registro.sernatur.cl/registroempresarios/fichaservicio?sid=73418&sign=e67e4ee2784fecb296aa60fd67fb79d8" },
    { name: "", logo: "/images/sernatur/qr.png", website: "https://registro.sernatur.cl/registroempresarios/fichaservicio?sid=73418&sign=e67e4ee2784fecb296aa60fd67fb79d8" },
    // { name: "Partner Three", logo: "https://placehold.co/300", website: "https://partner3.com" },
];

export const Sernatur = () => {
    return (
        <div className="flex-1 p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">SERNATUR</h2>
            <div className="flex justify-evenly items-start gap-6 pt-6">
                {logos.map((logo) => (
                    <a
                        key={logo.name}
                        href={logo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 hover:opacity-80"
                    >
                        <Image
                            src={logo.logo}
                            alt={logo.name}
                            width={130}
                            height={130}
                            className="h-32 object-contain rounded-lg"
                        />
                        {logo.name ? <span className="text-sm text-center">{logo.name}</span> : <></>}

                    </a>
                ))}
            </div>
        </div>
    );
};
