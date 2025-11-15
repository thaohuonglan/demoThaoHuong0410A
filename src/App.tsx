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
import Cart from "./Cart";
// @ts-ignore
import AdminLayout from "./AdminLayout";
// @ts-ignore
import AdminRoute from "./AdminRoute";

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
          <Route path="cart" element={<Cart />} />
        </Route>

        {/* Admin */}
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
