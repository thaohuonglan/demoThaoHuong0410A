import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./css/style.css";
import anhlogo from "./assets/images/logoshop.png";

const AdminLayout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="admin-wrapper">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-logo">
          <Link to="/admin">
            <img src={anhlogo} alt="Logo Shop" />
          </Link>
        </div>

        <ul className="sidebar-menu">
          <li>
            <Link to="/">🏠 Trang Chủ</Link>
          </li>
          <li>
            <Link to="/admin/products">📦 Quản lý sản phẩm</Link>
          </li>
          <li>
            <Link to="/admin/orders">📄 Quản lý đơn hàng</Link>
          </li>
          <li>
            <Link to="/admin/users">👥 Quản lý người dùng</Link>
          </li>
        </ul>
      </aside>

      {/* Content */}
      <div className="admin-main">
        <header className="admin-header">
          {user ? (
            <div className="header-user">
              <span>👤 {user.username}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Đăng xuất
              </button>
            </div>
          ) : (
            <span>Chưa đăng nhập</span>
          )}
        </header>

        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
