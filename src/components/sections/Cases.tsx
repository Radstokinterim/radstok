"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cases } from "@/data/cases";

export function Cases() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const activeCase = cases[activeIndex];

  return (
    <section id="cases" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#5b9bd5] font-medium mb-4">Bewezen resultaten</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6">
            Klantcases
          </h2>
          <p className="text-lg text-[#64748b]">
            Een selectie van opdrachten waar ik organisaties heb geholpen met
            operations, verandermanagement en teamontwikkeling.
          </p>
        </div>

        {/* Case carousel */}
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Linker kolom - Info */}
                <div className="p-8 lg:p-12 bg-[#1e3a5f] text-white">
                  <div className="flex items-center gap-4 mb-6">
                    {/* Company icon */}
                    <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{activeCase.company}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          {activeCase.sector}
                        </Badge>
                        <span className="text-white/60 text-sm">{activeCase.fte}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
                    <span>{activeCase.period}</span>
                    <span>•</span>
                    <span>{activeCase.role}</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[#a8d0f0] mb-2">De uitdaging</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {activeCase.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#a8d0f0] mb-2">Mijn aanpak</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {activeCase.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rechter kolom - Resultaten */}
                <div className="p-8 lg:p-12 bg-[#f8fafc]">
                  <h4 className="font-bold text-[#1e3a5f] text-lg mb-6">Behaalde resultaten</h4>

                  <div className="space-y-3 mb-8">
                    {activeCase.results.map((resultaat, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5b9bd5] flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-[#1e3a5f] text-sm">{resultaat}</p>
                      </div>
                    ))}
                  </div>

                  {/* Learning */}
                  <div className="bg-white rounded-xl p-4 border border-[#e2e8f0]">
                    <p className="text-xs font-medium text-[#5b9bd5] uppercase tracking-wide mb-2">
                      Wat ik hiervan leerde
                    </p>
                    <p className="text-[#64748b] text-sm italic leading-relaxed">
                      &ldquo;{activeCase.learning}&rdquo;
                    </p>
                  </div>

                  {/* Highlight quote if available */}
                  {activeCase.highlight && (
                    <div className="mt-4 p-4 bg-[#1e3a5f]/5 rounded-xl">
                      <p className="text-xs font-medium text-[#1e3a5f] uppercase tracking-wide mb-2">
                        Het moment dat ik dacht: hier doe ik het voor
                      </p>
                      <p className="text-[#64748b] text-sm italic">
                        &ldquo;{activeCase.highlight}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#e2e8f0]">
                    <div className="flex gap-2">
                      {cases.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === activeIndex ? "bg-[#1e3a5f]" : "bg-[#e2e8f0] hover:bg-[#a8d0f0]"
                          }`}
                          aria-label={`Ga naar case ${index + 1}`}
                        />
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevSlide}
                        className="border-[#e2e8f0] text-[#1e3a5f] hover:bg-[#e8f4fc]"
                        aria-label="Vorige case"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextSlide}
                        className="border-[#e2e8f0] text-[#1e3a5f] hover:bg-[#e8f4fc]"
                        aria-label="Volgende case"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Referentie note */}
          <p className="text-center text-sm text-[#64748b] mt-6">
            Referenties beschikbaar op verzoek of via{" "}
            <a
              href="https://linkedin.com/in/stefanradstok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5b9bd5] hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
