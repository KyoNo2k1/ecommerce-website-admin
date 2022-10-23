import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { PRODUCTS } from "../constant/firestore";

// Function create new Comment
const createOneComment = async ({ idProduct, data }) => {
  const commentRef = await addDoc(
    collection(db, PRODUCTS, idProduct, "comments"),
    {
      content: data.content,
      user: data.user,
      create_date: serverTimestamp(),
    }
  );
  return commentRef.id;
};

export default createOneComment;
