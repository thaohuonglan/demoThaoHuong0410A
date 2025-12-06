import React, { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import "./css/cart.css";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useOutletContext();

  // Lấy thông tin user từ localStorage
  const [user, setUser] = useState({ name: "", address: "", email: "" });
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setUser({
        name: storedUser.full_name || "",
        address: storedUser.address || "",
        email: storedUser.email || "",
      });
    }
  }, []);

  const initialCart = cart.map((item) => ({
    ...item,
    quantity: item.quantity || 1,
  }));

  const [updatedCart, setUpdatedCart] = useState(initialCart);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setUpdatedCart((prev) => prev.filter((item) => item.id !== id));
      removeFromCart(id);
      return;
    }
    setUpdatedCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const handleIncrease = (item) => updateQuantity(item.id, item.quantity + 1);
  const handleDecrease = (item) => updateQuantity(item.id, item.quantity - 1);
  const handleRemove = (id) => {
    removeFromCart(id);
    setUpdatedCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = updatedCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/payment", { state: { cart: updatedCart, user } });
  };

  // Handle clear cart
  const handleClearCart = () => {
    clearCart(); // Call clearCart from context
    setUpdatedCart([]); // Update local state to empty array
  };

  if (updatedCart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Giỏ hàng của bạn trống 😢</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Giỏ hàng của bạn</h2>
      <div className="cart-list">
        {updatedCart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>Giá: {item.price.toLocaleString("vi-VN")} VND</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrease(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item)}>+</button>
              </div>
            </div>
            <button
              className="btn-remove"
              onClick={() => handleRemove(item.id)}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Tổng tiền: {totalPrice.toLocaleString("vi-VN")} VND</h3>
        <div className="cart-buttons">
          <button className="btn-clear" onClick={handleClearCart}>
            Xóa toàn bộ
          </button>
          <button className="btn-checkout" onClick={handleCheckout}>
            Thanh Toán
          </button>
        </div>
      </div>
    </div>
  );
}
