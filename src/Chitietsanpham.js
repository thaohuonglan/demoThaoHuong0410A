// src/Chitietsanpham.js
import React from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { products } from "./data/product";

export default function Chitietsanpham() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useOutletContext();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ padding: 20 }}>
        <h3>Không tìm thấy sản phẩm!</h3>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    window.location.href = "/cart";
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    window.location.href = "/cart";
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Nút quay lại brand */}
      <button
        onClick={() => navigate(`/sanpham/${product.category}`)}
        style={{
          marginBottom: "20px",
          cursor: "pointer",
          padding: "8px 12px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          backgroundColor: "#f5f5f5",
        }}
      >
        ⬅ Quay lại {product.category}
      </button>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Hình ảnh sản phẩm */}
        <div style={{ flex: "1 1 300px" }}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              maxWidth: "400px",
              objectFit: "contain",
              borderRadius: "10px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* Thông tin sản phẩm */}
        <div style={{ flex: "1 1 400px" }}>
          <h2 style={{ marginBottom: "15px" }}>{product.title}</h2>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>
            Giá: {Number(product.price).toLocaleString("vi-VN")}₫
          </p>
          <p>
            <strong>Loại:</strong> {product.category}
          </p>
          <p>{product.description}</p>

          {product.rating && (
            <p>
              <strong>Đánh giá:</strong> {product.rating.rate}⭐ (
              {product.rating.count} lượt)
            </p>
          )}

          {/* Nút hành động */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => handleBuyNow(product)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#ff6f61",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#ff3b2e")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#ff6f61")
              }
            >
              Mua ngay
            </button>
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#fff",
                color: "#333",
                border: "1px solid #ddd",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff")
              }
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>

      {/* Responsive nhỏ */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="flex: 1 1 400px"] {
              flex: 1 1 100% !important;
            }
            div[style*="flex: 1 1 300px"] {
              flex: 1 1 100% !important;
              margin-bottom: 20px;
            }
          }
        `}
      </style>
    </div>
  );
}
