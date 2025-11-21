import React, { useState, useEffect } from "react";
import { useParams, useOutletContext, Link } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./css/product.css";

const BrandProduct = () => {
  const { brand } = useParams();
  const { addToCart } = useOutletContext();
  const [brandProducts, setBrandProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!brand) return;

    const fetchBrandProducts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("sanpham")
          .select("*")
          .ilike("category", brand);

        if (error) throw error;
        setBrandProducts(data);
      } catch (err) {
        console.error("Lỗi khi lấy sản phẩm:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandProducts();
  }, [brand]);

  const formatPrice = (price) => {
    // Format số tiền, ví dụ 52000000 => 52,000,000
    return price.toLocaleString("vi-VN") + "₫";
  };

  if (!brand) return <p>Không có hãng được chọn</p>;
  if (loading) return <p>Đang tải sản phẩm...</p>;
  if (brandProducts.length === 0)
    return <p>Không có sản phẩm cho hãng {brand}</p>;

  return (
    <div className="brand-product-container">
      <h2 className="brand-title">{brand.toUpperCase()}</h2>
      <div className="product-grid">
        {brandProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link
              to={`/chitiet/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                className="product-main-image"
                src={product.image}
                alt={product.title}
              />
              <h3>{product.title}</h3>
            </Link>

            {/* Hiển thị giá tiền */}
            <p className="product-price">{formatPrice(product.price)}</p>

            <div className="product-actions">
              <button
                className="btn-add-cart"
                onClick={() => addToCart(product)}
              >
                <i className="fa-solid fa-cart-plus"></i> Thêm vào giỏ
              </button>

              <button
                className="btn-buy-now"
                onClick={() => {
                  addToCart(product);
                  window.location.href = "/cart";
                }}
              >
                Mua ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
