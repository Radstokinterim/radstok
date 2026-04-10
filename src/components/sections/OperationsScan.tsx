"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const frameworks = [
  {
    name: "Competing Values Framework",
    shortName: "Cultuuranalyse",
    description: "Inzicht in hoe cultuur strategie-executie beïnvloedt",
  },
  {
    name: "Treacy & Wiersema",
    shortName: "Strategische focus",
    description: "Bepalen van de juiste waardediscipline",
  },
  {
    name: "Tuckman",
    shortName: "Teamontwikkeling",
    description: "Begrijpen waar teams staan en wat ze nodig hebben",
  },
];

export function OperationsScan() {
  return (
    <section id="operations-scan" className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Linker kolom - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#5b9bd5] font-medium">Mijn propositie</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f]">
                De Operations Scan
              </h2>
            </div>

            <p className="text-lg text-[#64748b] leading-relaxed">
              De Operations Scan combineert mijn jarenlange praktijkervaring met de
              bedrijfskundige kennis die ik heb opgedaan aan Nyenrode. Ik werk met
              wetenschappelijk onderbouwde frameworks om systematisch te analyseren
              waar de operatie staat en waar de kansen liggen.
            </p>

            <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
              <h3 className="font-semibold text-[#1e3a5f] mb-4">De rode draad? Hard én Hart.</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e3a5f]">Hard</p>
                    <p className="text-sm text-[#64748b]">Structuur, strategie, resultaat</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#5b9bd5] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e3a5f]">Hart</p>
                    <p className="text-sm text-[#64748b]">Mensen, cultuur, ontwikkeling</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[#64748b] text-sm">
                Niet of-of, maar en-en. Want duurzame verbetering vraagt beide.
              </p>
            </div>

            <p className="text-[#64748b]">
              De Operations Scan is voor organisaties die niet alleen willen weten{" "}
              <span className="font-medium text-[#1e3a5f]">wát</span> er moet veranderen,
              maar ook begrijpen{" "}
              <span className="font-medium text-[#1e3a5f]">waaróm</span> — en hoe ze hun
              mensen daarin meenemen.
            </p>

            <Button
              size="lg"
              className="bg-[#1e3a5f] hover:bg-[#2d5a87] text-white px-8 py-6 text-lg rounded-lg"
              asChild
            >
              <a href="https://cal.com/operationsscan/30min" target="_blank" rel="noopener noreferrer">
                Bespreek de mogelijkheden
              </a>
            </Button>
          </div>

          {/* Rechter kolom - Frameworks */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-[#5b9bd5] uppercase tracking-wide">
              Wetenschappelijk onderbouwd
            </p>
            <div className="space-y-4">
              {frameworks.map((framework, index) => (
                <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#e8f4fc] text-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1e3a5f]">{framework.name}</h4>
                        <p className="text-sm text-[#5b9bd5] font-medium">{framework.shortName}</p>
                        <p className="text-sm text-[#64748b] mt-1">{framework.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quote card */}
            <Card className="bg-[#1e3a5f] border-0 mt-8">
              <CardContent className="p-6">
                <svg className="w-8 h-8 text-[#5b9bd5] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white/90 italic">
                  &ldquo;Ik denk als consultant, door met een consultancybril op, bedrijfskundig
                  naar de bedrijfsvoering te kijken. Tegelijkertijd krijg ik de meeste energie
                  van verandertrajecten en de mensen daarin mee te nemen.&rdquo;
                </p>
                <p className="text-[#a8d0f0] mt-4 text-sm font-medium">— Stefan Radstok</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
