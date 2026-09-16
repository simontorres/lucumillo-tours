"use client";
import React from "react";
import { ServiceCard } from "@/components/ServiceCard";

import { services } from "@/data/services";
import SocialLinks from "@/components/SocialLinks";


const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">
          Bienvenido a Lucumillo Tours
        </h1>
        <p className="text-center dark:text-gray-300 mb-8">
          Ofrecemos tours personalizados para la observación de ballenas y para
          disfrutar del cielo nocturno en el norte de Chile. Además, tenemos
          arriendo de bicicletas.
        </p>
        <SocialLinks />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {services
            .filter((service) => service.enabled)
            .map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
        </div>
        
      </main>
    </div>
  );
};

export default HomePage;
