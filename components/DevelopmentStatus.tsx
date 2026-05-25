'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Home, Truck, Shield, Mountain } from 'lucide-react'

const milestones = [
  {
    icon: Home,
    title: '6 Cottage Structures',
    status: 'Semi-Finished',
    type: 'progress',
    desc: 'Six partially-built cottage units are already on site, giving any incoming developer a significant construction head-start and reduced timelines.',
  },
  {
    icon: Truck,
    title: 'Internal Road Access',
    status: 'Completed ✓',
    type: 'done',
    desc: 'Full internal road network is in place, enabling heavy equipment movement, construction logistics, and eventual guest access from day one.',
  },
  {
    icon: Shield,
    title: 'Retaining Wall Infrastructure',
    status: 'Completed ✓',
    type: 'done',
    desc: 'Critical hillside stabilisation work is complete — protecting the terrain and significantly reducing foundation and earthwork costs.',
  },
  {
    icon: Mountain,
    title: 'Terrain Ready for Development',
    status: 'Development Ready ✓',
    type: 'done',
    desc: 'Stable, levelled terrain across the full footprint. Architectural planning and construction can begin immediately upon acquisition.',
  },
]

export default function DevelopmentStatus() {
  return (
    <section id="development" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="section-label">Development Status</p>
          <h2 className="section-heading">
            Significant Work{' '}
            <em className="italic">Already Done</em>
          </h2>
          <p className="section-body">
            Groundwork has been laid — reducing your risk exposure and compressing
            the timeline from acquisition to first guest.
          </p>
        </motion.div>

        {/* Milestone grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="bg-cream border border-earth p-8 hover:border-forest/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-forest/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-forest" />
                  </div>
                  <span
                    className={`font-sans text-xs font-medium tracking-wide px-3 py-1.5 ${
                      m.type === 'done'
                        ? 'bg-forest text-white'
                        : 'bg-gold text-white'
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-forest-dark mb-3">{m.title}</h3>
                <p className="font-sans text-charcoal/60 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 bg-forest-dark text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0" />
            <span className="font-serif text-lg">
              Infrastructure ready — build from Day 1 of acquisition
            </span>
          </div>
          <a
            href="#contact"
            className="bg-gold text-white px-8 py-3 font-sans font-medium tracking-wide hover:bg-gold-light transition-colors whitespace-nowrap"
          >
            Book a Site Visit
          </a>
        </motion.div>
      </div>
    </section>
  )
}
