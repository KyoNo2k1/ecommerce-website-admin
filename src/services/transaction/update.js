import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { TRANSACTIONS } from "../constant/firestore";

// Function update status transactions
// data: Data transaction need to update
const updateStatusTransaction = async (data) => {
  try {
    const querySnapshot = doc(db, TRANSACTIONS, data.id);
    await updateDoc(querySnapshot, {
      status: data.status,
      updated_date: serverTimestamp(),
    });
    return data.status;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default updateStatusTransaction;
