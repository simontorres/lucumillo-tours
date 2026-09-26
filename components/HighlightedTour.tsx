// src/components/HighlightedTour.tsx
"use client";

import React from "react";
import Link from "next/link";
import { tours } from "@/data/tours";

interface HighlightedTourProps {
  tourId: string;
}

const HighlightedTour = ({ tourId }: HighlightedTourProps) => {
  const tour = tours.find((t) => t.id === tourId);

  if (!tour) return null;

  return (
    <div
      className="relative w-full h-[400px] md:h-[480px] rounded-lg overflow-hidden mb-8 flex items-center justify-center"
      style={{
        backgroundImage: `url(/images/tours/xs/${tour.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <span className="inline-block bg-green-500 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
          Featured Tour
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {tour.title}
        </h2>
        <p className="text-gray-200 text-base md:text-lg mb-6">
          {tour.description}
        </p>
        <Link
          href={`/tours/${tour.id}`}
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          View Tour
        </Link>
      </div>
    </div>
  );
};

export default HighlightedTour;