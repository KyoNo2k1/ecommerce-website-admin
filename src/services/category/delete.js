import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase.config';
import { CATEGORIES } from '../constant/firestore';

// Function delete one category
// Successful delete: return true,
// Fail delete: return false

const deleteOneCategory = async (oldCategory) => {
    const currentCategoryRef = doc(db, CATEGORIES, oldCategory.uuid);
    const currentCategorySnap = await getDoc(currentCategoryRef);

    if(currentCategorySnap.exists()) {
        // The number of product in the category
        const quantityOfCategory = currentCategorySnap.data().quantity;

        // If the number of products in the category is still there, it is not allowed to delete
        if(quantityOfCategory > 0)  return false;
    }

    await deleteDoc(doc(db, CATEGORIES, oldCategory.uuid));
    return true;
}

export default deleteOneCategory;