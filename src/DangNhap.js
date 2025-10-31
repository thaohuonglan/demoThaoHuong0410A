import React, { useState } from "react";
import "./css/dangnhap.css";

const DangNhap = ({ onClose, onSwitchToRegister }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Đăng nhập</h2>
        <form>
          <input type="text" placeholder="Tên đăng nhập" required />
          <input type="password" placeholder="Mật khẩu" required />
          <button type="submit">Đăng nhập</button>
        </form>
        <p>
          Chưa có tài khoản?{" "}
          <span onClick={onSwitchToRegister}>Đăng ký ngay</span>
        </p>
      </div>
    </div>
  );
};

export default DangNhap;
