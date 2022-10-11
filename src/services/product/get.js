import { collection, getDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import { PRODUCTS } from "../constant/firestore";

// Listing array object category
const getOneProduct = async (uuid) => {
  const querySnapshot = await getDoc(doc(db, PRODUCTS, uuid));
  if (querySnapshot.exists()) {
    console.log("Document data:", querySnapshot.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  return querySnapshot.data();
};

export default getOneProduct;
