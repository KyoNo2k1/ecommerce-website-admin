import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { CATEGORIES } from "../constant/firestore";

// Function create new category
const createNewCategory = (name) => {
  try {
    addDoc(collection(db, CATEGORIES), {
      name,
      quantity: 0,
      create_date: serverTimestamp(),
      update_date: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

export default createNewCategory;
