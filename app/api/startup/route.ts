import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

export async function POST(request: Request) {
  let body: Record<string, string>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { fullName, email, countryCode, phone, companyName, fundingStage, roleTitle, linkedin, projectIdea } = body

  if (!fullName || !email || !phone || !companyName || !fundingStage || !roleTitle || !projectIdea) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;color:#17131f;max-width:600px;margin:0 auto;padding:24px;">
  <div style="background:linear-gradient(135deg,#7c3aed 0%,#5b21b6 100%);border-radius:10px;padding:20px 24px;margin-bottom:24px;">
    <h2 style="color:#fff;margin:0 0 4px;">New Sprint Plan Request</h2>
    <p style="color:rgba(220,210,255,0.80);margin:0;font-size:13px;">Submitted via artistec.tech/startup</p>
  </div>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    <tr style="border-bottom:1px solid #e5dff5;">
      <td style="padding:10px 8px;font-weight:600;color:#0f0a1e;width:36%;">Full Name</td>
      <td style="padding:10px 8px;color:#3d3552;">${escapeHtml(fullName)}</td>
    </tr>
    <tr style="border-bottom:1px solid #e5dff5;background:#faf9fd;">
      <td style="padding:10px 8px;font-weight:600;color:#0f0a1e;">Email</td>
      <td style="padding:10px 8px;color:#3d3552;">${escapeHtml(email)}</td>
    </tr>
    <tr style="border-bottom:1px solid #e5dff5;">
      <td style="padding:10px 8px;font-weight:600;color:#0f0a1e;">Phone</td>
      <td style="padding:10px 8px;color:#3d3552;">${escapeHtml(countryCode ?? '')} ${escapeHtml(phone)}</td>
    </tr>
    <tr style="border-bottom:1px solid #e5dff5;background:#faf9fd;">
      <td style="padding:10px 8px;font-weight:600;color:#0f0a1e;">Startup Name</td>
      <td style="padding:10px 8px;color:#3d3552;">${escapeHtml(companyName)}</td>
    </tr>
    <tr style="border-bottom:1px solid #e5dff5;">
      <td style="padding:10px 8px;font-weight:600;color:#0f0a1e;">Funding Stage</td>
      <td style="padding:10px 8px;">
        <span style="background:rgba(124,58,237,0.12);color:#7c3aed;border-radius:20px;padding:2px 10px;font-size:12px;font-weight:600;">${escapeHtml(fundingStage)}</span>
      </td>
    </tr>
    <tr style="border-bottom:1px solid #e5dff5;background:#faf9fd;">
      <td style="padding:10px 8px;font-weight:600;color:#0f0a1e;">Role</td>
      <td style="padding:10px 8px;color:#3d3552;">${escapeHtml(roleTitle)}</td>
    </tr>
    <tr style="border-bottom:1px solid #e5dff5;">
      <td style="padding:10px 8px;font-weight:600;color:#0f0a1e;">LinkedIn</td>
      <td style="padding:10px 8px;color:#3d3552;">${linkedin ? `<a href="https://${escapeHtml(linkedin.replace(/^https?:\/\//, ''))}" style="color:#7c3aed;">${escapeHtml(linkedin)}</a>` : '<em style="color:#9e97b0;">Not provided</em>'}</td>
    </tr>
    <tr style="background:#faf9fd;">
      <td style="padding:10px 8px;font-weight:600;color:#0f0a1e;vertical-align:top;">Project Idea</td>
      <td style="padding:10px 8px;color:#3d3552;white-space:pre-wrap;">${escapeHtml(projectIdea)}</td>
    </tr>
  </table>
  <p style="margin-top:24px;font-size:12px;color:#9e97b0;">Reply directly to this email to respond to ${escapeHtml(fullName)}.</p>
</body>
</html>
  `.trim()

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: 'info@artistic.global',
      subject: `Sprint Plan Request — ${escapeHtml(fullName)} · ${escapeHtml(companyName)} (${escapeHtml(fundingStage)})`,
      html,
      replyTo: email,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Startup mail error:', err)
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 })
  }
}
