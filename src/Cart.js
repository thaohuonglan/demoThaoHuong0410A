import React from "react";
import { useOutletContext } from "react-router-dom";
import "./css/cart.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useOutletContext();

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Giỏ hàng của bạn trống 😢</h2>
      </div>
    );
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Giỏ hàng của bạn</h2>
      <div className="cart-list">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>Giá: {item.price.toLocaleString("vi-VN")} VND</p>
            </div>
            <button
              className="btn-remove"
              onClick={() => removeFromCart(item.id)}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Tổng tiền: {totalPrice.toLocaleString("vi-VN")} VND</h3>
        <div className="cart-buttons">
          <button className="btn-clear" onClick={clearCart}>
            Xóa toàn bộ
          </button>
          <button
            className="btn-checkout"
            onClick={() => alert("Chuyển sang trang thanh toán")}
          >
            Thanh Toán
          </button>
        </div>
      </div>
    </div>
  );
}
