import React from "react";
import { useSelector } from "react-redux";
function header() {
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const moneyselector = useSelector((state) => state.product.money);
  return (
    <div className="header">
      <h1>spend bill gates money</h1>
      <span>{moneyFormatter.format(moneyselector)}</span>
    </div>
  );
}

export default header;
