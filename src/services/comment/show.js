import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import { PRODUCTS } from "../constant/firestore";

const getCommentById = async (idProduct) => {
  const commentSnap = await getDocs(
    collection(db, PRODUCTS, idProduct, "comments")
  );

  const listComments = [];
  commentSnap.forEach((doc) => {
    listComments.push(doc.data());
    listComments[listComments.length - 1].uid = doc.id;
  });
  return listComments;
};

export const getListComments = async (arrIdProduct) => {
  var arrComments = [];

  for (var i = 0; i < arrIdProduct.length; i++) {
    var arrComment = await getCommentById(arrIdProduct[i]);

    if (arrComment.length)
      arrComments.push({
        id: arrIdProduct[i],
        comments: arrComment,
      });
  }
  return arrComments;
};

export default getCommentById;
