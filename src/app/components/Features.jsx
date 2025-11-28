import { Heart, Moon, Droplets, Battery, Bluetooth, Bell } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "24/7 Health Monitoring",
    description: "Continuous heart rate, SpO2, and stress tracking to keep you informed about your wellness.",
  },
  {
    icon: Moon,
    title: "AI Sleep Tracking",
    description: "Advanced AI analyzes your sleep patterns and provides personalized recommendations.",
  },
  {
    icon: Droplets,
    title: "Waterproof (IP68)",
    description: "Swim, shower, or dive up to 50m. Your watch goes wherever life takes you.",
  },
  {
    icon: Battery,
    title: "7-Day Battery Life",
    description: "Power through an entire week on a single charge with intelligent power management.",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth 5.3",
    description: "Ultra-fast, energy-efficient connectivity for seamless device synchronization.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay connected with customizable alerts for calls, messages, and apps.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-[#0B0F19] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">Features</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Built for the{" "}
            <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Future</span>
          </h2>
          <p className="text-gray-400 text-lg">Packed with cutting-edge technology to elevate your daily life.</p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 hover:border-white/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-linear-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-indigo-400" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-br from-indigo-600/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
