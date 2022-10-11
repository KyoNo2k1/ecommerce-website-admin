import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { CATEGORIES } from "../constant/firestore";

// Function update product information for firestore
// item: Data product need to update
const updateOneProduct = async (item) => {
  const productItem = doc(db, CATEGORIES, item.uuid);

  await updateDoc(productItem, {
    name: item.name,
    quantity: item.quantity,
    create_date: item.create_date,
    update_date: serverTimestamp(),
  });
};

export default updateOneProduct;
