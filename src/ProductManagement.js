import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient"; // Đảm bảo bạn đã cấu hình Supabase đúng

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch sản phẩm từ Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("sanpham")
          .select("*");

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

  // Xóa sản phẩm
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Bạn chắc chắn muốn xóa sản phẩm này?");
    if (confirmDelete) {
      try {
        const { error } = await supabase
          .from("sanpham")
          .delete()
          .eq("id", id);

        if (error) throw error;
        setProducts(products.filter((product) => product.id !== id)); // Cập nhật lại danh sách sản phẩm sau khi xóa
      } catch (err) {
        console.error("Lỗi khi xóa sản phẩm:", err.message);
      }
    }
  };

  // Chỉnh sửa sản phẩm
  const handleEdit = async (id) => {
    const newName = prompt("Nhập tên sản phẩm mới:");
    const newPrice = prompt("Nhập giá sản phẩm mới:");

    if (newName && newPrice) {
      try {
        const { error } = await supabase
          .from("sanpham")
          .update({ name: newName, price: newPrice })
          .eq("id", id);

        if (error) throw error;
        setProducts((prev) =>
          prev.map((product) =>
            product.id === id
              ? { ...product, name: newName, price: newPrice }
              : product
          )
        );
      } catch (err) {
        console.error("Lỗi khi chỉnh sửa sản phẩm:", err.message);
      }
    }
  };

  if (loading) return <p>Đang tải sản phẩm...</p>;
  if (products.length === 0) return <p>Không có sản phẩm nào.</p>;

  return (
    <div>
      <h3>Danh sách sản phẩm</h3>
      <table className="product-table">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Hình ảnh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price} VNĐ</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>
                <button onClick={() => handleEdit(product.id)}>Sửa</button>
                <button onClick={() => handleDelete(product.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CSS tích hợp trong file */}
      <style>
        {`
          .product-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }

          .product-table th,
          .product-table td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
          }

          .product-table th {
            background-color: #f4f4f4;
          }

          .product-table img {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }

          button {
            padding: 5px 10px;
            margin: 5px;
            cursor: pointer;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
          }

          button:hover {
            background-color: #45a049;
          }

          button:active {
            background-color: #3e8e41;
          }

          button + button {
            background-color: #f44336; /* Đỏ cho nút xóa */
          }

          button + button:hover {
            background-color: #d32f2f;
          }
        `}
      </style>
    </div>
  );
};

export default ProductManagement;
