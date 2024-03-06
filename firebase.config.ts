import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY_FIREBASE_,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN_,
  projectId: import.meta.env.VITE_APP_PROJECT_ID_,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET_,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID_,
  appId: import.meta.env.VITE_APP_ID_,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
