import React from "react";
import productjson from "../productjson.json";
import Product from "./prduct";
function productlist() {
  return (
    <div className="productlist">
      {productjson.map((item, key) => (
        <Product key={key} item={item}></Product>
      ))}
    </div>
  );
}

export default productlist;
