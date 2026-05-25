'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Navigation } from 'lucide-react'

const distances = [
  { label: 'From Mashobra', value: '9 km', time: '25 min drive', icon: Navigation },
  { label: 'From Shimla', value: '~40 km', time: '1 hour drive', icon: Clock },
  { label: 'Golf Course', value: 'Adjacent', time: 'Walking distance', icon: MapPin },
]

const landmarks = [
  { name: 'Welcomhotel by ITC Hotels', type: '5-Star Luxury' },
  { name: 'Club Mahindra – Pristine Peaks', type: 'Resort Chain' },
  { name: 'Sarovar Portico', type: 'Boutique Hotel' },
  { name: 'International Golf Course', type: 'Leisure' },
  { name: 'Mashobra Village', type: 'Heritage' },
  { name: 'Shimla City Centre', type: 'Urban Hub' },
]

export default function Location() {
  return (
    <section id="location" className="py-24 bg-earth">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="section-label">Location</p>
          <h2 className="section-heading">
            Positioned at the{' '}
            <em className="italic">Heart of the Hills</em>
          </h2>
          <p className="section-body">
            Baldeyan sits at an elevation that commands sweeping views of the Himalayan range,
            yet remains easily accessible from Shimla — making it the ideal address for a
            premium hospitality destination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Map + distance cards */}
          <div>
            {/* ─── Map Placeholder ──────────────────────────────────────────────────
                ⚠️ Replace the div below with a Google Maps iframe:
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_PARAMS"
                  width="100%" height="320" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
            ──────────────────────────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-72 bg-forest/10 border border-forest/20 flex items-center justify-center mb-8"
            >
              <div className="text-center px-4">
                <MapPin className="w-10 h-10 text-forest/30 mx-auto mb-3" />
                <p className="font-sans text-forest/50 text-sm">
                  ⚠️ Replace with Google Maps embed
                </p>
                <p className="font-sans text-forest/40 text-xs mt-1">
                  Baldeyan, near Mashobra, Himachal Pradesh
                </p>
              </div>
            </motion.div>

            {/* Distance cards */}
            <div className="grid grid-cols-3 gap-4">
              {distances.map((d, i) => {
                const Icon = d.icon
                return (
                  <motion.div
                    key={d.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-5 text-center"
                  >
                    <Icon className="w-5 h-5 text-gold mx-auto mb-3" />
                    <div className="font-serif text-xl text-forest-dark font-semibold">{d.value}</div>
                    <div className="font-sans text-xs text-charcoal/60 mt-1">{d.label}</div>
                    <div className="font-sans text-xs text-gold mt-1">{d.time}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right: Landmarks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl text-forest-dark mb-4">In Good Company</h3>
            <p className="font-sans text-charcoal/70 mb-8 leading-relaxed">
              The micro-market around Baldeyan has already attracted India's top hospitality
              brands — a clear signal of the zone's premium destination potential.
            </p>
            <div className="space-y-0">
              {landmarks.map((lm, i) => (
                <motion.div
                  key={lm.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between py-4 border-b border-earth last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    <span className="font-sans text-charcoal font-medium text-sm">{lm.name}</span>
                  </div>
                  <span className="font-sans text-xs text-forest/60 bg-forest-50 px-3 py-1 whitespace-nowrap ml-4">
                    {lm.type}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
