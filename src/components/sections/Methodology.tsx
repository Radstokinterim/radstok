"use client";

import { Card, CardContent } from "@/components/ui/card";

const frameworks = [
  {
    name: "Competing Values Framework",
    shortName: "CVF",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    description:
      "Framework voor cultuuranalyse dat vier cultuurtypes onderscheidt: Collaborate, Create, Compete en Control.",
    application:
      "Ik gebruik CVF om de huidige organisatiecultuur in kaart te brengen en te bepalen welke cultuurshift nodig is om de gewenste strategie te kunnen uitvoeren.",
    insight:
      "Bij TKB zag ik dat een familiaire cultuur ('wij zorgen voor je') uitstekend samen kan gaan met een competitieve cultuur (hard werken, klant centraal, commercieel denken).",
  },
  {
    name: "Treacy & Wiersema",
    shortName: "Value Disciplines",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    description:
      "Model voor strategische focus met drie waardedisciplines: Operational Excellence, Product Leadership, of Customer Intimacy.",
    application:
      "Helpt bij het bepalen van de juiste operations strategie. Een organisatie die kiest voor Operational Excellence vraagt andere operationele inrichting dan een die kiest voor Customer Intimacy.",
    insight:
      "De operations strategie moet passen bij de gekozen waardediscipline. Snelheid én kwaliteit is mogelijk, maar vraagt bewuste keuzes.",
  },
  {
    name: "Tuckman's Model",
    shortName: "Teamontwikkeling",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description:
      "Model voor teamontwikkeling met vier fasen: Forming, Storming, Norming, Performing.",
    application:
      "Ik gebruik dit om te begrijpen waar een team staat en welke interventies nodig zijn. Een team in de Storming-fase vraagt andere begeleiding dan een team dat al Performing is.",
    insight:
      "Bij OOM werkte ik actief samen met een organisatiepsycholoog om teamdynamiek te verbeteren en talent te ontwikkelen.",
  },
];

export function Methodology() {
  return (
    <section id="werkwijze" className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#5b9bd5] font-medium mb-4">Mijn werkwijze</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6">
            Wetenschappelijk onderbouwd
          </h2>
          <p className="text-lg text-[#64748b]">
            De Operations Scan en mijn advies zijn gebaseerd op bewezen frameworks uit de
            bedrijfskunde. Geen theoretische exercitie, maar praktische toepassing van
            wetenschappelijke inzichten.
          </p>
        </div>

        {/* Frameworks */}
        <div className="space-y-6">
          {frameworks.map((framework, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3">
                  {/* Framework info */}
                  <div className="p-8 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] text-white">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                      {framework.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{framework.name}</h3>
                    <p className="text-[#a8d0f0] text-sm font-medium mb-4">{framework.shortName}</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {framework.description}
                    </p>
                  </div>

                  {/* Application */}
                  <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#e2e8f0]">
                    <p className="text-sm font-medium text-[#5b9bd5] uppercase tracking-wide mb-3">
                      Hoe ik dit toepas
                    </p>
                    <p className="text-[#64748b] leading-relaxed">
                      {framework.application}
                    </p>
                  </div>

                  {/* Insight */}
                  <div className="p-8 bg-[#f8fafc]">
                    <p className="text-sm font-medium text-[#5b9bd5] uppercase tracking-wide mb-3">
                      Inzicht uit de praktijk
                    </p>
                    <p className="text-[#64748b] leading-relaxed italic">
                      &ldquo;{framework.insight}&rdquo;
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-[#64748b] max-w-2xl mx-auto">
            Deze frameworks vormen de basis, maar geen enkele organisatie is hetzelfde.
            De kunst is om de theorie te vertalen naar wat werkt voor{" "}
            <span className="font-medium text-[#1e3a5f]">jouw</span> specifieke situatie
            en mensen.
          </p>
        </div>
      </div>
    </section>
  );
}
