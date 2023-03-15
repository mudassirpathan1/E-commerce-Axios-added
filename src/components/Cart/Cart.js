import React, { useContext, useEffect } from "react";
import axios from "axios";

import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";

import "./Cart.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const removeItemHandler = (product) => {
    cartCtx.removeItem(product);
    localStorage.removeItem(product.id);

    const email = authCtx.emailid;

    axios.delete(
      `https://crudcrud.com/api/f65c503edce749108c8e92dac49026d1/cart${email}/${product._id}`
    );
  };

  useEffect(() => {
    const email = authCtx.emailid;

    axios
      .get(`https://crudcrud.com/api/f65c503edce749108c8e92dac49026d1/cart${email}`)
      .then((res) => {
        return cartCtx.crudlist(res.data);
      });
  }, []);

  // Storing in local storage
  const list = Object.keys(localStorage);
  console.log(list);
  const detail = list.filter((item) => item !== "token");
  console.log(detail);
  let obj = [];
  detail.forEach((item) => {
    obj.push(JSON.parse(localStorage.getItem(item)));
  });
  console.log(obj);
  const cartList = obj.map((product) => {
    return (
      <li key={product.id} className="cartitems">
        <span className="cart-col">
          <img src={product.imageUrl} alt={product.title} width="100px" />
          <span>{product.title}</span>
        </span>
        <span className="cart-col">
          <span>${product.price}</span>
        </span>
        <span className="cart-col">
          <span>Quantity:{product.quantity}</span>
          <button
            className="remove-item"
            onClick={() => removeItemHandler(product)}
          >
            Remove
          </button>
        </span>
      </li>
    );
  });
  let Total = 0;
  cartCtx.items.forEach((product) => {
    Total += Number(product.price * product.quantity);
  });

  return (
    <div className="cartbox">
      <button className="close-cart" onClick={props.onClose}>
        X
      </button>
      <div className="headings">
        <div>ITEM</div>
        <div>PRICE</div>
        <div>QUANTITY</div>
      </div>
      <div className="cartdetails">{cartList}</div>
      <div className="total-price">Total: ${Total}</div>
    </div>
  );
};

export default Cart;
