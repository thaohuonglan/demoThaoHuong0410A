import React, { useState } from "react";
import "./css/style.css";
import "./css/media.css";
import anhlogo from "./assets/images/logoshop.png";
import { Outlet } from "react-router-dom";
import DangNhap from "./DangNhap";
import DangKy from "./DangKy";

const Layout = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

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
              <a href="/">Trang Chủ</a>
            </li>
            <li className="drop animate__animated animate__bounceInDown">
              <a href="#">Sản phẩm</a>
              <ul className="drop-menu">
                <li>
                  <a href="DIOR.html">DIOR</a>
                </li>
                <li>
                  <a href="CHANEL.HTML">CHANEL</a>
                </li>
                <li>
                  <a href="YSL.html">YSL</a>
                </li>
                <li>
                  <a href="CEEKAY.html">CEEKAY</a>
                </li>
                <li>
                  <a href="ZARA.html">ZARA</a>
                </li>
              </ul>
            </li>
            <li className="animate__animated animate__bounceInDown">
              <a href="/gioithieu">Về bên chúng tôi</a>
            </li>
            <li className="animate__animated animate__bounceInDown">
              <a href="/lienhe">Liên hệ</a>
            </li>
          </div>

          <div className="header-icons">
            {/* Khi bấm vào icon user, hiện popup đăng nhập */}
            <div className="icon-login" onClick={() => setShowLogin(true)}>
              <i className="fa-solid fa-user" style={{ cursor: "pointer" }}></i>
            </div>

            {/* Giỏ hàng */}
            <a href="cart.html" className="icon-cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span id="cart-count">0</span>
            </a>
          </div>
        </div>
      </div>

      {/* Popup đăng nhập / đăng ký */}
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
        <Outlet />
      </main>

      {/* Footer */}
      <footer> 
        <div className="footer-container"> 
        <div className="footer-section about"> 
        <h2>Về chúng tôi</h2> 
        <p> Công ty chúng tôi luôn cung cấp những sản phẩm mang phong cách thời thượng, thanh lịch. </p> </div> 
        <div className="footer-section links"> 
        <h2>Liên kết nhanh</h2> 
        <ul> <li> <a href="/">Trang chủ</a> 
        </li> 
        <li> <a href="#">Sản phẩm</a> </li> 
        <li> <a href="#">Về chúng tôi</a> </li> 
        <li> <a href="/lienhe">Liên hệ</a> </li> 
        </ul> 
        </div> 
        <div className="footer-section contact"> 
        <h2>Kết nối với chúng tôi</h2> 
        <ul> <li> <i className="fas fa-map-marker-alt"></i> 30 Đường T4A, Tây Thạnh, Tân Phú, Hồ Chí Minh, Việt Nam </li> 
        <li> <i className="fas fa-phone-alt"></i> +84 764 308 318 
        </li> 
        <li> <i className="fas fa-envelope"></i>{" "}
         thaohuongnguyenphuoc@gmail.com.vn 
         </li> 
         </ul> 
         </div> 
         <div className="footer-section social"> 
         <h2>Theo dõi chúng tôi</h2> 
         <ul className="social-links"> 
         <li> <a href="#"> <i className="fab fa-facebook-f"></i> </a> 
         </li> 
         <li> <a href="#"> 
         <i className="fab fa-twitter"></i> 
         </a> 
         </li> 
         <li> <a href="#"> 
         <i className="fab fa-instagram"></i> 
         </a> 
         </li> 
         <li> <a href="#"> 
         <i className="fab fa-linkedin-in"></i> 
         </a> 
         </li> 
         </ul> 
         </div> 
         </div> 
         <div className="footer-bottom"> 
         &copy; 2025 ThaoHuongCompany | Designed by ThaoHuong </div> 
      </footer>
    </>
  );
};

export default Layout;
