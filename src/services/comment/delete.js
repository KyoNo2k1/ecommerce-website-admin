import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { PRODUCTS } from "../constant/firestore";

const deleteOneComment = ({ idProduct, idComment }) => {
  try {
    deleteDoc(doc(db, PRODUCTS, idProduct, "comments", idComment));
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

export default deleteOneComment;
