import * as admin from 'firebase-admin';

let isInitialized = false;

function ensureAdmin() {
  if (!isInitialized && !admin.apps.length) {
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;
    if (privateKey) {
      try {
        admin.initializeApp({
          credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: privateKey.replace(/\\n/g, '\n'),
          }),
        });
        isInitialized = true;
      } catch (error) {
        console.error('Firebase admin initialization error', error);
      }
    } else {
      console.warn('Firebase private key is missing from environment variables.');
    }
  }
}

// Proxies for dynamic, lazy access to avoid build-time initialization errors
export const adminAuth = new Proxy({} as admin.auth.Auth, {
  get(target, prop) {
    ensureAdmin();
    const authInstance = admin.auth();
    const value = Reflect.get(authInstance, prop);
    if (typeof value === 'function') {
      return value.bind(authInstance);
    }
    return value;
  }
});

export const adminDb = new Proxy({} as admin.firestore.Firestore, {
  get(target, prop) {
    ensureAdmin();
    const dbInstance = admin.firestore();
    const value = Reflect.get(dbInstance, prop);
    if (typeof value === 'function') {
      return value.bind(dbInstance);
    }
    return value;
  }
});

export const adminStorage = new Proxy({} as admin.storage.Storage, {
  get(target, prop) {
    ensureAdmin();
    const storageInstance = admin.storage();
    const value = Reflect.get(storageInstance, prop);
    if (typeof value === 'function') {
      return value.bind(storageInstance);
    }
    return value;
  }
});
