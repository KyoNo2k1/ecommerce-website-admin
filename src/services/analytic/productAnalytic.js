const mode = (array) => {
  if (array.length === 0) return null;
  var modeMap = {};
  var maxEl = array[0],
    maxCount = 1;
  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
};

export const getTopSales = ({ arrTransactions }) => {
  var arrSalesByProduct = [];
  for (var i = 0; i < arrTransactions.length; i++) {
    for (var data in arrTransactions[i].products)
      arrSalesByProduct.push(arrTransactions[i].products[data].cartItem.uuid);
  }
  const counts = {};

  for (const num of arrSalesByProduct) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return {
    uuid: mode(arrSalesByProduct),
    count: counts[mode(arrSalesByProduct)],
  };
};
