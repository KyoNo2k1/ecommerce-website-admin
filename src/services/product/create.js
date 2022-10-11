import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { PRODUCTS } from "../constant/firestore";

// Function create new category
const createNewProduct = async (item) => {
  try {
    await addDoc(collection(db, PRODUCTS), {
      category: `/categories/${item.categoryId}`,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      supplier: item.supplier,
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
