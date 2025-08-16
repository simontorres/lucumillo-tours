import Image from 'next/image';
import React from 'react';

interface Partner {
    name: string;
    logo: string;
    website: string;
}

const partners: Partner[] = [
    { name: "Hostal Luna del Mar", logo: "/images/friends/luna-del-mar.webp", website: "https://www.instagram.com/hostallunadelmar" },
    { name: "Arena Cafe", logo: "/images/friends/arena-cafe.webp", website: "https://www.instagram.com/arenacafelaserena" },
    // { name: "Partner Three", logo: "https://placehold.co/300", website: "https://partner3.com" },
];

export const OurPartnersAndFriends = () => {
    return (
        <div className="flex-1 p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Nuestros Socios y Amigos</h2>
            <div className="flex justify-evenly items-start gap-6 pt-6">
                {partners.map((partner) => (
                    <a
                        key={partner.name}
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 hover:opacity-80"
                    >
                        <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={130}
                            height={130}
                            className="h-32 object-contain rounded-lg"
                        />
                        <span className="text-sm text-center">{partner.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};
