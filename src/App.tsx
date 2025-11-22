// @ts-ignore
import Home from "./Home";
// @ts-ignore
import Layout from "./Layout";
// @ts-ignore
import Chitietsanpham from "./Chitietsanpham";
// @ts-ignore
import Lienhe from "./Lienhe";
// @ts-ignore
import Gioithieu from "./Gioithieu";
// @ts-ignore
import BrandProduct from "./BrandProduct";
// @ts-ignore
import ProductDetail from "./ProductDetail";
// @ts-ignore
import Cart from "./Cart";
// @ts-ignore
import PaymentPage from "./PaymentPage";
// @ts-ignore
import DangNhap from "./DangNhap";
// @ts-ignore
import LogoutPage from "./LogoutPage";
// @ts-ignore
import AdminLayout from "./AdminLayout";
// @ts-ignore
import AdminRoute from "./AdminRoute";
// @ts-ignore
import ProductManagement from "./ProductManagement";
// @ts-ignore
import UserManagement from "./UserManagement";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout người dùng */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gioithieu" element={<Gioithieu />} />
          <Route path="lienhe" element={<Lienhe />} />
          <Route path="sanpham/:brand" element={<BrandProduct />} />
          <Route path="chitiet/:id" element={<Chitietsanpham />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/payment" element={<PaymentPage />} />
          {/* Trang đăng nhập / đăng xuất */}
          <Route path="login" element={<DangNhap />} />
          <Route path="logout" element={<LogoutPage />} />
        </Route>

        {/* Layout admin */}
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          {/* Route con của admin */}
          <Route path="products" element={<ProductManagement />} />
          <Route path="users" element={<UserManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
