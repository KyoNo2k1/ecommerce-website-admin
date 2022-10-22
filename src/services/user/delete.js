import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { USERS } from "../constant/firestore";

// Function delete one user from firestore
// Successful delete: return true,
// Fail delete: return false

const deleteOneUser = (id) => {
  try {
    deleteDoc(doc(db, USERS, id));
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

export default deleteOneUser;
