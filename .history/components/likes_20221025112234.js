import { db, auth } from './config/firebase';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'