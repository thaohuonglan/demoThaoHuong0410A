import "./styles.css";
// @ts-ignore
import Home from "./Home";
// @ts-ignore
import Layout from "./Layout";

// @ts-ignore
import Layout2 from "./Layout2";

// @ts-ignore
import Chitietsanpham from "./Chitietsanpham";
// @ts-ignore
import Lienhe from "./Lienhe";
// @ts-ignore
import Gioithieu from "./Gioithieu";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  // return <Layout />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout2 />}>
          <Route index element={<Home />} />
          <Route path="gioithieu" element={<Gioithieu />} />
          <Route path="lienhe" element={<Lienhe />} />
          <Route path="sanpham/:id" element={<Chitietsanpham />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
