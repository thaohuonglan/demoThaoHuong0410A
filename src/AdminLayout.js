import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./css/style.css";
import "./css/media.css";
import anhlogo from "./assets/images/logoshop.png";

const AdminLayout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Lấy user khi load trang
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/"); // Hoặc navigate("/dangnhap") nếu bạn có trang login riêng
  };

  return (
    <>
      {/* Header */}
      <div className="container">
        <div className="container_interface">
          <div className="container_img">
            <Link to="/admin">
              <img src={anhlogo} alt="Logo Shop" />
            </Link>
          </div>

          <ul className="container_list">
            <li className="animate__animated animate__bounceInDown">
              <Link to="/">Trang Chủ</Link>
            </li>
            <li className="animate__animated animate__bounceInDown">
              <Link to="/admin/products">Quản lý sản phẩm</Link>
            </li>
            <li className="animate__animated animate__bounceInDown">
              <Link to="/admin/orders">Quản lý đơn hàng</Link>
            </li>
            <li className="animate__animated animate__bounceInDown">
              <Link to="/admin/users">Quản lý người dùng</Link>
            </li>
          </ul>

          {/* User info & logout */}
          <div className="header-icons" style={{ marginLeft: "auto" }}>
            {user ? (
              <>
                <span className="username">👤 {user.username}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </>
            ) : (
              <span>Chưa đăng nhập</span>
            )}
          </div>
        </div>
      </div>

      {/* Nội dung chính */}
      <main className="page-content">
        <Outlet />
      </main>

       {/* Footer */}
       <footer>
        <div className="footer-container">
          <div className="footer-section about">
            <h2>Về chúng tôi</h2>
            <p>Công ty chúng tôi luôn cung cấp những sản phẩm mang phong cách thời thượng, thanh lịch.</p>
          </div>
          <div className="footer-section links">
            <h2>Liên kết nhanh</h2>
            <ul>
              <li><Link to="/">Trang chủ</Link></li>
              <li><span>Sản phẩm</span></li>
              <li><Link to="/gioithieu">Về chúng tôi</Link></li>
              <li><Link to="/lienhe">Liên hệ</Link></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Kết nối với chúng tôi</h2>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 30 Đường T4A, Tây Thạnh</li>
              <li><i className="fas fa-phone-alt"></i> +84 764 308 318</li>
              <li><i className="fas fa-envelope"></i> thaohuongnguyenphuoc@gmail.com.vn</li>
            </ul>
          </div>
          <div className="footer-section social">
            <h2>Theo dõi chúng tôi</h2>
            <ul className="social-links">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 ThaoHuongCompany | Designed by ThaoHuong
        </div>
      </footer>
    </>
  );
};

export default AdminLayout;
