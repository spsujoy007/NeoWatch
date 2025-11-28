import { Check, Sparkles, Crown, Zap } from "lucide-react"

export function PricingSection() {
  const features = [
    "AMOLED Display",
    "Bluetooth Calling",
    "100+ Sports Modes",
    "Free Strap Included",
    "1-year Warranty",
  ]

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0B0F19] via-[#0B0F19] to-[#0d1220]" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-slate-400">Simple Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              NeoWatch
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Premium smartwatch experience at an unbeatable price
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          {/* Standard Card */}
          <div className="w-full max-w-sm p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">NeoWatch Lite</h3>
              <p className="text-slate-400 text-sm">Perfect for everyday use</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹2,999</span>
              <span className="text-slate-500 ml-2">one-time</span>
            </div>
            <ul className="space-y-4 mb-8">
              {["LCD Display", "Heart Rate Monitor", "50+ Sports Modes", "6-Month Warranty"].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-white/[0.05] flex items-center justify-center">
                    <Check className="w-3 h-3 text-slate-400" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-6 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white font-medium hover:bg-white/[0.08] transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Pro Card - Featured */}
          <div className="relative w-full max-w-sm group">
            {/* Gradient border */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

            <div className="relative p-8 rounded-2xl bg-[#0B0F19]">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-medium shadow-lg shadow-indigo-500/25">
                  <Crown className="w-4 h-4" />
                  Most Popular
                </div>
              </div>

              <div className="mb-6 pt-2">
                <h3 className="text-xl font-semibold text-white mb-2">NeoWatch Pro</h3>
                <p className="text-slate-400 text-sm">Complete smartwatch experience</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  ₹4,999
                </span>
                <span className="text-slate-500 ml-2">one-time</span>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-indigo-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Order Now
              </button>

              {/* Trust badge */}
              <p className="text-center text-slate-500 text-sm mt-4">Free shipping • 30-day returns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
