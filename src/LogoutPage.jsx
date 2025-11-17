// src/LogoutPage.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Xóa thông tin user và recent login trong localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("lastLogin");

    // Chuyển hướng sau 2 giây
    const timer = setTimeout(() => {
      navigate("/dangnhap", { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          maxWidth: "400px",
          width: "90%",
          textAlign: "center",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          border: "1px solid #ddd",
        }}
      >
        <h2 style={{ color: "#2563eb", fontSize: "24px", marginBottom: "15px" }}>
          👋 Đăng xuất thành công!
        </h2>
        <p style={{ color: "#4b5563", marginBottom: "10px" }}>
          Phiên đăng nhập của bạn đã được kết thúc.
        </p>
        <p style={{ color: "#6b7280", fontSize: "14px" }}>
          Đang chuyển hướng đến trang đăng nhập...
        </p>
      </div>
    </div>
  );
};

export default LogoutPage;
