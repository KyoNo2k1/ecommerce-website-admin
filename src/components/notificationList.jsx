import React from "react";
import NotificationItem from "../components/notificationItem";

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

function NotificationList() {
  return (
    <ul className="">
      {List?.map((item) => {
        return (
          <NotificationItem
            type={item.type}
            id={item.id}
            value={item.value}
            content={item.content}
            key={item.key}
          />
        );
      })}
    </ul>
  );
}

export default NotificationList;
