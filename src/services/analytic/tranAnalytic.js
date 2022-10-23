//number

//get count of transaction by date
export const amountTranByDate = ({ arrTransactions, date }) => {
  let amount = 0;
  arrTransactions.forEach((tran) => {
    if (tran.created_date.toDate().getDate() === date) {
      amount += 1;
    }
  });
  return amount;
};

//get count of transaction by hour
export const amountTranByHour = ({ arrTransactions, hour }) => {
  let amount = 0;
  arrTransactions.forEach((tran) => {
    if (tran.created_date.toDate().getHours() === hour) {
      amount += 1;
    }
  });
  return amount;
};

//total sales by date
export const totalTranByDate = ({ arrTransactions, date }) => {
  const total = arrTransactions
    .filter((tran) => tran.created_date.toDate().getDate() === date)
    .reduce((total, saleTrans) => total + saleTrans.total, 0);
  return total;
};

//total sales by hour
export const totalTranByHour = ({ arrTransactions, hour }) => {
  const total = arrTransactions
    .filter((tran) => tran.created_date.toDate().getHours() === hour)
    .reduce((total, saleTrans) => total + saleTrans.total, 0);
  return total;
};

//total sales all transaction
export const totalAllTran = ({ arrTransactions }) => {
  let totalAllTran = 0;
  arrTransactions.forEach((transaction) => {
    totalAllTran += transaction.total;
  });
  return totalAllTran;
};

//transactions status pending
export const pendingOrdersTran = ({ arrTransactions }) => {
  let countPendingOrders = 0;
  arrTransactions.forEach((transaction) => {
    if (transaction.status === "Waiting") countPendingOrders += 1;
  });
  return countPendingOrders;
};
//transactions status canceled
export const canceledOrdersTran = ({ arrTransactions }) => {
  let countPendingOrders = 0;
  arrTransactions.forEach((transaction) => {
    if (transaction.status === "Canceled") countPendingOrders += 1;
  });
  return countPendingOrders;
};
//total product count
export const totalProductCount = ({ arrTransactions }) => {
  let productCount = 0;
  arrTransactions.forEach((transaction) => {
    productCount += transaction?.products.length;
  });
  return productCount;
};

//count new users created
export const countUserToday = ({ arrUsers, date }) => {
  let countUser = 0;
  arrUsers.forEach((user) => {
    if (user.created_date.toDate().getDate() === date) countUser += 1;
  });
  return countUser;
};

//arr
//count transactions
export const arrCountTranByDate = ({ arrTransactions, date }) => {
  const newArr = new Array(date).fill(0);
  for (let i = 0; i < date; i++) {
    for (let j = 0; j < arrTransactions.length; j++) {
      if (arrTransactions[j]?.created_date?.toDate()?.getDate() - 1 === i) {
        newArr[i] += 1;
      }
    }
  }
  return newArr;
};

export const arrCountTranByHour = ({ arrTransactions, hour }) => {
  const newArr = new Array(hour).fill(0);
  console.log(arrTransactions[5].created_date.toDate().getHours());
  for (let i = 0; i < hour; i++) {
    for (let j = 0; j < arrTransactions.length; j++) {
      if (arrTransactions[j]?.created_date?.toDate()?.getHours() - 1 === i) {
        newArr[i] += 1;
      }
    }
  }
  return newArr;
};
export const arrCountTranByMonth = ({ arrTransactions, month }) => {
  const newArr = new Array(month).fill(0);
  console.log(month);
  for (let i = 0; i < month; i++) {
    for (let j = 0; j < arrTransactions.length; j++) {
      if (arrTransactions[j]?.created_date?.toDate()?.getMonth() === i) {
        newArr[i] += 1;
      }
    }
  }
  console.log(newArr);
  return newArr;
};
//arr Total transactions
export const arrTotalTranByDate = ({ arrTransactions, date }) => {
  const newArr = new Array(date).fill(0);
  for (let i = 0; i < date; i++) {
    for (let j = 0; j < arrTransactions.length; j++) {
      if (arrTransactions[j]?.created_date?.toDate()?.getDate() - 1 === i) {
        newArr[i] += arrTransactions[j].total;
      }
    }
  }
  return newArr;
};

export const arrTotalTranByHour = ({ arrTransactions, hour }) => {
  const newArr = new Array(hour).fill(0);
  for (let i = 0; i < hour; i++) {
    for (let j = 0; j < arrTransactions.length; j++) {
      if (arrTransactions[j]?.created_date?.toDate()?.getHours() - 1 === i) {
        newArr[i] += arrTransactions[j].total;
      }
    }
  }
  return newArr;
};
export const arrTotalTranByMonth = ({ arrTransactions, month }) => {
  const newArr = new Array(month).fill(0);
  for (let i = 0; i < month; i++) {
    for (let j = 0; j < arrTransactions.length; j++) {
      if (arrTransactions[j]?.created_date?.toDate()?.getMonth() === i) {
        newArr[i] += arrTransactions[j].total;
      }
    }
  }
  return newArr;
};

export const arrCusCreateByDate = ({ arrUsers, date }) => {
  const newArr = new Array(date).fill(0);
  for (let i = 0; i < date; i++) {
    for (let j = 0; j < arrUsers.length; j++) {
      if (arrUsers[j]?.created_date?.toDate()?.getDate() - 1 === i) {
        newArr[i] += 1;
      }
    }
  }
  return newArr;
};
export const arrCusCreateByHour = ({ arrUsers, hour }) => {
  const newArr = new Array(hour).fill(0);
  for (let i = 0; i < hour; i++) {
    for (let j = 0; j < arrUsers.length; j++) {
      if (arrUsers[j]?.created_date?.toDate()?.getHours() - 1 === i) {
        newArr[i] += 1;
      }
    }
  }
  return newArr;
};
export const arrCusCreateByMonth = ({ arrUsers, month }) => {
  const newArr = new Array(month).fill(0);
  for (let i = 0; i < month; i++) {
    for (let j = 0; j < arrUsers.length; j++) {
      if (arrUsers[j]?.created_date?.toDate()?.getMonth() === i) {
        newArr[i] += 1;
      }
    }
  }
  return newArr;
};
