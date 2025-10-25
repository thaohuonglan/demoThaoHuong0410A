import "./css/style.css";
import "./css/media.css";

import anhlogo from "./assets/images/logoshop.png";
import { Outlet } from "react-router-dom";
const Layout2 = () => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div class="container">
          <div class="container_interface">
            <div class="container_img">
              <img src={anhlogo} alt="" />
            </div>

            <div class="container_list">
              <li class="animate__animated animate__bounceInDown">
                <a href="/">Trang Chủ</a>
              </li>
              <li class="drop animate__animated animate__bounceInDown">
                <a href="#">Sản phẩm</a>
                <ul class="drop-menu">
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
              <li class="animate__animated animate__bounceInDown">
                <a href="/gioithieu">Về bên chúng tôi</a>
              </li>
              <li class="animate__animated animate__bounceInDown">
                <a href="/lienhe">Liên hệ</a>
              </li>
            </div>

            <div class="header-icons">
              <a href="Login.html" class="icon-login">
                <i class="fa-solid fa-user"></i>
              </a>
              <a href="cart.html" class="icon-cart">
                <i class="fa-solid fa-cart-shopping"></i>
                <span id="cart-count">0</span>
              </a>
            </div>
          </div>
        </div>

        <main>
          <Outlet />
        </main>

        <footer>
          <div class="footer-container">
            <div class="footer-section about">
              <h2>Về chúng tôi</h2>
              <p>
                Công ty chúng tôi luôn những sản phẩm mang phong cách thời
                thượng,thanh lịch.
              </p>
            </div>

            <div class="footer-section links">
              <h2>Liên kết nhanh</h2>
              <ul>
                <li>
                  <a href="index.html">Trang chủ</a>
                </li>
                <li>
                  <a href="#">Sản phẩm</a>
                </li>
                <li>
                  <a href="#">Về chúng tôi</a>
                </li>
                <li>
                  <a href="Contact.html">Liên hệ</a>
                </li>
              </ul>
            </div>

            <div class="footer-section contact">
              <h2>Kết nối với chúng tôi</h2>
              <ul>
                <li>
                  <i class="fas fa-map-marker-alt"></i> 30 Đường T4A, Tây Thạnh,
                  Tân Phú, Hồ Chí Minh, Việt Nam
                </li>
                <li>
                  <i class="fas fa-phone-alt"></i> +84 764 308 318
                </li>
                <li>
                  <i class="fas fa-envelope"></i>
                  thaohuongnguyenphuoc@gmail.com.vn
                </li>
              </ul>
            </div>

            <div class="footer-section social">
              <h2>Theo dõi chúng tôi</h2>
              <ul class="social-links">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            &copy; 2025 ThaoHuongCompany | Designed by ThaoHuong
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Layout2;
