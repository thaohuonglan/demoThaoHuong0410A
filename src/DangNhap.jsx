import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient.js";
import "./css/dangnhap.css";

const DangNhap = ({ onClose, onSwitchToRegister, onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showRecent, setShowRecent] = useState(false);
  const [recentLogin, setRecentLogin] = useState(null);

  useEffect(() => {
    const lastLogin = JSON.parse(localStorage.getItem("lastLogin"));
    if (lastLogin) {
      setRecentLogin(lastLogin);
      setShowRecent(true);
    }
  }, []);

  const hashSHA256 = async (text) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, error: fetchError } = await supabase
        .from("tbl_user")
        .select("*")
        .eq("username", username)
        .single();

      if (fetchError || !data) {
        setError("Tên đăng nhập hoặc mật khẩu không đúng");
        return;
      }

      const hashedPassword = await hashSHA256(password);
      if (data.password_hash !== hashedPassword) {
        setError("Tên đăng nhập hoặc mật khẩu không đúng");
        return;
      }

      const userData = {
        id: data.id,
        username: data.username,
        full_name: data.full_name,
        email: data.email,
        role: data.role,
      };

      // Lưu recent login
      localStorage.setItem("lastLogin", JSON.stringify({ username, password }));

      // ✅ gọi callback Layout để cập nhật ngay
      onLoginSuccess && onLoginSuccess(userData);
    } catch (err) {
      console.error(err);
      setError("Đã có lỗi xảy ra, vui lòng thử lại");
    }
  };

  const handleUseRecent = () => {
    if (recentLogin) {
      setUsername(recentLogin.username);
      setPassword(recentLogin.password);
      setShowRecent(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Đăng nhập</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Đăng nhập</button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <p>
          Chưa có tài khoản?{" "}
          <span onClick={onSwitchToRegister} style={{ cursor: "pointer" }}>
            Đăng ký ngay
          </span>
        </p>

        {showRecent && recentLogin && (
          <div
            style={{
              marginTop: "15px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>
              Lần đăng nhập trước:
            </p>
            <div>
              <strong>Username:</strong> {recentLogin.username}
            </div>
            <div>
              <strong>Password:</strong>{" "}
              {"*".repeat(recentLogin.password.length)}
            </div>
            <button
              style={{
                marginTop: "8px",
                padding: "5px 10px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onClick={handleUseRecent}
            >
              Sử dụng thông tin này
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DangNhap;
