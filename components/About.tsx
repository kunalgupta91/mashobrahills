'use client'

import { motion } from 'framer-motion'
import { Maximize2, Building2, FileCheck, Banknote } from 'lucide-react'

const highlights = [
  {
    icon: Maximize2,
    title: '11,993 sq.m.',
    subtitle: 'Total Land Area',
    desc: 'Prime hill-side terrain with natural elevation, panoramic views, and a footprint suited for full-scale resort development.',
  },
  {
    icon: Building2,
    title: '150-Room',
    subtitle: 'Resort Capacity',
    desc: 'Ideal for a flagship 5-star hotel, boutique resort, leisure destination, or recreation centre.',
  },
  {
    icon: FileCheck,
    title: 'Section 118',
    subtitle: 'Approval Secured',
    desc: 'Fully cleared for non-agricultural and corporate use — a rare head-start that most comparable HP land parcels lack.',
  },
  {
    icon: Banknote,
    title: '₹40 Crore',
    subtitle: 'Indicative Price',
    desc: 'Negotiable on genuine terms. Open to outright sale or strategic joint venture with the right development partner.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="section-label">The Property</p>
          <h2 className="section-heading">
            Where Luxury Meets{' '}
            <em className="italic">Natural Grandeur</em>
          </h2>
          <p className="section-body">
            Nestled in the pristine highlands of Baldeyan, Himachal Pradesh, this exceptional
            land parcel presents a once-in-a-generation opportunity for visionary investors and
            hospitality leaders. Surrounded by India's most celebrated hill-station hotel brands,
            it is primed for a landmark development.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {highlights.map((h) => {
            const Icon = h.icon
            return (
              <motion.div
                key={h.title}
                variants={item}
                className="bg-white border border-earth p-8 hover:border-gold/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-forest-50 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <Icon className="w-6 h-6 text-forest group-hover:text-gold transition-colors" />
                </div>
                <div className="text-2xl font-serif text-forest-dark font-semibold mb-1">{h.title}</div>
                <div className="text-gold font-sans text-sm tracking-wide mb-3">{h.subtitle}</div>
                <p className="text-charcoal/60 font-sans text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Neighbours strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 bg-forest-dark text-white p-8 md:p-12"
        >
          <p className="font-sans text-white/50 text-xs tracking-[0.2em] uppercase mb-6">
            Neighbouring Luxury Properties
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              'Welcomhotel by ITC Hotels',
              'Club Mahindra — Pristine Peaks',
              'Sarovar Portico',
            ].map((name) => (
              <div key={name} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                <span className="font-serif text-lg text-white/90">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
