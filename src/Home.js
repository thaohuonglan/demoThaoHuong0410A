import React from "react";
import { useOutletContext } from "react-router-dom";
import "./css/style.css";
import "./css/home.css";
import "./css/media.css";

// Ảnh trang chủ
import img1 from "./assets/images/double4.jpg";
import img2 from "./assets/images/double5.jpg";
import img3 from "./assets/images/double2.jpg";
import img4 from "./assets/images/double3.jpg";

// Ảnh Best Seller
import best1 from "./assets/images/best1.png";
import best2 from "./assets/images/best2.png";
import best3 from "./assets/images/best3.png";
import best4 from "./assets/images/best4.webp";

// Ảnh Sale
import sale1 from "./assets/images/sale1.png";
import sale2 from "./assets/images/sale2.webp";
import sale3 from "./assets/images/sale3.webp";
import sale4 from "./assets/images/sale4.webp";

const Home = () => {
  const { addToCart } = useOutletContext(); // Lấy addToCart từ Layout

  const bestSellers = [
    { id: 1, name: "Túi xách Best 1", img: best1, price: 1200000 },
    { id: 2, name: "Túi xách Best 2", img: best2, price: 1500000 },
    { id: 3, name: "Túi xách Best 3", img: best3, price: 900000 },
    { id: 4, name: "Túi xách Best 4", img: best4, price: 1100000 },
  ];

  const sales = [
    { id: 1, name: "Túi xách Sale 1", img: sale1, price: 800000 },
    { id: 2, name: "Túi xách Sale 2", img: sale2, price: 950000 },
    { id: 3, name: "Túi xách Sale 3", img: sale3, price: 700000 },
    { id: 4, name: "Túi xách Sale 4", img: sale4, price: 650000 },
  ];

  const handleAddToCart = (product) => {
    addToCart(product); // Thêm sản phẩm thật vào giỏ
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  const handleBuyNow = (product) => {
    addToCart(product); // Thêm vào giỏ
    window.location.href = "/cart"; // chuyển thẳng sang giỏ hàng
  };

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
        <div className="product-grid">
          {bestSellers.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Giá: {item.price.toLocaleString("vi-VN")} VND</p>
              <div className="product-buttons">
                <button onClick={() => handleBuyNow(item)}>Mua ngay</button>
                <button onClick={() => handleAddToCart(item)}>
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sale */}
      <div className="product-section">
        <h2>Sale</h2>
        <div className="product-grid">
          {sales.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Giá: {item.price.toLocaleString("vi-VN")} VND</p>
              <div className="product-buttons">
                <button onClick={() => handleBuyNow(item)}>Mua ngay</button>
                <button onClick={() => handleAddToCart(item)}>
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
