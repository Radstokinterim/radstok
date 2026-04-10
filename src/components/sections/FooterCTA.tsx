"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function FooterCTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Linker kolom - Foto */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#5b9bd5]/20 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#a8d0f0]/10 rounded-full"></div>

              {/* Profile image */}
              <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/1767343978852.jpeg"
                  alt="Stefan Radstok"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Rechter kolom - CTA content */}
          <div className="text-white order-1 lg:order-2">
            <p className="text-[#a8d0f0] font-medium mb-4">Klaar om te groeien?</p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              Laten we samen
              <span className="block">jouw operatie</span>
              <span className="block">naar een hoger</span>
              <span className="block">niveau tillen</span>
            </h2>

            <p className="text-white/80 text-lg mb-8 max-w-lg leading-relaxed">
              Plan een vrijblijvend kennismakingsgesprek. We bespreken jouw
              uitdagingen en verkennen of de Operations Scan of een interim
              opdracht past bij wat je nodig hebt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-white text-[#1e3a5f] hover:bg-[#e8f4fc] px-8 py-6 text-lg rounded-lg font-semibold"
                asChild
              >
                <a href="https://cal.com/operationsscan/30min" target="_blank" rel="noopener noreferrer">
                  Plan een gesprek
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#5b9bd5] text-[#5b9bd5] hover:bg-[#5b9bd5]/10 px-8 py-6 text-lg rounded-lg"
                asChild
              >
                <a
                  href="https://linkedin.com/in/stefanradstok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn profiel
                </a>
              </Button>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@radstok.nl" className="hover:text-white transition-colors">
                  info@radstok.nl
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Nederland</span>
              </div>
            </div>

            {/* Trust element */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm">
                Referenties beschikbaar op verzoek. Bekijk ook de aanbevelingen op mijn LinkedIn profiel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
