// src/Chitietsanpham.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./data/product";

export default function Chitietsanpham() {
  const { id } = useParams(); // Lấy id sản phẩm từ URL
  const navigate = useNavigate();

  // Tìm sản phẩm theo id
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ padding: 20 }}>
        <h3>Không tìm thấy sản phẩm!</h3>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      {/* Nút quay lại brand */}
      <button
        onClick={() => navigate(`/sanpham/${product.category}`)}
        style={{ marginBottom: "20px", cursor: "pointer" }}
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
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* Thông tin sản phẩm */}
        <div style={{ flex: "1 1 400px" }}>
          <h2>{product.title}</h2>
          <p>
            <strong>Giá:</strong> {product.price.toLocaleString()} VND
          </p>
          <p>
            <strong>Loại:</strong> {product.category}
          </p>
          <p>{product.description}</p>

          {product.rating && (
            <p>
              <strong>Đánh giá:</strong> {product.rating.rate}⭐ ({product.rating.count} lượt)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
