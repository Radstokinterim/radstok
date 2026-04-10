"use client";

import { Card, CardContent } from "@/components/ui/card";

const expertiseAreas = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Operations Strategie",
    description: "Het richten van de operations op de juiste doelen. Snelheid én kwaliteit, afgestemd op de bedrijfsstrategie.",
    capabilities: [
      "Vertaling strategie naar operatie",
      "Operations roadmap ontwikkeling",
      "KPI's en sturingsinformatie",
      "Capaciteitsplanning",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Lean Operational Management",
    description: "Processen stroomlijnen, verspilling elimineren en een cultuur van continu verbeteren ontwikkelen.",
    capabilities: [
      "Lean management implementatie",
      "Procesoptimalisatie",
      "Verbetercultuur ontwikkelen",
      "Operational excellence",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Verandermanagement",
    description: "Organisaties en teams begeleiden door verandertrajecten. Van A naar B, met behoud van talent en continuïteit.",
    capabilities: [
      "Change management",
      "Transformatiebegeleiding",
      "Stakeholder management",
      "Communicatie & draagvlak",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Cultuur & Teamontwikkeling",
    description: "Investeren in mensen en teams. Talent ontwikkelen, teamdynamiek verbeteren, cultuur versterken.",
    capabilities: [
      "Teamcoaching",
      "Middenkader versterken",
      "Cultuurverandering",
      "Talentontwikkeling",
    ],
  },
];

const strengths = [
  {
    title: "Resultaatgericht",
    description: "Concrete resultaten die meetbaar bijdragen aan bedrijfsdoelen.",
  },
  {
    title: "Hands-on mentaliteit",
    description: "Geen ellenlange rapporten, maar direct aan de slag.",
  },
  {
    title: "Stressbestendig",
    description: "Rust bewaren, overzicht houden, helder nadenken onder druk.",
  },
  {
    title: "Verbindend",
    description: "Teams samenbrengen en draagvlak creëren voor verandering.",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#5b9bd5] font-medium mb-4">Waar ik goed in ben</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6">
            Expertise
          </h2>
          <p className="text-lg text-[#64748b]">
            Met een achtergrond in de financiële zakelijke dienstverlening en ervaring
            bij zowel grote organisaties als MKB-bedrijven, breng ik een combinatie van
            strategisch inzicht en operationele slagkracht.
          </p>
        </div>

        {/* Expertise grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="bg-[#f8fafc] border-0 hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-[#e8f4fc] text-[#1e3a5f] flex items-center justify-center mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  {area.title}
                </h3>
                <p className="text-[#64748b] mb-4">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.capabilities.map((capability, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#64748b]">
                      <svg className="w-4 h-4 text-[#5b9bd5] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {capability}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Strengths */}
        <div className="bg-[#1e3a5f] rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Wat ik meeneem in elke opdracht
              </h3>
              <p className="text-white/70 leading-relaxed">
                Naast inhoudelijke expertise breng ik een aantal eigenschappen mee die
                belangrijk zijn voor het succes van een interim opdracht.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-1">{strength.title}</h4>
                  <p className="text-white/60 text-sm">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
