import React from "react";
import "../../styles/ProductCart3.scss";
import { useDispatch } from "react-redux";
import { removeFromCart, addq, minusq } from "../../redux/actions";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
function ProductCart3({ item }) {
  const { id, title, price, image, q } = item;
  const dispatch = useDispatch();
  const RemoveanItem = (item) => {
    dispatch(removeFromCart(item));
  };
  const minusQuantity = (item,id) => {
    if(item.q == 1){
      dispatch(removeFromCart(item))
    }
     dispatch(minusq(item,id))
  };
  const addQuantity = (item,id) => {
    dispatch(addq(item,id))
  };
  return (
    <div key={id} className="item-container">
      <div className="img">
        <img src={image} alt="" />
        <div className="quantity-contoller">
          <span onClick={() => addQuantity(item,id)}>
            <AddCircleIcon />
          </span>{" "}
          <input type="" value={q} />{" "}
          <span onClick={() => minusQuantity(item,id)}>
            <RemoveCircleIcon />
          </span>
        </div>
      </div>
      <div className="descritpion">
        <h2>{title.substring(0, 20)}...</h2>
        <p className="price">
          {price}$<span className="old-price">&nbsp;{price + 1000} $</span>
        </p>
        <button className="remove" onClick={() => RemoveanItem(item)}>
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default ProductCart3;
