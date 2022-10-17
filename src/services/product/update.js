import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { PRODUCTS } from "../constant/firestore";

// Function update product information for firestore
// item: Data product need to update
const updateOneProduct = async (item) => {
  try {
    const productItem = doc(db, PRODUCTS, item.uuid);
    await updateDoc(productItem, {
      name: item.name,
      quantity: item.quantity,
      category: item.category,
      description: item.description,
      dimension: item.dimension,
      price: item.price,
      remain: item.remain,
      arrImg: item.arrImg,
      create_date: item.create_date,
      update_date: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

export const updateImgUrl = async (item) => {
  const productItem = doc(db, PRODUCTS, item.uuid);
  await updateDoc(productItem, {
    arrImg: item.arrImg,
  });
};

export default updateOneProduct;
