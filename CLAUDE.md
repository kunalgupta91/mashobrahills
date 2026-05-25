# Aether Heights — Project Guide

Premium land investment website for a hospitality-grade property near Mashobra, Himachal Pradesh.

---

## Project Identity

| Field | Value |
|---|---|
| Brand Name | Aether Heights |
| Property | 11,993 sq.m. land parcel, Baldeyan, HP |
| Contact | Sanyam Goyal · +91-8278860715 · goyalsanyam908@gmail.com |
| Asking Price | ₹40 Crore (negotiable) |
| Legal Status | Section 118 Approved |
| Target Domain | ⚠️ Set your actual domain in app/layout.tsx → metadata.metadataBase |

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion v11 |
| Icons | Lucide React |
| Deployment | Vercel (recommended) |

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `forest` | `#1a4731` | Primary green |
| `forest-dark` | `#0f2d1f` | Dark sections, navbar |
| `forest-light` | `#2d6a4f` | Hover states |
| `gold` | `#b7802a` | Accent, CTAs |
| `gold-light` | `#d4a853` | Hover on gold |
| `cream` | `#faf9f6` | Page background |
| `earth` | `#e8e0d4` | Alternate sections |
| `charcoal` | `#1c1c1c` | Body text |

---

## File Structure

```
app/
  layout.tsx        — Root layout, fonts, metadata, WhatsApp float
  page.tsx          — Assembles all sections in order
  globals.css       — Tailwind base + custom component classes
  api/contact/
    route.ts        — Lead capture POST endpoint

components/
  Navbar.tsx        — Sticky nav, transparent → solid on scroll, mobile overlay
  Hero.tsx          — Full-viewport hero, video BG placeholder, two CTAs
  About.tsx         — 4 highlight cards + neighbouring properties strip
  Location.tsx      — Google Maps placeholder + distance cards + landmarks list
  DevelopmentStatus.tsx — 4 milestone cards + CTA strip
  Investment.tsx    — 4-pillar investment case (dark section)
  Gallery.tsx       — 9-image grid + video modal
  Legal.tsx         — 4 trust cards + Section 118 explainer
  Proposal.tsx      — Sale vs JV side-by-side comparison
  Contact.tsx       — Contact info + lead capture form
  Footer.tsx        — Brand, quick links, contact
  WhatsAppFloat.tsx — Floating WhatsApp button (appears after 2.5s)

public/
  images/           — ⚠️ Drop property images here (gallery-1.jpg … gallery-9.jpg)
  videos/           — ⚠️ Drop drone footage here (aerial-tour.mp4)
  brochure.pdf      — ⚠️ Drop brochure PDF here
```

---

## ⚠️ Flagged Items (must replace before launch)

### Media
- `public/images/gallery-1.jpg` … `gallery-9.jpg` — 9 property photos
- `public/videos/aerial-tour.mp4` — Drone/aerial footage
- `public/brochure.pdf` — Downloadable brochure PDF

### Code replacements
| File | Line hint | What to do |
|---|---|---|
| `components/Hero.tsx` | `{/* ⚠️ REPLACE */}` | Add `<video>` tag with drone footage |
| `components/Gallery.tsx` | `{/* ⚠️ Replace */}` | Add `<Image>` tags with real photos |
| `components/Gallery.tsx` | video modal | Add `<video>` with aerial-tour.mp4 |
| `components/Location.tsx` | `{/* ⚠️ Replace */}` | Add Google Maps `<iframe>` embed |
| `app/api/contact/route.ts` | Options A–D | Wire up email/DB notification |
| `app/layout.tsx` | `metadataBase` | Set to your actual domain |

### Analytics (add to app/layout.tsx `<head>`)
- GA4: `<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX" />`
- Meta Pixel: paste pixel base code

---

## Running Locally

```bash
cd D:\coding_with_ai\mashobrahills
npm install
npm run dev
# → http://localhost:3000
```

## Building for Production

```bash
npm run build
npm run start
```

## Deploying to Vercel

```bash
npm install -g vercel
vercel
# Follow prompts → auto-detects Next.js
```

Or push to GitHub and connect the repo at vercel.com/new.

---

## Lead Capture Options

The `/api/contact` route currently logs leads to the console (visible in Vercel logs).
To send real email notifications, see the comments in `app/api/contact/route.ts`:

- **Resend** (recommended) — free 3,000 emails/month
- **Nodemailer** — Gmail SMTP
- **Firebase Firestore** — store leads in a database
- **Google Sheets API** — append rows to a spreadsheet
