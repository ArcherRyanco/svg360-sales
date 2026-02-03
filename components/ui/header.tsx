"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/svg-logo-full.png" 
                alt="SVG Digital" 
                width={120} 
                height={75}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-[#bd1e2d] transition-colors">How It Works</a>
            <a href="#features" className="text-sm text-gray-400 hover:text-[#bd1e2d] transition-colors">Features</a>
            <a href="#results" className="text-sm text-gray-400 hover:text-[#bd1e2d] transition-colors">Results</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* CTA */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <a
              href="#contact"
              className="btn-sm bg-linear-to-t from-[#7b141d] to-[#bd1e2d] bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.16)] hover:bg-[length:100%_150%]"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-gray-900/90 px-4 py-4 backdrop-blur-xs">
            <nav className="flex flex-col gap-4">
              <a 
                href="#how-it-works" 
                className="text-sm text-gray-400 hover:text-[#bd1e2d] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#features" 
                className="text-sm text-gray-400 hover:text-[#bd1e2d] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#results" 
                className="text-sm text-gray-400 hover:text-[#bd1e2d] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Results
              </a>
              <a
                href="#contact"
                className="btn-sm bg-linear-to-t from-[#7b141d] to-[#bd1e2d] bg-[length:100%_100%] bg-[bottom] py-3 text-center text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.16)] mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
