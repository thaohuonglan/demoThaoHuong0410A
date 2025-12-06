import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart = [] } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    paymentMethod: "credit_card",
    bank: "",
  });

  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setFormData((prev) => ({
        ...prev,
        name: storedUser.full_name || "",
        address: storedUser.address || "",
        email: storedUser.email || "",
      }));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const price = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setTotalPrice(price);
    }
  }, [cart]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đơn hàng đã được thanh toán!");
    navigate("/");
  };

  return (
    <div>
      <style>{`
        .payment-container { max-width: 800px; margin: 40px auto; padding: 30px; background-color: #fff0f6; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .payment-container h2 { text-align: center; margin-bottom: 30px; font-size: 32px; font-weight: bold; color: #ec3f8b; }
        form { display: flex; flex-direction: column; gap: 20px; }
        .form-group { display: flex; flex-direction: column; }
        .form-group label { font-size: 16px; margin-bottom: 8px; color: #333; }
        .form-group input, .form-group select { padding: 12px; font-size: 16px; border: 1px solid #ccc; border-radius: 5px; }
        .form-group input:focus, .form-group select:focus { border-color: #ec3f8b; outline: none; }
        .cart-summary { margin-top: 20px; padding: 10px; background-color: #f8e0f1; border-radius: 6px; font-size: 18px; font-weight: bold; color: #333; }
        button { padding: 12px 20px; background-color: #ec3f8b; color: #fff; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; transition: background-color 0.3s ease; }
        button:hover { background-color: #d6367d; }
        .btn-back-home { margin-top: 20px; background-color: #fff; color: #ec3f8b; border: 2px solid #ec3f8b; }
        .btn-back-home:hover { background-color: #ec3f8b; color: #fff; }
        .payment-method-icons input[type="radio"] { width: 20px; height: 20px; margin-right: 10px; cursor: pointer; }
        .payment-method-icons label { display: flex; align-items: center; font-size: 16px; color: #333; }
      `}</style>

      <div className="payment-container">
        <h2>Trang Thanh Toán</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tên khách hàng</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Địa chỉ giao hàng</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phương thức thanh toán</label>
            <div className="payment-method-icons">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit_card"
                  checked={formData.paymentMethod === "credit_card"}
                  onChange={handleInputChange}
                />{" "}
                Thẻ tín dụng
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleInputChange}
                />{" "}
                PayPal
              </label>
            </div>
          </div>

          {formData.paymentMethod === "credit_card" && (
            <div className="form-group">
              <label>Chọn ngân hàng</label>
              <select
                name="bank"
                value={formData.bank}
                onChange={handleInputChange}
                required
              >
                <option value="">Chọn ngân hàng</option>
                <option value="mnbank">MB Bank</option>
                <option value="vietcombank">Vietcombank</option>
                <option value="techcombank">Techcombank</option>
                <option value="vietinbank">Vietinbank</option>
                <option value="bidv">BIDV</option>
              </select>
            </div>
          )}

          <div className="cart-summary">
            Tổng tiền: {totalPrice.toLocaleString("vi-VN")} VND
          </div>

          <button type="submit">Thanh Toán</button>
        </form>

        <button className="btn-back-home" onClick={() => navigate("/")}>
          Quay lại trang chủ
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
