import React, { useState } from "react";
import "./css/style.css";
import "./css/media.css";
import anhlogo from "./assets/images/logoshop.png";
import { Outlet, Link } from "react-router-dom";
import DangNhap from "./DangNhap";
import DangKy from "./DangKy";

const Layout = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [cart, setCart] = useState([]); // lưu danh sách sản phẩm

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <>
      {/* Header */}
      <div className="container">
        <div className="container_interface">
          <div className="container_img">
            <img src={anhlogo} alt="Logo Shop" />
          </div>

          <div className="container_list">
            <li className="animate__animated animate__bounceInDown">
              <Link to="/">Trang Chủ</Link>
            </li>
            <li className="drop animate__animated animate__bounceInDown">
              <span>Sản phẩm</span>
              <ul className="drop-menu">
                <li>
                  <Link to="/sanpham/Dior">DIOR</Link>
                </li>
                <li>
                  <Link to="/sanpham/Chanel">CHANEL</Link>
                </li>
                <li>
                  <Link to="/sanpham/YSL">YSL</Link>
                </li>
                <li>
                  <Link to="/sanpham/Ceekay">CEEKAY</Link>
                </li>
                <li>
                  <Link to="/sanpham/Zara">ZARA</Link>
                </li>
              </ul>
            </li>
            <li className="animate__animated animate__bounceInDown">
              <Link to="/gioithieu">Về bên chúng tôi</Link>
            </li>
            <li className="animate__animated animate__bounceInDown">
              <Link to="/lienhe">Liên hệ</Link>
            </li>
          </div>

          <div className="header-icons">
            <div className="icon-login" onClick={() => setShowLogin(true)}>
              <i className="fa-solid fa-user" style={{ cursor: "pointer" }}></i>
            </div>
            <Link
              to="/cart"
              className="icon-cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <span id="cart-count">{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showLogin && (
        <DangNhap
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}
      {showRegister && (
        <DangKy
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}

      {/* Nội dung chính */}
      <main className="page-content">
        <Outlet context={{ cart, addToCart, removeFromCart, clearCart }} />
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-section about">
            <h2>Về chúng tôi</h2>
            <p>
              Công ty chúng tôi luôn cung cấp những sản phẩm mang phong cách
              thời thượng, thanh lịch.
            </p>
          </div>
          <div className="footer-section links">
            <h2>Liên kết nhanh</h2>
            <ul>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <span>Sản phẩm</span>
              </li>
              <li>
                <Link to="/gioithieu">Về chúng tôi</Link>
              </li>
              <li>
                <Link to="/lienhe">Liên hệ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Kết nối với chúng tôi</h2>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> 30 Đường T4A, Tây
                Thạnh, Tân Phú, Hồ Chí Minh
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> +84 764 308 318
              </li>
              <li>
                <i className="fas fa-envelope"></i>{" "}
                thaohuongnguyenphuoc@gmail.com.vn
              </li>
            </ul>
          </div>
          <div className="footer-section social">
            <h2>Theo dõi chúng tôi</h2>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
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

export default Layout;
