import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { PRODUCTS } from "../constant/firestore";

// Function create new category
const createNewProduct = (item) => {
  console.log(item);
  try {
    addDoc(collection(db, PRODUCTS), {
      category: item.category,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      remain: item.remain,
      dimension: item.dimension,
      description: item.description,
      create_date: serverTimestamp(),
      update_date: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

export default createNewProduct;
