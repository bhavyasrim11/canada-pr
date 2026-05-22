import { Redis } from '@upstash/redis'
import { NextResponse } from 'next/server'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export async function POST(req: Request) {
  try {
    const { email, phone } = await req.json();
    const cleanMail = `vjc_spin:${email.toLowerCase().trim()}`;
    const cleanPhone = `vjc_spin:${phone.replace(/\D/g, "")}`;

    // Checks both email and phone at once
    const [existsMail, existsPhone] = await redis.mget<string[]>(cleanMail, cleanPhone);

    if (existsMail || existsPhone) {
      return NextResponse.json({ exists: true });
    }
    
    return NextResponse.json({ exists: false });
  } catch (e) {
    console.error('Redis check error:', e);
    return NextResponse.json({ exists: false });
  }
}
