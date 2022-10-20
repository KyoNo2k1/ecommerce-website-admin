import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { TRACSACTIONS } from "../constant/firestore";

// Listing array object category get from firestore of firebase
const showListTransactions = async () => {
  const querySnapshot = await getDocs(collection(db, TRACSACTIONS));
  const listTransactions = [];
  querySnapshot.forEach((doc) => {
    listTransactions.push(doc.data());
    listTransactions[listTransactions.length - 1].uid = doc.id;
  });
  return listTransactions;
};
export const showOneTransaction = async (id) => {
  const querySnapshot = await getDoc(doc(db, TRACSACTIONS, id));
  var transaction = querySnapshot.data();
  transaction.uid = querySnapshot.id;
  return transaction;
};

export default showListTransactions;
