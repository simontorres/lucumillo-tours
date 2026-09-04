"use client";
import React, { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-lime-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo & Desktop Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/">
            <p className="text-2xl font-bold cursor-pointer">Lucumillo Tours</p>
          </Link>

          {/* Nav Elements (Visible Only on Medium+ Screens) */}
          <div className="hidden md:flex gap-4">
            <Link href="/tours">
              <p className="hover:underline cursor-pointer">Tours</p>
            </Link>
            <Link href="/arriendo-de-bicicletas">
              <p className="hover:underline cursor-pointer">Arriendo de Bicicletas</p>
            </Link>
            <Link href="/nosotros">
              <p className="hover:underline cursor-pointer">Nosotros</p>
            </Link>
            <Link href="/contacto">
              <p className="hover:underline cursor-pointer">Contacto</p>
            </Link>
          </div>
        </div>

        {/* Right Section: Theme Toggle & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Always Visible */}
          <ThemeToggle />

          {/* Hamburger Button (Mobile Only) */}
          <button
            className="md:hidden flex items-center px-3 py-2 border border-white rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Hidden by Default) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 w-full bg-lime-600 shadow-lg`}
        >
          <Link href="/tours">
            <p className="px-4 py-2 hover:bg-lime-700">Tours</p>
          </Link>
          <Link href="/arriendo-de-bicicletas">
            <p className="px-4 py-2 hover:bg-lime-700">Arriendo de Bicicletas</p>
          </Link>
          <Link href="/nosotros">
            <p className="px-4 py-2 hover:bg-lime-700">Nosotros</p>
          </Link>
          <Link href="/contacto">
            <p className="px-4 py-2 hover:bg-lime-700">Contacto</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
