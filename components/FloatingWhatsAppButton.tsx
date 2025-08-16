"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  return (
    <div className="fixed z-50 bottom-1/4 right-4 md:right-12">
      <a
        href="https://wa.me/+56974062175"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
