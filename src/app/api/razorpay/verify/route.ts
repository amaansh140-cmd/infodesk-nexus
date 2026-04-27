import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

export async function POST(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    if (!RAZORPAY_KEY_SECRET) {
      return NextResponse.json({ error: 'Secret not configured' }, { status: 500 });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      return NextResponse.json({ success: true });
    } else {
      console.error('Signature mismatch during verification');
      return NextResponse.json({ success: false, error: 'Signature verification failed' }, { status: 400 });
    }

  } catch (error: any) {
    console.error('Verification error:', error);
    return NextResponse.json({ error: 'Internal verification error' }, { status: 500 });
  }
}
