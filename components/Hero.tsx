'use client'

import { motion } from 'framer-motion'
import { ChevronDown, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — real property image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery-2.png"
          alt="Aether Heights land parcel — Baldeyan, Himachal Pradesh"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-forest-dark/70" />
        {/* Subtle gradient fade toward bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-dark/20 to-forest-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-gold/90 font-sans text-sm tracking-[0.2em] uppercase">
              Baldeyan · Near Mashobra · Himachal Pradesh
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            A Rare{' '}
            <em className="italic text-gold">Investment</em>
            <br />
            Opportunity in the
            <br />
            Hills of Himachal
          </h1>

          {/* Sub-line */}
          <p className="font-sans text-white/75 text-lg md:text-xl max-w-xl mb-3 leading-relaxed">
            11,993 sq.m. of prime hill-side land — ideal for a 5-star resort,
            boutique hotel, or hospitality destination.
          </p>

          <p className="font-sans text-gold text-sm tracking-wide mb-10">
            Section 118 Approved &nbsp;·&nbsp; ₹40 Crore (Negotiable) &nbsp;·&nbsp; JV Welcome
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-gold text-white px-10 py-4 font-sans font-medium tracking-wide
                         hover:bg-gold-light transition-all duration-300 text-center
                         inline-flex items-center justify-center gap-2"
            >
              Schedule a Site Visit
            </a>
            <a
              href="#gallery"
              className="border border-white/70 text-white px-10 py-4 font-sans font-medium tracking-wide
                         hover:bg-white hover:text-forest-dark transition-all duration-300 text-center
                         inline-flex items-center justify-center gap-2"
            >
              Watch Property Video
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span className="text-white/40 text-xs font-sans tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
