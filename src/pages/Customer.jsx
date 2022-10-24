import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEye } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../components/buttonIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getUsers,
  resetStatusUser,
  updateRealtimeUser,
} from "../redux/userSlice/userSlice";
import { timeConvert } from "../components/convertTime";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { onSnapshot } from "firebase/firestore";
import { USERS } from "../services/constant/firestore";
import { db } from "../services/firebase.config";
import { collection } from "firebase/firestore";

const Customer = () => {
  const dispatch = useDispatch();
  const { arrUsers, statusUpdateUser, statusDeleteUser } = useSelector(
    (store) => store.users
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUsers());
    const updateUsers = onSnapshot(collection(db, USERS), async (snap) => {
      const arrNew = [];
      await snap.forEach((data) => {
        arrNew.push(data.data());
        arrNew[arrNew.length - 1].uuid = data.id;
      });
      await dispatch(updateRealtimeUser(arrNew));
    });
    return updateUsers;
  }, []);

  useEffect(() => {
    if (statusUpdateUser === "success") toast("Update user success!");

    if (statusDeleteUser === "success") toast("Delete user success!");
    if (statusUpdateUser === "success" || statusDeleteUser === "success") {
      dispatch(resetStatusUser());
    }
  }, [statusUpdateUser, statusDeleteUser]);

  //show user information
  const handleShow = (customer) => {
    navigate(`/Customer/${customer.uuid}`, { state: customer });
  };
  //delete user
  const handleDelete = async (id) => {
    let text = "You want to delete this user?";
    if (window.confirm(text) === true) {
      await dispatch(deleteUser(id));
      navigate("/Customer");
    }
  };

  return (
    <div className="px-24 my-2">
      <table className="w-[100%]">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Start Time</th>
            <th></th>
          </tr>
          {arrUsers?.map((customer, index) => {
            return (
              <tr className="border-b-2" key={customer.uuid}>
                <td>{index}</td>
                <td>{customer?.fullname}</td>
                <td>{customer?.email}</td>
                <td>{customer?.addr_default}</td>
                <td>{customer?.created_date?.toDate().toDateString()}</td>
                <td className="border-none flex">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleShow(customer)}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div
                    className="ml-3 cursor-pointer"
                    onClick={() => handleDelete(customer.uuid)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/*<ButtonIcon position="bottom" />*/}
    </div>
  );
};

export default Customer;
