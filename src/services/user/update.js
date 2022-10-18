import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { USERS } from "../constant/firestore";

// Function update user information for firestore
// item: Data user need to update
const updateOneUser = async (item) => {
  try {
    const userItem = doc(db, USERS, item.uuid);
    await updateDoc(userItem, {
      fullName: item.fullName,
      email: item.email,
      type: item.type,
      addr_default: item.addr_default,
      create_date: item.create_date,
      uuid: item.uuid,
      update_date: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

export default updateOneUser;
