import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buy, sell } from "../redux/productslice";
function prduct({ item }) {
  const buyDispatch = useDispatch();
  const sellDispatch = useDispatch();
  const [piece, setPiece] = useState(0);

  const sellClick = () => {
    if (piece <= 0) {
      setPiece(0);
    } else {
      setPiece(piece - 1);
      sellDispatch(sell({ item, piece }));
    }
  };
  const buyClick = () => {
    setPiece(piece + 1);
    buyDispatch(buy({ item, piece }));
  };

  return (
    <>
      <div className="product">
        <img src={item.img} />
        <p>{item.name}</p>
        <span>$ {item.price}</span>
        <div className="process">
          <button onClick={() => sellClick()}>sell</button>
          <span>{piece}</span>
          <button onClick={() => buyClick()}>buy</button>
        </div>
      </div>
    </>
  );
}

export default prduct;
