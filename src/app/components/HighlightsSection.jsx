"use client"

import Image from "next/image"
import { useState } from "react"

const highlights = [
  {
    title: "Rotating Crown Control",
    description:
      "Precision-engineered digital crown with haptic feedback for seamless navigation through menus, apps, and notifications.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Always-On AMOLED Display",
    description:
      'Stunning 1.9" AMOLED display with 2000 nits peak brightness. Check the time without raising your wrist.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Premium Aluminum Body",
    description:
      "Crafted from aerospace-grade aluminum with a ceramic back. Lightweight durability that feels luxurious on your wrist.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
]

export function HighlightsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="highlights" className="relative py-24 md:py-32 overflow-hidden bg-[#0B0F19]">
      <div className="absolute inset-0 bg-linear-to-b from-[#0B0F19] via-[#0d1220] to-[#0B0F19]" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-500/20 rounded-full animate-pulse"
            style={{
              // left: `${Math.random() * 100}%`,
              // top: `${Math.random() * 100}%`,
              // animationDelay: `${Math.random() * 3}s`,
              // animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/3 border border-white/6 backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            <p className="text-sm uppercase tracking-widest text-indigo-400">Crafted to Perfection</p>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Product{" "}
            <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Every detail engineered for excellence</p>
        </div>

        {/* Main showcase with gradient border */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -inset-2 bg-linear-to-r from-indigo-500 via-violet-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
          <div className="absolute -inset-1 bg-linear-to-r from-violet-500 via-indigo-500 to-violet-500 rounded-3xl blur-xl opacity-25" />

          <div className="relative p-0.5 rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 bg-[conic-gradient(from_0deg,#4F46E5,#7C3AED,#4F46E5)] animate-[spin_4s_linear_infinite]"
              style={{ transformOrigin: "center center" }}
            />

            {/* Inner content */}
            <div className="relative rounded-3xl bg-[#0B0F19] overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="relative aspect-square lg:aspect-auto lg:min-h-[650px] group">
                  <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 via-transparent to-violet-500/20 group-hover:opacity-40 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-linear-to-tr from-violet-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <Image
                    src="/assets/heroWatch.png"
                    alt="NeoWatch Premium Smartwatch"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:bottom-8 lg:left-8">
                    <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/6">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-slate-400">Active Display</span>
                      </div>
                      <div className="w-px h-4 bg-white/10" />
                      <span className="text-sm font-medium text-white">2000 nits</span>
                    </div>
                  </div>

                  {/* Overlay gradient for mobile */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0B0F19] via-transparent to-transparent lg:hidden" />
                </div>

                {/* Text side */}
                <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="absolute inset-0 opacity-[0.07]">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse" />
                    <div
                      className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full blur-3xl animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                  </div>

                  <div className="relative space-y-6">
                    {highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className={`group cursor-pointer transition-all duration-500 ${
                          activeIndex === index ? "scale-100 opacity-100" : "scale-[0.98] opacity-60 hover:opacity-80"
                        }`}
                        onMouseEnter={() => setActiveIndex(index)}
                      >
                        <div
                          className={`relative p-6 rounded-2xl transition-all duration-500 ${
                            activeIndex === index
                              ? "bg-white/3 border border-white/8"
                              : "bg-transparent border border-transparent"
                          }`}
                        >
                          {/* Active indicator glow */}
                          {activeIndex === index && (
                            <div className="absolute -inset-px bg-linear-to-r from-indigo-500/10 via-violet-500/10 to-indigo-500/10 rounded-2xl blur-sm" />
                          )}

                          <div className="relative flex items-start gap-4">
                            <div
                              className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                                activeIndex === index
                                  ? "bg-linear-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/20"
                                  : "bg-white/3 text-indigo-400"
                              }`}
                            >
                              {highlight.icon}
                            </div>

                            <div className="space-y-2 flex-1">
                              <div className="flex items-center justify-between">
                                <h3
                                  className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${
                                    activeIndex === index ? "text-white" : "text-white/70"
                                  }`}
                                >
                                  {highlight.title}
                                </h3>
                                <svg
                                  className={`w-5 h-5 text-indigo-400 transition-all duration-300 ${
                                    activeIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                                  }`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`leading-relaxed transition-colors duration-300 ${
                                  activeIndex === index ? "text-slate-400" : "text-slate-500"
                                }`}
                              >
                                {highlight.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-10 flex items-center gap-2">
                    {highlights.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          activeIndex === index
                            ? "w-8 bg-linear-to-r from-indigo-500 to-violet-500"
                            : "w-4 bg-white/10 hover:bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
