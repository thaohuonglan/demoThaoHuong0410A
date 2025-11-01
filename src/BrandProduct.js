import React from "react";
import { useParams, useOutletContext, Link } from "react-router-dom";
import { products } from "./data/product";
import "./css/product.css";

const BrandProduct = () => {
  const { brand } = useParams();
  const { addToCart } = useOutletContext();

  if (!brand) return <p>Không có hãng được chọn</p>;

  const brandProducts = products.filter(
    (p) => p.category.toLowerCase() === brand.toLowerCase()
  );

  return (
    <div className="brand-product-container">
      <h2 className="brand-title">{brand.toUpperCase()}</h2>
      <div className="product-grid">
        {brandProducts.map((product) => (
          <div key={product.id} className="product-card">
            {/* Link tới trang chi tiết */}
            <Link to={`/chitiet/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <img
                className="product-main-image"
                src={product.image}
                alt={product.title}
              />
              <h3>{product.title}</h3>
            </Link>

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
