import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LabelInput from "../components/labelInput";
import { deleteUser, showUser } from "../redux/userSlice/userSlice";
import Button from "./../components/button";
import { timeConvert } from "./../components/convertTime";

const RUDCustomer = () => {
  const { statusUpdateUser, userData } = useSelector((store) => store.users);
  const { Id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [inputValueUser, setInputValueUser] = useState({
    fullname: "",
    email: "",
    type: "",
    avatar: "",
    created_date: "",
    updated_date: "",
    addr_default: "",
    uuid: "",
    img: "",
    gender: "",
    dob: "",
    phone: "",
  });

  useEffect(() => {
    if (location.state) {
      setInputValueUser(location.state);
    } else {
      dispatch(showUser(Id));
    }
  }, [location.state]);

  useEffect(() => {
    if (!!userData.uuid) {
      setInputValueUser(userData);
    }
  }, [userData]);

  useEffect(() => {
    if (statusUpdateUser) navigate("/Customer");
  }, [statusUpdateUser]);

  //handle delete user
  const handleDelete = async () => {
    const id = inputValueUser.uuid;
    let text = "You want to delete this user?";
    if (window.confirm(text) === true) {
      console.log(id);
      await dispatch(deleteUser(id));
      navigate("/Customer");
    }
  };

  return (
    <div className="w-[100%] flex">
      <img
        className="w-[20%] h-[300px] m-5"
        src={
          inputValueUser.avatar ||
          "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
        }
        alt="User Avatar"
      />
      <div className="w-[60%] mx-auto flex justify-between">
        {/*Col middle : Product name, category, dimension description*/}
        <div className="w-[100%] flex justify-between">
          <div className="w-[54%]">
            <LabelInput
              name={"User name"}
              value={inputValueUser?.fullname}
              inputValue={inputValueUser}
              readOnly={true}
              setInputValue={setInputValueUser}
            />
            {/*Email input*/}
            <LabelInput
              name={"Email"}
              value={inputValueUser?.email}
              inputValue={inputValueUser}
              readOnly={true}
              setInputValue={setInputValueUser}
            />
            <LabelInput
              name={"Address"}
              value={inputValueUser?.addr_default}
              inputValue={inputValueUser}
              readOnly={true}
              setInputValue={setInputValueUser}
            />
          </div>
          {/*Col right : Price quantity remain Time */}
          <div className="flex flex-col w-[35%] h-[505px]">
            <div className="flex-1">
              <LabelInput
                name={"Create Date"}
                value={
                  inputValueUser.uuid
                    ? inputValueUser?.created_date?.toDate()?.toDateString()
                    : ""
                }
                inputValue={inputValueUser}
                setInputValue={setInputValueUser}
                readOnly={true}
              />
            </div>
            {/*Group button */}
            <div className="flex-col">
              <div className="flex justify-between mt-2">
                <div className="w-[48%]" onClick={() => navigate(-1)}>
                  <Button Color="secondary" width="w-[100%]">
                    Back
                  </Button>
                </div>
                <div className="w-[48%]" onClick={() => handleDelete()}>
                  <Button
                    Color="secondary"
                    width="w-[100%]"
                    textColor="text-[red]"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RUDCustomer;
