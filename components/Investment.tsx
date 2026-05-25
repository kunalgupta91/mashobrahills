'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Hotel, MapPinned, Users } from 'lucide-react'

const pillars = [
  {
    icon: MapPinned,
    title: 'Strategic Location',
    points: [
      'Adjacent to an International Golf Course',
      'Neighbours: ITC Welcomhotel, Club Mahindra, Sarovar Portico',
      'Just 1 hour from Shimla — HP tourism capital',
      'Year-round road accessibility via NH-5',
    ],
  },
  {
    icon: Hotel,
    title: 'Hotel Feasibility',
    points: [
      '11,993 sq.m. supports a 150-room 5-star resort footprint',
      'Elevation advantage — panoramic Himalayan views from every floor',
      'Existing infrastructure reduces CapEx by an estimated 30–40% ⚠️',
      'Suitable for hotel, glamping, spa resort, or recreation centre',
    ],
  },
  {
    icon: TrendingUp,
    title: 'ROI Potential',
    points: [
      'Comparable properties in this zone priced 40–60% higher ⚠️',
      'HP hospitality land appreciating at 8–12% p.a. ⚠️',
      'High-season occupancy in area: 70–80% avg. ⚠️',
      'JV structure available to lower upfront capital requirement',
    ],
  },
  {
    icon: Users,
    title: 'Ideal For',
    points: [
      'Hotel chains & resort operators seeking HP expansion',
      'Boutique resort developers & leisure brands',
      'HNI investors — premium Himalayan land banking',
      'Family offices — long-horizon appreciating asset',
    ],
  },
]

export default function Investment() {
  return (
    <section id="investment" className="py-24 bg-forest-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-gold font-sans text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Investment Case
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
            Why Invest in{' '}
            <em className="italic text-gold">Aether Heights?</em>
          </h2>
          <p className="font-sans text-white/60 text-lg leading-relaxed">
            The convergence of location, infrastructure readiness, legal clearance, and market
            timing makes this one of Himachal Pradesh's most compelling hospitality investment
            opportunities.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="border border-white/10 p-8 hover:border-gold/40 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gold/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-white">{p.title}</h3>
                </div>
                <ul className="space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 font-sans text-sm text-white/70">
                      <span className="text-gold mt-0.5 flex-shrink-0">→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 font-sans text-xs text-white/25 italic"
        >
          ⚠️ Figures marked ⚠️ are auto-generated estimates for illustration. Verify independently before publishing.
        </motion.p>
      </div>
    </section>
  )
}
