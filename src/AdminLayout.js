import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./css/style.css";  // Đảm bảo bạn đã import đúng css của mình
import "./css/media.css";  // Đảm bảo bạn đã import đúng css của mình
import anhlogo from "./assets/images/logoshop.png"; // Đảm bảo đường dẫn chính xác

const AdminLayout = () => {
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
            <li className="animate__animated animate__bounceInDown">
              <Link to="/admin/products">Quản lý sản phẩm</Link>
            </li>
            {/* Thêm menu cho admin nếu có */}
            <li className="animate__animated animate__bounceInDown">
              <Link to="/admin/orders">Quản lý đơn hàng</Link>
            </li>
            <li className="animate__animated animate__bounceInDown">
              <Link to="/admin/users">Quản lý người dùng</Link>
            </li>
          </div>
        </div>
      </div>

      {/* Nội dung chính */}
      <main className="page-content">
        {/* Sử dụng Outlet để render các nội dung con */}
        <Outlet />
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
                <Link to="/gioithieu">Về chúng tôi</Link>
              </li>
              <li>
                <Link to="/lienhe">Liên hệ</Link>
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

export default AdminLayout;
