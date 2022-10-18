import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import { USERS } from "../constant/firestore";

// Listing array object user get from firestore of firebase
const showListUsers = async () => {
  const querySnapshot = await getDocs(collection(db, USERS));
  const listUSERS = [];
  querySnapshot.forEach((doc) => {
    listUSERS.push(doc.data());
  });
  return listUSERS;
};

export default showListUsers;
