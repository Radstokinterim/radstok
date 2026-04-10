"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Operations Scan", href: "#operations-scan" },
    { label: "Expertise", href: "#expertise" },
    { label: "Cases", href: "#cases" },
    { label: "Over mij", href: "#over-stefan" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#1e3a5f]">
              Radstok
            </span>
            <span className="text-sm text-[#5b9bd5] font-medium hidden sm:inline">
              Interim
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#1e3a5f] hover:text-[#5b9bd5] transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button
              className="bg-[#1e3a5f] hover:bg-[#2d5a87] text-white px-6"
              asChild
            >
              <a href="https://cal.com/operationsscan/30min" target="_blank" rel="noopener noreferrer">
                Gesprek plannen
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-[#1e3a5f]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#1e3a5f] hover:text-[#5b9bd5] transition-colors font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="bg-[#1e3a5f] hover:bg-[#2d5a87] text-white w-full mt-2"
                asChild
              >
                <a href="https://cal.com/operationsscan/30min" target="_blank" rel="noopener noreferrer">
                  Gesprek plannen
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
