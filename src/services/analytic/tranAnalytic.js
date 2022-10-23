//report
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

//total sales by date
export const totalTranByDate = ({ arrTransactions, date }) => {
  const total = arrTransactions
    .filter((tran) => tran.created_date.toDate().getDate() === date)
    .reduce((total, saleTrans) => total + saleTrans.total, 0);
  return total;
};

//total sales all transaction
export const totalAllTran = ({ arrTransactions }) => {
  let totalAllTran = 0;
  arrTransactions.forEach((transaction) => {
    if (transaction.status !== "Canceled") totalAllTran += transaction.total;
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

//arr

//dashboard
export const arrCountTranByHour = ({ arrTransactions }) => {
  const hour = new Date().getHours();

  const arrCount = new Array(hour).fill(0);
  const newArrValidDate = arrTransactions.filter(
    (transaction) =>
      transaction.created_date.toDate().getDate() === new Date().getDate()
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
export const arrCountTranByCate = ({ arrProducts, arrCate }) => {
  let arrCountByCate = new Array(arrCate.length).fill(0);
  for (let i = 0; i < arrCate?.length; i++) {
    for (let j = 0; j < arrProducts?.length; j++) {
      if (arrProducts[j]?.category === arrCate[i]) {
        arrCountByCate[i] += 1;
      }
    }
  }
  return arrCountByCate;
};
export const arrSalesTranByCate = ({ arrProducts, arrCate }) => {
  let arrSalesByCate = new Array(arrCate.length).fill(0);
  for (let i = 0; i < arrCate?.length; i++) {
    for (let j = 0; j < arrProducts?.length; j++) {
      if (arrProducts[j]?.category === arrCate[i]) {
        arrSalesByCate[i] += arrProducts[j].price;
      }
    }
  }
  return arrSalesByCate;
};

//report
export const arrTotalTranByHour = ({ arrTransactions }) => {
  const hour = new Date().getHours();

  const arrTotal = new Array(hour).fill(0);
  const newArrValidDate = arrTransactions.filter(
    (transaction) =>
      transaction.created_date.toDate().getDate() === new Date().getDate()
  );

  for (let i = 0; i < hour; i++) {
    for (let j = 0; j < newArrValidDate.length; j++) {
      if (newArrValidDate[j]?.created_date?.toDate()?.getHours() - 1 === i) {
        arrTotal[i] += newArrValidDate[j]?.total;
      }
    }
  }
  return arrTotal;
};

//report
//count transactions
export const arrCountTranByDate = ({ arrTransactions, date }) => {
  const newArr = new Array(date[2]).fill(0);

  for (let i = 0; i < date[2]; i++) {
    for (let j = 0; j < arrTransactions.length; j++) {
      if (
        arrTransactions[j]?.created_date?.toDate()?.getMonth() + 1 ===
          date[1] &&
        arrTransactions[j]?.created_date?.toDate()?.getFullYear() === date[0]
      )
        if (arrTransactions[j]?.created_date?.toDate()?.getDate() - 1 === i) {
          newArr[i] += 1;
        }
    }
  }
  return newArr;
};
export const arrCountTranByMonth = ({ arrTransactions, month }) => {
  const newArr = new Array(month[1]).fill(0);
  for (let i = 0; i < month[1]; i++) {
    for (let j = 0; j < arrTransactions.length; j++) {
      if (
        arrTransactions[j]?.created_date?.toDate()?.getFullYear() === month[0]
      )
        if (arrTransactions[j]?.created_date?.toDate()?.getMonth() === i) {
          newArr[i] += 1;
        }
    }
  }
  return newArr;
};
//arr Total transactions
export const arrTotalTranByDate = ({ arrTransactions, date }) => {
  const newArr = new Array(date[2]).fill(0);
  for (let i = 0; i < date[2]; i++) {
    for (let j = 0; j < arrTransactions.length; j++) {
      if (
        arrTransactions[j]?.created_date?.toDate()?.getMonth() + 1 ===
          date[1] &&
        arrTransactions[j]?.created_date?.toDate().getFullYear() === date[0]
      )
        if (arrTransactions[j]?.created_date?.toDate()?.getDate() - 1 === i) {
          newArr[i] += arrTransactions[j].total;
        }
    }
  }
  return newArr;
};
export const arrTotalTranByMonth = ({ arrTransactions, month }) => {
  const newArr = new Array(month[1]).fill(0);
  for (let i = 0; i < month[1]; i++) {
    for (let j = 0; j < arrTransactions.length; j++) {
      if (
        arrTransactions[j]?.created_date?.toDate()?.getFullYear() === month[0]
      )
        if (arrTransactions[j]?.created_date?.toDate()?.getMonth() === i) {
          newArr[i] += arrTransactions[j].total;
        }
    }
  }
  return newArr;
};

//By date onchange
export const arrLabelFromTo = ({ from, to }) => {
  let arrLabels = [];
  for (let d = from; d <= to; d.setDate(d.getDate() + 1)) {
    arrLabels.push(d.getDate());
  }
  return arrLabels;
};
export const arrCountTranByDateTimeline = ({ arrTransactions, from, to }) => {
  if (from > to) {
    alert("From need lower To");
    return;
  }

  var arrCountByDate = [];

  const newArrValidDate = arrTransactions.filter(
    (transaction) =>
      transaction.created_date.toDate() > from &&
      transaction.created_date.toDate() < to
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
    arrCountByDate.push(count);
  }
  return arrCountByDate;
};

export const arrSaleTranByDateTimeline = ({ arrTransactions, from, to }) => {
  if (from > to) {
    alert("From need lower To");
    return;
  }

  var arrSalesByDate = [];

  const newArrValidDate = arrTransactions.filter(
    (transaction) =>
      transaction.created_date.toDate() > from &&
      transaction.created_date.toDate() < to
  );

  for (let d = from; d <= to; d.setDate(d.getDate() + 1)) {
    var total = 0;
    for (let i = 0; i < newArrValidDate.length; i++) {
      if (
        d.toISOString().split("T")[0] ===
        newArrValidDate[i].created_date.toDate().toISOString().split("T")[0]
      ) {
        total += newArrValidDate[i].total;
      }
    }
    arrSalesByDate.push(total);
  }
  return arrSalesByDate;
};
