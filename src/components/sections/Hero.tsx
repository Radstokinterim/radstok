"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center py-20 lg:py-0">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Linker kolom - Tekst */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#5b9bd5] font-medium text-lg">
                Interim Manager Operations | Specialist Operations Strategie
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1e3a5f] leading-tight">
                Van operationele chaos
                <span className="block">naar voorspelbare</span>
                <span className="block">groei</span>
              </h1>
            </div>

            <p className="text-lg lg:text-xl text-[#64748b] leading-relaxed max-w-xl">
              Ik help organisaties hun operations te structureren en te professionaliseren.
              Met oog voor resultaat én voor de mensen die het moeten waarmaken.{" "}
              <span className="font-medium text-[#1e3a5f]">Hard én Hart.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#1e3a5f] hover:bg-[#2d5a87] text-white px-8 py-6 text-lg rounded-lg"
                asChild
              >
                <a href="https://cal.com/operationsscan/30min" target="_blank" rel="noopener noreferrer">
                  Plan een kennismaking
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#e8f4fc] px-8 py-6 text-lg rounded-lg"
                asChild
              >
                <a href="#operations-scan">
                  Bekijk de Operations Scan
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 lg:gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#1e3a5f]">15+</p>
                <p className="text-sm text-[#64748b]">Jaar ervaring</p>
              </div>
              <div className="w-px h-12 bg-[#e2e8f0] hidden sm:block"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#1e3a5f]">100+</p>
                <p className="text-sm text-[#64748b]">FTE aangestuurd</p>
              </div>
              <div className="w-px h-12 bg-[#e2e8f0] hidden sm:block"></div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <svg className="w-5 h-5 text-[#1e3a5f]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                  </svg>
                </div>
                <p className="text-sm text-[#64748b]">Nyenrode alumnus</p>
              </div>
            </div>
          </div>

          {/* Rechter kolom - Foto */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#5b9bd5]/20 to-[#1e3a5f]/10 rounded-3xl transform rotate-3"></div>

              {/* Profile image */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#e8f4fc] to-[#a8d0f0] shadow-2xl">
                <Image
                  src="/1767343978852.jpeg"
                  alt="Stefan Radstok - Interim Manager Operations"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
                <p className="text-sm font-medium text-[#1e3a5f]">Hard én Hart</p>
                <p className="text-xs text-[#64748b]">Structuur meets menselijkheid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
