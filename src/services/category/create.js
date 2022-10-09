import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../firebase.config';
import { CATEGORIES } from '../constant/firestore'

// Function create new category
const createNewCategory = async (name) => {
  await addDoc(collection(db, CATEGORIES), {
    name,
    quantity: 0,
    create_date: serverTimestamp(),
    update_date: serverTimestamp()
  });
}

export default createNewCategory;
