import React from "react";
import "./css/dangky.css";

const DangKy = ({ onClose, onSwitchToLogin }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Đăng ký</h2>
        <form>
          <input type="text" placeholder="Họ và tên" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Mật khẩu" required />
          <input type="password" placeholder="Nhập lại mật khẩu" required />
          <button type="submit">Tạo tài khoản</button>
        </form>
        <p>
          Đã có tài khoản? <span onClick={onSwitchToLogin}>Đăng nhập ngay</span>
        </p>
      </div>
    </div>
  );
};

export default DangKy;
