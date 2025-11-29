import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0B0F19]">
      {/* Gradient glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-r from-indigo-600/30 via-violet-600/20 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 bg-[#0B0F19]/70 backdrop-blur-xl border-b border-white/6">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="text-white font-semibold text-xl tracking-tight">NeoWatch</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#highlights" className="hover:text-white transition-colors">
            Highlights
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
        </div>
        <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/5" asChild>
          <a href="#pricing">Order Now</a>
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-20 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm w-fit mt-5 md:mt-0">
              <span className="w-2 h-2 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 animate-pulse" />
              <span className="text-sm text-gray-300 tracking-wide uppercase">Next Generation Wearable</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight text-balance">
              Time Without{" "}
              <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Limitation
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl text-pretty">
              Experience the future of timekeeping with advanced health monitoring, seamless connectivity, and a design
              that transcends boundaries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 hover:scale-105"
              >
                Pre-Order Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg font-medium rounded-full backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">7</p>
                <p className="text-sm text-gray-500 mt-1">Days Battery</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">50m</p>
                <p className="text-sm text-gray-500 mt-1">Water Resistant</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">24/7</p>
                <p className="text-sm text-gray-500 mt-1">Health Tracking</p>
              </div>
            </div>
          </div>

          {/* Right Column - Product Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Glow behind product */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] bg-linear-to-br from-indigo-600/40 via-violet-600/30 to-transparent rounded-full blur-[80px]" />
            </div>

            {/* Product Image Container */}
            <div className="relative z-10">
              <img
                src="/assets/heroWatch.png"
                alt="NeoWatch Pro smartwatch"
                className="w-full max-w-[500px] h-auto drop-shadow-2xl"
              />

              {/* Floating feature cards */}
              <div className="absolute top-12 -left-4 md:-left-12 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
                <p className="text-xs text-gray-400">Heart Rate</p>
                <p className="text-lg font-semibold text-white">
                  72 <span className="text-indigo-400">BPM</span>
                </p>
              </div>

              <div className="absolute bottom-24 -right-4 md:-right-8 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
                <p className="text-xs text-gray-400">Blood Oxygen</p>
                <p className="text-lg font-semibold text-white">
                  98<span className="text-violet-400">%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-px h-8 bg-linear-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  )
}
