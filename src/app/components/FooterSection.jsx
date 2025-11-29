import { Watch, Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function FooterSection() {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About Us", href: "#" },
  ]

  const supportLinks = [
    { label: "FAQ", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "Contact Us", href: "#" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ]

  return (
    <footer className="relative bg-[#070a12] border-t border-white/6">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500/30 blur-lg rounded-full" />
                <div className="relative w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                  <Watch className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-white">NeoWatch</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Premium smartwatches designed for the modern lifestyle. Track your health, stay connected, and look great
              doing it.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/3 border border-white/6 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-indigo-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-5">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-indigo-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/3 border border-white/6 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">support@neowatch.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/3 border border-white/6 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">+91 1800-123-4567</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/3 border border-white/6 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Mumbai, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">© 2025 NeoWatch. All rights reserved | <b><span className="text-indigo-400">Author:</span></b> Sujoy Paul | <b><a className="text-indigo-400" href="https://github.com/spsujoy007">Github</a></b> | 
            <b> <span className="text-indigo-400">Company:</span></b> Autobotwa
             </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-slate-500 text-sm hover:text-indigo-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-500 text-sm hover:text-indigo-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
