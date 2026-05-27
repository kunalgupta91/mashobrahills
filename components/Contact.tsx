'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, User, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ name: '', phone: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full border border-earth bg-white px-4 py-3 font-sans text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-forest transition-colors text-sm'

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-heading">
            Let's Start a{' '}
            <em className="italic">Conversation</em>
          </h2>
          <p className="section-body">
            Reach out to schedule a site visit, request detailed financials, or discuss
            partnership structures. We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-forest/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <p className="font-sans text-xs text-charcoal/50 uppercase tracking-wide mb-1">Contact Person</p>
                  <p className="font-serif text-xl text-forest-dark">Sanyam Goyal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-forest/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <p className="font-sans text-xs text-charcoal/50 uppercase tracking-wide mb-1">Phone / WhatsApp</p>
                  <a
                    href="tel:+917807241106"
                    className="font-serif text-xl text-forest-dark hover:text-gold transition-colors"
                  >
                    +91 78072 41106
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-forest/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <p className="font-sans text-xs text-charcoal/50 uppercase tracking-wide mb-1">Email</p>
                  <a
                    href="mailto:goyalsanyam908@gmail.com"
                    className="font-serif text-xl text-forest-dark hover:text-gold transition-colors break-all"
                  >
                    goyalsanyam908@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917807241106?text=Hi%2C%20I'm%20interested%20in%20the%20Aether%20Heights%20property%20in%20Baldeyan%2C%20Himachal%20Pradesh."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-sans font-medium hover:bg-[#1da851] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.017.5 3.919 1.378 5.594L0 24l6.586-1.338A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.955a9.921 9.921 0 01-5.031-1.365l-.361-.214-3.738.759.786-3.647-.235-.374A9.921 9.921 0 012.045 12C2.045 6.508 6.508 2.045 12 2.045S21.955 6.508 21.955 12 17.492 21.955 12 21.955z"/>
              </svg>
              WhatsApp Sanyam
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <CheckCircle className="w-16 h-16 text-forest mb-6" />
                <h3 className="font-serif text-2xl text-forest-dark mb-3">Thank you!</h3>
                <p className="font-sans text-charcoal/60">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-sans text-xs text-charcoal/50 uppercase tracking-wide block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text" name="name" required value={form.name}
                    onChange={handleChange} placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-sans text-xs text-charcoal/50 uppercase tracking-wide block mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel" name="phone" required value={form.phone}
                    onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-sans text-xs text-charcoal/50 uppercase tracking-wide block mb-2">
                    Email
                  </label>
                  <input
                    type="email" name="email" value={form.email}
                    onChange={handleChange} placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-sans text-xs text-charcoal/50 uppercase tracking-wide block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message" rows={4} value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest — hotel chain, JV, site visit, financials…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="font-sans text-red-600 text-sm">
                    Something went wrong. Please WhatsApp or email directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gold text-white py-4 font-sans font-medium tracking-wide hover:bg-gold-light transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  {status === 'loading' ? 'Sending…' : 'Request Details / Book Site Visit'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
