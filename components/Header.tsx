"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <nav className="container-custom py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl md:text-3xl font-serif text-gray-900 hover:text-gray-600 transition-colors tracking-tight">
            Manzulli
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide">
            <li>
              <Link href="/" className="hover:text-gray-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/books" className="hover:text-gray-600 transition-colors">
                Books
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden font-sans text-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-6 space-y-4 font-sans text-sm">
            <li>
              <Link 
                href="/" 
                className="block hover:text-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/books" 
                className="block hover:text-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Books
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="block hover:text-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block hover:text-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
