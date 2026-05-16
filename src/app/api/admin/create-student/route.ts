import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';

export async function POST(req: NextRequest) {
  try {
    const { email, phone, displayName } = await req.json();

    if (!email || !phone) {
      return NextResponse.json({ error: 'Email and phone are required' }, { status: 400 });
    }

    // 1. Check if user already exists in Auth
    let userRecord;
    try {
      userRecord = await adminAuth.getUserByEmail(email);
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        // 2. Create the user in Firebase Auth
        userRecord = await adminAuth.createUser({
          email: email,
          password: phone, // Phone number as password
          displayName: displayName || email.split('@')[0],
        });
      } else {
        throw error;
      }
    }

    // 3. Set custom claims (optional but good for isAdmin check in frontend if needed)
    await adminAuth.setCustomUserClaims(userRecord.uid, { role: 'student' });

    // 4. Ensure the Firestore document exists with the correct role
    const userDocRef = adminDb.collection('users').doc(userRecord.uid);
    await userDocRef.set({
      uid: userRecord.uid,
      email: email,
      phone: phone,
      displayName: displayName || email.split('@')[0],
      role: 'student',
      createdAt: new Date().toISOString(),
    }, { merge: true });

    return NextResponse.json({ 
      success: true, 
      uid: userRecord.uid,
      message: 'Student account created/synced successfully' 
    });

  } catch (error: any) {
    console.error('Error creating student account:', error);
    return NextResponse.json({ 
      error: error.message || 'Internal server error' 
    }, { status: 500 });
  }
}
