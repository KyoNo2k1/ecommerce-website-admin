//dashboard
export const arrUserTranByHour = ({ arrUsers }) => {
  const hour = new Date().getHours();

  const arrCount = new Array(hour).fill(0);
  const newArrValidDate = arrUsers.filter(
    (user) => user?.created_date?.toDate()?.getDate() === new Date().getDate()
  );

  for (let i = 0; i < hour; i++) {
    for (let j = 0; j < newArrValidDate.length; j++) {
      if (newArrValidDate[j]?.created_date?.toDate()?.getHours() - 1 === i) {
        arrCount[i] += 1;
      }
    }
  }
  return arrCount;
};

//report
export const arrCusCreateByDate = ({ arrUsers, date }) => {
  const newArr = new Array(date[2]).fill(0);
  for (let i = 0; i < date[2]; i++) {
    for (let j = 0; j < arrUsers.length; j++) {
      if (
        arrUsers[j]?.created_date?.toDate()?.getMonth() + 1 === date[1] &&
        arrUsers[j]?.created_date?.toDate().getFullYear() === date[0]
      )
        if (arrUsers[j]?.created_date?.toDate()?.getDate() - 1 === i) {
          newArr[i] += 1;
        }
    }
  }
  return newArr;
};

export const arrCusCreateByMonth = ({ arrUsers, month }) => {
  const newArr = new Array(month[1]).fill(0);
  for (let i = 0; i < month[1]; i++) {
    for (let j = 0; j < arrUsers.length; j++) {
      if (arrUsers[j]?.created_date?.toDate()?.getFullYear() === month[0])
        if (arrUsers[j]?.created_date?.toDate()?.getMonth() === i) {
          newArr[i] += 1;
        }
    }
  }
  return newArr;
};

//count new users created
export const countUserToday = ({ arrUsers, date }) => {
  let countUser = 0;
  arrUsers.forEach((user) => {
    if (user?.created_date?.toDate()?.getDate() === date) countUser += 1;
  });
  return countUser;
};

//onchange date
export const arrCusByDateTimeline = ({ arrUsers, from, to }) => {
  var arrUserByDate = [];

  const newArrValidDate = arrUsers.filter(
    (user) =>
      user.created_date.toDate() > from && user.created_date.toDate() < to
  );

  for (let d = from; d <= to; d.setDate(d.getDate() + 1)) {
    var count = 0;
    for (let i = 0; i < newArrValidDate.length; i++) {
      if (
        d.toISOString().split("T")[0] ===
        newArrValidDate[i].created_date.toDate().toISOString().split("T")[0]
      ) {
        count++;
      }
    }
    arrUserByDate.push(count);
  }
  return arrUserByDate;
};
