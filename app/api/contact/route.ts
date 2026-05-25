import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, message } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 })
    }

    // ─── ⚠️ Wire up a notification method ────────────────────────────────────
    //
    // Option A — Resend (recommended, free tier 3k/mo):
    //   import { Resend } from 'resend'
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({
    //     from: 'leads@aetherheights.in',
    //     to: 'goyalsanyam908@gmail.com',
    //     subject: `New Lead: ${name}`,
    //     text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    //   })
    //
    // Option B — Nodemailer (Gmail SMTP):
    //   const nodemailer = require('nodemailer')
    //   ...
    //
    // Option C — Firebase Firestore:
    //   import { db } from '@/lib/firebase'
    //   await db.collection('leads').add({ name, phone, email, message, ts: Date.now() })
    //
    // Option D — Google Sheets API:
    //   Append row to a leads spreadsheet
    //
    // ─────────────────────────────────────────────────────────────────────────

    // Temp: log to server console (Vercel logs / local terminal)
    console.log('[Aether Heights Lead]', {
      name,
      phone,
      email: email || '—',
      message: message || '—',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API Error]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
