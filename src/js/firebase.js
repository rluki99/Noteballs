import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCvYKeyZViZMA8F_MK73tXSjN6BC8i4Ffw',
	authDomain: 'noteballs-69f9d.firebaseapp.com',
	projectId: 'noteballs-69f9d',
	storageBucket: 'noteballs-69f9d.appspot.com',
	messagingSenderId: '116826402323',
	appId: '1:116826402323:web:650030d81f6d7cdef859e6',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app);

export { db, auth }
