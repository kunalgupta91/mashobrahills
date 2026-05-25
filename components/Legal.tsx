'use client'

import { motion } from 'framer-motion'
import { Shield, FileCheck, Scale, CheckSquare } from 'lucide-react'

const trustItems = [
  {
    icon: FileCheck,
    title: 'Section 118 Approved',
    desc: 'Section 118 of the HP Tenancy & Land Reforms Act requires prior government approval for non-Himachali entities to acquire land. This approval is already secured — a critical de-risking milestone most comparable properties lack.',
  },
  {
    icon: Scale,
    title: 'Non-Agricultural Classification',
    desc: 'The land is fully cleared for commercial and non-agricultural development — enabling hospitality, leisure, and corporate use without any additional reclassification or waiting period.',
  },
  {
    icon: Shield,
    title: 'Corporate Use Compliant',
    desc: 'Eligible for acquisition by companies, hotel chains, LLPs, and institutional investors. All title documentation is in order. ⚠️ Independent legal due diligence is recommended before proceeding.',
  },
  {
    icon: CheckSquare,
    title: 'Clean Title',
    desc: 'The property is represented as free of disputes, encumbrances, and active litigation. ⚠️ Buyer should confirm via independent legal counsel and title search prior to transaction.',
  },
]

export default function Legal() {
  return (
    <section id="legal" className="py-24 bg-earth">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="section-label">Legal & Compliance</p>
          <h2 className="section-heading">
            Fully Cleared,{' '}
            <em className="italic">Zero Barriers</em>
          </h2>
          <p className="section-body">
            Acquiring land in Himachal Pradesh has historically been complex for outside investors.
            Aether Heights has already navigated the most critical legal hurdles — so you don't have to.
          </p>
        </motion.div>

        {/* Trust cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {trustItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-white p-8 flex gap-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-forest-50 flex-shrink-0 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-forest-dark mb-3">{item.title}</h3>
                  <p className="font-sans text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Section 118 explainer box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-forest-dark text-white p-8 md:p-12"
        >
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-2xl text-white mb-1">
                What is Section 118 Approval?
              </h3>
              <p className="font-sans text-white/50 text-sm">
                The most critical legal hurdle in HP land acquisition — explained
              </p>
            </div>
          </div>
          <p className="font-sans text-white/70 leading-relaxed mb-4">
            Under the Himachal Pradesh Tenancy and Land Reforms Act, any transfer of agricultural
            land to a non-agriculturist — or to a person not domiciled in HP — requires prior
            state government approval under Section 118. This single requirement stops the majority
            of outside investors in their tracks, often leading to 12–24 months of waiting.
          </p>
          <p className="font-sans text-white/70 leading-relaxed">
            <span className="text-gold font-medium">Aether Heights has this approval secured.</span>{' '}
            That means hotel chains, corporate entities, and investors from outside Himachal Pradesh
            can proceed with acquisition immediately — no waiting, no red tape.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
