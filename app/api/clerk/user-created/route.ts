// app/api/clerk/user-created/route.ts
import { NextResponse } from 'next/server'
import { Webhook } from 'svix'  
import { syncUser } from '@/lib/syncUser'

export async function POST(req: Request) {
  const payload = await req.text() // must read raw body as text
  const headers = Object.fromEntries(req.headers.entries())

  try {
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!)
    const evt = wh.verify(payload, headers)

    // At this point, the webhook is verified ✅
    const clerkUser = (evt as any).data

    const result = await syncUser(clerkUser)

    if ('error' in result) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }

    return NextResponse.json({ message: 'User synced successfully' })
  } catch (err) {
    console.error('Webhook verification failed:', err)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}
