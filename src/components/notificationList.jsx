import React from "react";
import NotificationItem from "../components/notificationItem";
import { useSelector } from "react-redux";

const List = [
  {
    type: "order",
    key: "1",
    id: "203",
    value: "waiting",
    content: "met moi",
  },
  {
    type: "stock",
    key: "2",
    id: "204",
    value: "long",
    content: "met moi",
  },
  {
    type: "order",
    key: "3",
    id: "203",
    value: "completed",
    content: "met moi",
  },
];

const NotificationList = () => {
  const { arrTransactions } = useSelector((store) => store.transactions);
  const transPending = arrTransactions.filter(
    (data) => data.status === "Waiting"
  );
  return (
    <ul className="max-h-[400px] overflow-auto">
      {transPending?.map((item) => {
        return (
          <NotificationItem
            type="order"
            id={item.uid}
            value="waiting"
            content={item.contact}
            key={item.uid}
            created_date={item?.created_date?.toDate()?.toDateString()}
          />
        );
      })}
    </ul>
  );
};

export default NotificationList;
