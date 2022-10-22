import React from "react";
import "../styles/topProduct.css";

const ReportProduct = () => {
  const reportProduct = [
    {
      id: 1,
      name: "Chairs",
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
      <table className="w-[90%]">
        <thead>
          <tr>
            <th>STT</th>
            <th>Category Name</th>
            <th>Total Profit</th>
            <th>Total Sold</th>
            <th>Product Name</th>
            <th>Profit</th>
            <th>Sold Quantity</th>
          </tr>
        </thead>

        {reportProduct?.map((item) => (
          <tbody>
            <tr className="" key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.profit}</td>
              <td>{item.sold}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="" key={item.id}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="border-y-[1px]">name</td>
              <td className="border-y-[1px]">{item.profit}</td>
              <td className="border-y-[1px]">{item.sold}</td>
            </tr>
            <tr className="border-b-2" key={item.id}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>name</td>
              <td>{item.profit}</td>
              <td>{item.sold}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ReportProduct;
