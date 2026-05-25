'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Handshake, DollarSign } from 'lucide-react'

const saleFeatures = [
  'Full ownership transfer — clear title',
  'Immediate possession post-formalities',
  'Indicative price: ₹40 Crore (negotiable)',
  'No ongoing revenue-sharing obligations',
  'Ideal for hotel chains & large developers',
  'Maximum operational freedom post-acquisition',
]

const jvFeatures = [
  'Seller retains an equity stake in the project',
  'Reduced upfront capital requirement for buyer',
  'Shared development risk & local expertise',
  'Revenue-share model — structure is flexible',
  'Seller brings local relationships & approvals',
  'Ideal for first-time HP market entrants',
]

export default function Proposal() {
  return (
    <section id="proposal" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="section-label">Proposal Options</p>
          <h2 className="section-heading">
            Two Ways to{' '}
            <em className="italic">Partner With Us</em>
          </h2>
          <p className="section-body">
            We are flexible. Whether you want full ownership or prefer a collaborative structure,
            we can engineer a deal that works for both parties.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Outright Sale */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cream border-2 border-earth hover:border-forest/40 transition-all duration-300 p-10 flex flex-col"
          >
            <div className="w-12 h-12 bg-forest/10 flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-forest" />
            </div>
            <h3 className="font-serif text-2xl text-forest-dark mb-1">Outright Sale</h3>
            <p className="font-sans text-gold text-sm tracking-wide mb-6">Full Ownership Transfer</p>
            <ul className="space-y-3 mb-10 flex-1">
              {saleFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                  <ArrowRight className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block text-center bg-forest text-white py-3 font-sans font-medium tracking-wide hover:bg-forest-light transition-colors"
            >
              Enquire About Sale
            </a>
          </motion.div>

          {/* Joint Venture */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-forest-dark border-2 border-forest-dark p-10 flex flex-col"
          >
            <div className="w-12 h-12 bg-gold/20 flex items-center justify-center mb-6">
              <Handshake className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-serif text-2xl text-white mb-1">Joint Venture</h3>
            <p className="font-sans text-gold text-sm tracking-wide mb-6">Strategic Collaboration</p>
            <ul className="space-y-3 mb-10 flex-1">
              {jvFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 font-sans text-sm text-white/70">
                  <ArrowRight className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block text-center bg-gold text-white py-3 font-sans font-medium tracking-wide hover:bg-gold-light transition-colors"
            >
              Discuss JV Options
            </a>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 font-sans text-xs text-charcoal/40 italic text-center"
        >
          ⚠️ JV terms are indicative. Final structure subject to mutual negotiation and legal documentation.
        </motion.p>
      </div>
    </section>
  )
}
