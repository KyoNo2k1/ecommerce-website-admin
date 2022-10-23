import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import productImage from "../images/productImage.png";
import showListComments from "./../services/comment/show";
import createNewComment from "./../services/comment/create";
import deleteOneComment from "./../services/comment/delete";

const Comment = () => {
  deleteOneComment({
    idProduct: "0fhwc9FDjka1E4uBacOW",
    idComment: "yRyrRD6I5SnHZBRMvnLN",
  });
  const comments = [
    {
      id: 1,
      productName: "Chair",
      customer: "abcd@gm.uit.edu.vn",
      content: "Very ugly, loremmmmmmmmmmmmmmmmmmmm",
      postDate: "02-02-2022",
    },
    {
      id: 2,
      productName: "Chair",
      customer: "abcd@gm.uit.edu.vn",
      content: "Very ugly, loremmmmmmmmmmmmmmmmmmmm",
      postDate: "02-02-2022",
    },
  ];

  return (
    <div className="px-24 my-2">
      <div className="flex justify-end">
        {/* Start search by name */}
        <div className="mr-3 flex flex-col">
          <label className="text-h6 mr-2">Search by name</label>
          <input
            className="w-[100%] h-[44px] border-primary border-2 px-4"
            placeholder="All"
          />
        </div>
        {/* End search by name */}

        {/* Start search by customer */}
        <div className="mr-3 flex flex-col">
          <label className="text-h6 mr-2">Search by customer</label>
          <input
            className="w-[100%] h-[44px] border-primary border-2 px-4"
            placeholder="All"
          />
        </div>
        {/* End search by customer */}

        {/* Start search by time */}
        <div className="mr-3 flex flex-col">
          <label className="text-h6 mr-2">Time</label>
          <select className="w-[150px] h-[44px] border-primary border-2 px-4">
            <option value="" disabled hidden>
              Select your option
            </option>
          </select>
        </div>
        {/* End search by time */}
      </div>

      {/* table start */}
      <table className="w-[100%]">
        <thead>
          <tr>
            <th>STT</th>
            <th>Product name</th>
            <th>Customer</th>
            <th>Content</th>
            <th>Post Date</th>
            <th></th>
          </tr>
        </thead>
        {comments?.map((comment) => (
          <tbody className="border-b-2" key={comment.id}>
            <tr>
              <td>{comment.id}</td>
              <td>{comment.productName}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan={3} colSpan={2}>
                <img src={productImage} alt="" className="mt-[-16px]"></img>
              </td>
              <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                {comment.customer}
              </td>
              <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                {comment.content}
              </td>
              <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                {comment.postDate}
              </td>
              <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                <FontAwesomeIcon icon={faTrashCan} />
              </td>
            </tr>
            <tr>
              <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                {comment.customer}
              </td>
              <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                {comment.content}
              </td>
              <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                {comment.postDate}
              </td>
              <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                <FontAwesomeIcon icon={faTrashCan} />
              </td>
            </tr>
            <tr>
              <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                {comment.customer}
              </td>
              <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                {comment.content}
              </td>
              <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                {comment.postDate}
              </td>
              <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                <FontAwesomeIcon icon={faTrashCan} />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      {/* table end */}
    </div>
  );
};

export default Comment;
