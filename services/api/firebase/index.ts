import { initializeApp } from "firebase/app"
import { initializeFirestore } from "firebase/firestore"
import { } from "firebase/storage"
import * as dotenv from "dotenv"

dotenv.config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MENSAGING_SENDER_ID,
  appId: process.env.APP_ID
}

const app = initializeApp(firebaseConfig)
const firestore = initializeFirestore(app, {})

export { app, firestore }
