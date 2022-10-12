import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { CATEGORIES } from "../constant/firestore";

// Hàm update một danh mục
// @params
// oldCategory: Pass Old Catetory Object
// name: New name
const updateOneCategory = async (data) => {
  const categoryItem = doc(db, CATEGORIES, data.id);

  await updateDoc(categoryItem, {
    name: data.name,
    update_date: serverTimestamp(),
  });
};

export default updateOneCategory;
