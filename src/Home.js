import React, { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./css/style.css";
import "./css/home.css";
import "./css/media.css";

// Ảnh trang chủ
import img1 from "./assets/images/double4.jpg";
import img2 from "./assets/images/double5.jpg";
import img3 from "./assets/images/double2.jpg";
import img4 from "./assets/images/double3.jpg";

const Home = () => {
  const { addToCart } = useOutletContext(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("bestandsale")
          .select("*")
          .order("id", { ascending: true });

        if (error) throw error;
        setProducts(data);
      } catch (err) {
        console.error("Lỗi khi lấy sản phẩm:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const formatPrice = (price) =>
    Number(price).toLocaleString("vi-VN") + "₫";

  const bestSellers = products.filter((p) => p.type === "best");
  const sales = products.filter((p) => p.type === "sale");

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} đã được thêm vào giỏ hàng!`);
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    window.location.href = "/cart";
  };

  const renderProductCard = (item) => (
    <div key={item.id} className="product-card">
      <Link
        to={`/productdetail/${item.id}`} // đổi đường dẫn tới ProductDetail
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>Giá: {formatPrice(item.price)}</p>
      </Link>
      <div className="product-buttons">
        <button onClick={() => handleBuyNow(item)}>Mua ngay</button>
        <button onClick={() => handleAddToCart(item)}>Thêm vào giỏ hàng</button>
      </div>
    </div>
  );

  return (
    <div className="home-container">
      {/* Trang chủ */}
      <div className="Over-Main">
        <div className="Main-left_slogan">
          <h1 className="animate__animated animate__bounceInLeft">
            Chiếc túi xách không chỉ là phụ kiện, <br />
            mà là phong cách và sự tự tin của người phụ nữ.
          </h1>
          <button className="animate__animated animate__bounceInLeft">
            <a href="/gioithieu">Tìm hiểu thêm</a>
          </button>
        </div>

        <div className="Main-right_imgae">
          <div className="column">
            {[img1, img2, img3, img4].map((img, index) => (
              <div
                key={index}
                className="column-1 animate__animated animate__bounceInRight"
              >
<img src={img} alt={`bag${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Seller */}
      <div className="product-section">
        <h2>Best Seller</h2>
        {loading ? <p>Đang tải sản phẩm...</p> : (
          <div className="product-grid">
            {bestSellers.map(renderProductCard)}
          </div>
        )}
      </div>

      {/* Sale */}
      <div className="product-section">
        <h2>Sale</h2>
        {loading ? <p>Đang tải sản phẩm...</p> : (
          <div className="product-grid">
            {sales.map(renderProductCard)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;