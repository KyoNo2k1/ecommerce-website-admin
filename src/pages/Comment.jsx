import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import productImage from "../images/productImage.png";
import { getComments } from "../redux/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "./../redux/productSlice/productSlice";

const Comment = () => {
  const dispatch = useDispatch();
  const { arrProducts, arrComments } = useSelector((store) => store.products);
  const listProductId = arrProducts.map((product) => product.uuid);
  useEffect(() => {
    dispatch(getComments(listProductId));
  }, []);
  const handleDeleteCmt = ({ idProduct, idComment }) => {
    dispatch(deleteComment({ idProduct: idProduct, idComment: idComment }));
  };

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
        {arrComments?.map((comment, index) => {
          const productById = arrProducts.find(
            (product) => product.uuid === comment.id
          );
          return (
            <tbody className="border-b-2" key={comment.id}>
              <tr>
                <td>{index + 1}</td>
                <td>{productById.name}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {comment?.comments?.map((commentData, index) => {
                return (
                  <tr key={commentData?.uid}>
                    {index === 0 && (
                      <td rowSpan={comment?.comments?.length} colSpan={2}>
                        <img
                          src={productById.arrImg[0]}
                          alt=""
                          width={240}
                          height={400}
                          className="mt-[-16px]"
                        ></img>
                      </td>
                    )}
                    <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                      {commentData?.user?.fullname}
                    </td>
                    <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                      {commentData?.content}
                    </td>
                    <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                      1
                    </td>
                    <td className="border-y-[1px] border-y-[rgb(82 82 82)]">
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          handleDeleteCmt({
                            idProduct: comment.id,
                            idComment: commentData?.uid,
                          })
                        }
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          );
        })}
      </table>
      {/* table end */}
    </div>
  );
};

export default Comment;
