import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCwu-ea8Zvh9ypwcjmI9F1x1SRj1yfV7js',
  authDomain: 'ecommerce-lamamucha.firebaseapp.com',
  projectId: 'ecommerce-lamamucha',
  storageBucket: 'ecommerce-lamamucha.appspot.com',
  messagingSenderId: '1006914637775',
  appId: '1:1006914637775:web:713db16fc852f72d270cba'
}


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)