// src/ProductDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { supabase } from "./supabaseClient";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useOutletContext();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("bestandsale")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setProduct(data);
      } catch (err) {
        console.error("Lỗi khi lấy sản phẩm:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = (product) => {
    addToCart(product);
    window.location.href = "/cart";
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    window.location.href = "/cart";
  };

  if (loading) return <p style={{ padding: 20 }}>Đang tải sản phẩm...</p>;
  if (!product)
    return (
      <div style={{ padding: 20 }}>
        <h3>Không tìm thấy sản phẩm!</h3>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          cursor: "pointer",
          backgroundColor: "#f5f5f5",
          border: "1px solid #ddd",
          padding: "8px 12px",
          borderRadius: "5px",
        }}
      >
        ⬅ Quay lại
      </button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          alignItems: "flex-start",
        }}
      >
        {/* Hình ảnh */}
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
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "10px 0" }}>
            Giá: {Number(product.price).toLocaleString("vi-VN")}₫
          </p>
          <p>
            <strong>Loại:</strong>{" "}
            {product.type === "best" ? "Best Seller" : "Sale"}
          </p>
          <p style={{ margin: "15px 0" }}>{product.description}</p>
          {product.rating_rate && product.rating_count && (
            <p>
              <strong>Đánh giá:</strong> {product.rating_rate}⭐ (
              {product.rating_count} lượt)
            </p>
          )}

          {/* Nút hành động */}
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
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
    </div>
  );
}
