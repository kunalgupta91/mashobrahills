'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  { id: 1, src: '/images/gallery-1.png', caption: '11,993 sq.m. — Scale of the Land Parcel', span: 'col-span-2' },
  { id: 2, src: '/images/gallery-2.jpg', caption: 'The Land Parcel — Baldeyan, HP', span: '' },
  { id: 3, src: '/images/gallery-3.png', caption: 'Surrounding Large-Scale Developments', span: '' },
  { id: 4, src: '/images/gallery-4.png', caption: 'Property Overview', span: 'col-span-2' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="section-label">Gallery</p>
          <h2 className="section-heading">
            See the <em className="italic">Land</em>
          </h2>
          <p className="font-sans text-charcoal/60 text-base leading-relaxed">
            A rare 11,993 sq.m. hill-side parcel in Baldeyan — ready for a landmark hospitality development.
          </p>
        </motion.div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mb-16">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative overflow-hidden group ${img.span}`}
              style={{ aspectRatio: img.id === 1 || img.id === 4 ? '16/7' : '4/3' }}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-sans text-sm">{img.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Video Section ──────────────────────────────────────────────────────
            Full informative property walkthrough video — centered, prominent
        ──────────────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <div className="text-center mb-8">
            <p className="section-label inline-block">Property Walkthrough</p>
            <h3 className="font-serif text-3xl md:text-4xl text-forest-dark mt-2">
              Watch the Full <em className="italic">Site Video</em>
            </h3>
            <p className="font-sans text-charcoal/60 text-sm mt-3">
              An on-ground walkthrough of the 11,993 sq.m. land parcel in Baldeyan, Himachal Pradesh
            </p>
          </div>

          {/* Centered video player */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl border border-earth">
              <video
                controls
                className="w-full aspect-video bg-forest-dark"
                poster="/images/gallery-2.jpg"
                preload="metadata"
              >
                <source src="/videos/property-tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Below-video context strip */}
          <div className="flex justify-center mt-6">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-sans text-charcoal/50">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Baldeyan, Himachal Pradesh
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                11,993 sq.m. Total Area
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Section 118 Approved
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
