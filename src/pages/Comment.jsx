import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Comment = () => {
  const comments = [
    {
      id: 1,
      productID: "Nguyen Van A",
      customer: "abcd@gm.uit.edu.vn",
      content: "Very ugly, loremmmmmmmmmmmmmmmmmmmm",
      postDate: "02-02-2022",
    },
    {
      id: 2,
      productID: "Nguyen Van A",
      customer: "abcd@gm.uit.edu.vn",
      content: "Very ugly, loremmmmmmmmmmmmmmmmmmmm",
      postDate: "02-02-2022",
    },
  ];

  return (
    <div className="px-24 my-2">
      <table className="w-[100%]">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Product ID</th>
            <th>Customer</th>
            <th>Content</th>
            <th>Post Date</th>
            <th></th>
          </tr>
          {comments?.map((comment) => (
            <tr className="border-b-2" key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.productID}</td>
              <td>{comment.customer}</td>
              <td className="text-ellipsis overflow-hidden ...">
                {comment.content}
              </td>
              <td>{comment.postDate}</td>
              <td className="border-none">
                <FontAwesomeIcon icon={faTrashCan} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comment;
