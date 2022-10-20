import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { USERS } from "../constant/firestore";

// Listing array object user get from firestore of firebase
const showListUsers = async () => {
  const querySnapshot = await getDocs(collection(db, USERS));
  const listUSERS = [];
  querySnapshot.forEach((doc) => {
    listUSERS.push(doc.data());
    listUSERS[listUSERS.length - 1].uuid = doc.id;
  });
  return listUSERS;
};

export const showOneUser = async (id) => {
  const querySnapshot = await getDoc(doc(db, USERS, id));
  var user = querySnapshot.data();
  user.uuid = querySnapshot.id;
  return user;
};

export default showListUsers;
