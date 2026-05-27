import { Mountain, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'About the Property', href: '#about' },
  { label: 'Location Advantage', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Investment Case', href: '#investment' },
  { label: 'Legal & Compliance', href: '#legal' },
  { label: 'Proposal Options', href: '#proposal' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-5 h-5 text-gold" />
              <span className="font-serif text-xl text-white">
                Aether <span className="text-gold">Heights</span>
              </span>
            </div>
            <p className="font-sans text-white/50 text-sm leading-relaxed mb-6">
              A rare land investment opportunity in the hills of Himachal Pradesh.
              Section 118 approved. Available for outright sale or joint venture.
            </p>
            <p className="font-sans text-white/30 text-xs">
              Baldeyan, near Mashobra · Himachal Pradesh, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-white/50 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Get in Touch</h4>
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-sans text-white/40 text-xs mb-1">Sanyam Goyal</p>
                <a
                  href="tel:+917807241106"
                  className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="font-sans text-sm">+91 78072 41106</span>
                </a>
              </div>
              <a
                href="mailto:goyalsanyam908@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="font-sans text-sm break-all">goyalsanyam908@gmail.com</span>
              </a>
            </div>
            <a
              href="https://wa.me/917807241106"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/20 text-[#25D366] px-4 py-2 text-sm font-sans hover:bg-[#25D366]/30 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.017.5 3.919 1.378 5.594L0 24l6.586-1.338A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.955a9.921 9.921 0 01-5.031-1.365l-.361-.214-3.738.759.786-3.647-.235-.374A9.921 9.921 0 012.045 12C2.045 6.508 6.508 2.045 12 2.045S21.955 6.508 21.955 12 17.492 21.955 12 21.955z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/30 text-xs">
            © 2025 Aether Heights. All rights reserved.
          </p>
          <p className="font-sans text-white/20 text-xs italic text-center md:text-right max-w-sm">
            ⚠️ All property details are for information purposes only and do not constitute a legal offer. Subject to independent due diligence.
          </p>
        </div>
      </div>
    </footer>
  )
}
