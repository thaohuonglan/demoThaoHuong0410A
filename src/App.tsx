import "./styles.css";
import Home from "./Home";
import Layout from "./Layout";
import Trang1 from "./Trang1";
import Chitietsanpham from "./Chitietsanpham";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  // return <Layout />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trang1" element={<Trang1 />} />
          <Route path="sanpham/:id" element={<Chitietsanpham />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
