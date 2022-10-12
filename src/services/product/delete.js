import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { PRODUCTS } from "../constant/firestore";

// Function delete one product from firestore
// Successful delete: return true,
// Fail delete: return false

const deleteOneProduct = (id) => {
  try {
    deleteDoc(doc(db, PRODUCTS, id));
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

export default deleteOneProduct;
