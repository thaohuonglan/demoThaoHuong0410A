import "./assets/css/main.css";
import anhlogo from "./assets/images/Ten-truong-do-1000x159.png";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      {/* Header */}
      <header>
        <div id="divheader" className="header1">
          {/* Thanh trên */}
          <div id="banner" className="banner1">
            <div id="topleft" className="topleft">
              <ul className="ul1">
                <li>
                  <a href="/">TRANG CHỦ</a>
                </li>
                <li>
                  <a href="/trang1">EGOV</a>
                </li>
                <li>
                  <a href="#">SINH VIÊN</a>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <div id="logo" className="logo1">
              <img src={anhlogo} alt="Logo" />
            </div>

            {/* Tìm kiếm */}
            <div id="divtimkiem" className="search-bar">
              <input type="text" placeholder="Tìm kiếm..." />
              <button type="button">🔍</button>
            </div>
          </div>

          {/* Menu */}
          <nav id="divmenu" className="menu">
            <div id="menuitem">
              <ul>
                <li className="menu-item">
                  <a href="#">GIỚI THIỆU</a>
                  <ul className="submenu">
                    <li>
                      <a href="#">Lịch sử hình thành và phát triển</a>
                    </li>
                    <li>
                      <a href="#">Bộ máy tổ chức</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">TIN TỨC - SỰ KIỆN</a>
                </li>

                <li className="menu-item">
                  <a href="#">TUYỂN SINH</a>
                  <ul className="submenu">
                    <li>
                      <a href="#">Tuyển sinh 2025</a>
                    </li>
                    <li>
                      <a href="#">Tuyển sinh chính quy</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item">
                  <a href="#">CÔNG KHAI GIÁO DỤC</a>
                  <ul className="submenu">
                    <li>
                      <a href="#">Công khai thường niên</a>
                    </li>
                    <li>
                      <a href="#">Chất lượng đào tạo</a>
                    </li>
                    <li>
                      <a href="#">Chuẩn đầu ra</a>
                    </li>
                    <li>
                      <a href="#">Đội ngũ giảng viên</a>
                    </li>
                    <li>
                      <a href="#">Tài chính</a>
                    </li>
                    <li>
                      <a href="#">Cơ sở vật chất</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item">
                  <a href="#">CƠ CẤU TỔ CHỨC</a>
                  <ul className="submenu">
                    <li>
                      <a href="#">Đảng-Đoàn thể</a>
                    </li>
                    <li>
                      <a href="#">Ban giám hiệu</a>
                    </li>
                    <li>
                      <a href="#">Phòng ban</a>
                    </li>
                    <li>
                      <a href="#">Khoa chuyên môn</a>
                    </li>
                    <li>
                      <a href="#">Trung tâm</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item">
                  <a href="#">LIÊN KẾT</a>
                  <ul className="submenu">
                    <li>
                      <a href="#">Thông tin từ sở GDĐT TP</a>
                    </li>
                    <li>
                      <a href="#">Cổng đăng kí tuyển sinh</a>
                    </li>
                    <li>
                      <a href="#">Sổ tay sinh viên</a>
                    </li>
                    <li>
                      <a href="#">EGOV-Cổng giảng viên</a>
                    </li>
                    <li>
                      <a href="#">Thư viện số</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Nội dung */}
      <main id="container" className="container">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <p>© 2025 Trường Cao Đẳng Kinh Tế TP.HCM</p>
      </footer>
    </div>
  );
};

export default Layout;
