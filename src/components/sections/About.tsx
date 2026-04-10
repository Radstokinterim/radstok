"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="over-stefan" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Linker kolom - Foto */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#e8f4fc] rounded-2xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#5b9bd5]/20 rounded-full -z-10"></div>

              {/* Image */}
              <div className="relative w-80 h-96 lg:w-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/1767343978852.jpeg"
                  alt="Stefan Radstok"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Rechter kolom - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-[#5b9bd5] font-medium">Over mij</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f]">
                Stefan Radstok
              </h2>
            </div>

            <div className="space-y-4 text-[#64748b] leading-relaxed">
              <p>
                Na jarenlang te hebben gewerkt bij Achmea — van teammanager tot business
                consultant — besloot ik in 2021 een nieuwe stap te zetten. Niet omdat ik
                het niet naar mijn zin had, maar omdat ik{" "}
                <span className="font-medium text-[#1e3a5f]">anders wilde leren</span>.
              </p>

              <p>
                Als consultant had ik geleerd bedrijfskundig naar problemen te kijken.
                Maar ik miste het begeleiden van teams, het meenemen van mensen in een
                veranderambitie. Dat is waar ik de meeste energie van krijg.
              </p>

              <p>
                Interim management bleek de perfecte combinatie: de consultancybril
                waarmee ik naar organisaties kijk, gecombineerd met de hands-on rol
                van het daadwerkelijk begeleiden van verandering.
              </p>
            </div>

            {/* Quote highlight */}
            <div className="bg-[#f8fafc] rounded-2xl p-6 border-l-4 border-[#5b9bd5]">
              <p className="text-[#1e3a5f] italic">
                &ldquo;Ik krijg de meeste energie van het verwezenlijken, van het traject
                van A naar B en de mensen daarin mee te nemen. Het waarborgen van
                continuïteit en alles — van organisatie en professionalisering tot het
                niveau van klantbediening — naar een hoger niveau tillen.&rdquo;
              </p>
            </div>

            {/* Key points */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#e8f4fc] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#1e3a5f]">Nyenrode alumnus</p>
                  <p className="text-sm text-[#64748b]">Business Universiteit</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#e8f4fc] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#1e3a5f]">Financiële sector</p>
                  <p className="text-sm text-[#64748b]">Zakelijke dienstverlening</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#e8f4fc] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#1e3a5f]">100+ FTE</p>
                  <p className="text-sm text-[#64748b]">Aangestuurd</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#e8f4fc] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#1e3a5f]">Stressbestendig</p>
                  <p className="text-sm text-[#64748b]">Bedrijfskritieke rollen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
