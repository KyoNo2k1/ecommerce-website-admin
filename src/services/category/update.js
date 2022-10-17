import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { CATEGORIES } from "../constant/firestore";

// Hàm update một danh mục
// @params
// oldCategory: Pass Old Catetory Object
// name: New name
const updateOneCategory = async (data) => {
  try {
    const categoryItem = await doc(db, CATEGORIES, data.id);

    await updateDoc(categoryItem, {
      name: data.name,
      update_date: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

export default updateOneCategory;
