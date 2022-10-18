import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../components/buttonIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getUsers,
  resetStatusUser,
} from "../redux/userSlice/userSlice";
import { timeConvert } from "../components/convertTime";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Customer = () => {
  const dispatch = useDispatch();
  const { arrUsers, statusUpdateUser, statusDeleteUser } = useSelector(
    (store) => store.users
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (statusUpdateUser === "success") toast("Update user success!");

    if (statusDeleteUser === "success") toast("Delete user success!");
    if (statusUpdateUser === "success" || statusDeleteUser === "success") {
      dispatch(resetStatusUser());
    }
  }, [statusUpdateUser, statusDeleteUser]);

  //update user
  const handleUpdate = (customer) => {
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
            var timeCreate = timeConvert(customer?.create_date?.seconds);

            return (
              <tr className="border-b-2" key={customer.uuid}>
                <td>{index}</td>
                <td>{customer.fullName}</td>
                <td>{customer.email}</td>
                <td>{customer.addr_default}</td>
                <td>{timeCreate}</td>
                <td className="border-none flex">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleUpdate(customer)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
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
      <ButtonIcon position="bottom" />
    </div>
  );
};

export default Customer;
