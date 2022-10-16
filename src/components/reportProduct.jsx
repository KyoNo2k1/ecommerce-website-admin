import React from "react";
import "../styles/topProduct.css";

const ReportProduct = () => {
  const reportProduct = [
    {
      id: 1,
      name: "Product Name",
      profit: 20.0,
      sold: 200,
    },
    {
      id: 2,
      name: "Product Name",
      profit: 20.0,
      sold: 200,
    },
  ];
  return (
    <div className="mt-3">
      <table className="w-[80%]">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Category Name</th>
            <th>Profit</th>
            <th className="pl-10">Sold Quantity</th>
            <th></th>
          </tr>
          {reportProduct?.map((item) => (
            <tr className="border-b-2" key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.profit}</td>
              <td className="border-none pl-20">{item.sold}</td>
              <td className="border-none"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportProduct;
