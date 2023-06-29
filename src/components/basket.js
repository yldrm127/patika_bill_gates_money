import React from "react";
import { useSelector } from "react-redux";
import { BsFillBasket2Fill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
function basket() {
  const baskets = useSelector((state) => state.product.items);
  const Basket = (staus) => {
    if (staus === "flex") {
      document.getElementById("basket").style.display = "flex";
    }
    if (staus === "none") {
      document.getElementById("basket").style.display = "none";
    }
  };
  return (
    <>
      <BsFillBasket2Fill
        className="basket-icon"
        onClick={() => Basket("flex")}
      ></BsFillBasket2Fill>
      <span className="basket-no">{baskets.length}</span>
      <div className="basket" id="basket">
        <AiOutlineClose
          className="closeBasket"
          onClick={() => Basket("none")}
        />
        {baskets.map((item, key) => (
          <div key={key}>
            <p>name:{item.name}</p>
            <p>adet:{item.piece}</p>
            <p>tutar:{item.amount}$</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default basket;
