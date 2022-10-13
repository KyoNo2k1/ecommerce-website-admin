import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { PRODUCTS } from "../constant/firestore";

// Function create new category
const createNewProduct = async (item) => {
  const docRef = await addDoc(collection(db, PRODUCTS), {
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
  return docRef.id;
};

export default createNewProduct;
