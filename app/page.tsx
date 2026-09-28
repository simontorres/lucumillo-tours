"use client";
import React from "react";
import SocialLinks from "@/components/SocialLinks";
import { tours } from "@/data/tours";
import ToursGrid from "@/components/ToursGrid";
import HighlightedTour from "@/components/HighlightedTour";


const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">
          Welcome to Lucumillo Tours
        </h1>
        <p className="text-center dark:text-gray-300 mb-8">
          We offer personalized tours for whale watching and stargazing in northern Chile.
        </p>
        <HighlightedTour tourId="desert-blooming" />
        <SocialLinks />

        <ToursGrid tours={tours} />
        
      </main>
    </div>
  );
};

export default HomePage;
