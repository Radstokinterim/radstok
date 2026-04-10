"use client";

import { timelineEvents } from "@/data/timeline";

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#5b9bd5] font-medium mb-4">Mijn pad</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6">
            Carrière
          </h2>
          <p className="text-lg text-[#64748b]">
            Van teammanager bij Achmea naar zelfstandig interim manager. Een pad van
            15+ jaar waarin ik heb geleerd dat duurzame verandering vraagt om zowel
            structuur als aandacht voor mensen.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#e2e8f0] transform lg:-translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const isLeft = index % 2 === 0;
                const isHighlight = event.highlight;
                const isMilestone = event.type === "milestone";

                return (
                  <div
                    key={index}
                    className={`relative flex items-start ${
                      isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div
                      className={`absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 z-10 ${
                        isMilestone
                          ? "w-6 h-6 bg-[#5b9bd5]"
                          : isHighlight
                          ? "w-4 h-4 bg-[#1e3a5f]"
                          : "w-3 h-3 bg-[#a8d0f0]"
                      } rounded-full border-4 border-[#f8fafc]`}
                    ></div>

                    {/* Content */}
                    <div
                      className={`ml-12 lg:ml-0 lg:w-1/2 ${
                        isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                      }`}
                    >
                      <div
                        className={`p-6 rounded-2xl ${
                          isMilestone
                            ? "bg-[#1e3a5f] text-white"
                            : isHighlight
                            ? "bg-white shadow-md"
                            : "bg-white"
                        }`}
                      >
                        {/* Year badge */}
                        <div
                          className={`inline-flex items-center gap-1 text-sm font-medium mb-2 ${
                            isMilestone
                              ? "text-[#a8d0f0]"
                              : "text-[#5b9bd5]"
                          }`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.year}
                          {event.endYear && ` - ${event.endYear}`}
                        </div>

                        {/* Title & Company */}
                        <h3
                          className={`font-semibold mb-1 ${
                            isMilestone ? "text-white" : "text-[#1e3a5f]"
                          }`}
                        >
                          {event.title}
                        </h3>
                        <p
                          className={`text-sm font-medium mb-2 ${
                            isMilestone ? "text-[#a8d0f0]" : "text-[#5b9bd5]"
                          }`}
                        >
                          {event.company}
                        </p>

                        {/* Description */}
                        <p
                          className={`text-sm leading-relaxed ${
                            isMilestone ? "text-white/80" : "text-[#64748b]"
                          }`}
                        >
                          {event.description}
                        </p>

                        {/* Type badge */}
                        {event.type === "interim" && (
                          <span className="inline-block mt-3 text-xs font-medium px-2 py-1 rounded-full bg-[#e8f4fc] text-[#1e3a5f]">
                            Interim opdracht
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden lg:block lg:w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[#64748b] mb-4">
            Benieuwd naar het volledige verhaal?
          </p>
          <a
            href="https://linkedin.com/in/stefanradstok"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1e3a5f] font-medium hover:text-[#5b9bd5] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Bekijk mijn LinkedIn profiel
          </a>
        </div>
      </div>
    </section>
  );
}
