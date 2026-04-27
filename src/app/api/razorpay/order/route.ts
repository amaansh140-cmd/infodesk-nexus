import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

export async function POST(req: NextRequest) {
  try {
    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      return NextResponse.json({ error: 'Razorpay keys are not configured' }, { status: 500 });
    }

    const { amount, currency = 'INR' } = await req.json();

    const instance = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: Math.round(amount * 100),
      currency,
      receipt: `receipt_${Date.now()}`,
    };

    const order = await instance.orders.create(options);

    return NextResponse.json({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
      key: RAZORPAY_KEY_ID
    });

  } catch (error: any) {
    console.error('Order creation error:', error);
    // Extract meaningful error message from Razorpay SDK
    const errorMsg = error?.error?.description || error?.message || 'Payment server error';
    return NextResponse.json({ 
      error: errorMsg,
      code: error?.code || 'UNKNOWN_ERROR'
    }, { status: 500 });
  }
}
