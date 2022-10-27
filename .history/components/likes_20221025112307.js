import { db, auth } from './config/firebase';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'

export const getLikes = (slug, callBackFunction) => {
  firestore
    .collection('likes')
    .doc(slug)
    .get()
    .then((doc) => {
      if (doc.exists) {
        callBackFunction(Object.keys(doc.data()).length)
      }
    })
    .catch((err) => {
      console.error(err)
    })
}