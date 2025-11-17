import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
    rating_rate: "",
    rating_count: "",
  });

  // 🔹 Lấy danh sách sản phẩm từ bảng sanpham
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("sanpham")
      .select("*")
      .order("id", { ascending: true });
    if (error) console.error("Lỗi khi tải sản phẩm:", error.message);
    else setProducts(data || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) setEditingProduct({ ...editingProduct, [name]: value });
    else setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("sanpham").insert([newProduct]);
    if (error) alert("❌ Lỗi khi thêm sản phẩm: " + error.message);
    else {
      alert("✅ Thêm sản phẩm thành công!");
      setNewProduct({ title: "", price: "", image: "", rating_rate: "", rating_count: "" });
      fetchProducts();
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const { id, ...updated } = editingProduct;
    const { error } = await supabase.from("sanpham").update(updated).eq("id", id);
    if (error) alert("❌ Lỗi khi cập nhật sản phẩm: " + error.message);
    else {
      alert("✅ Cập nhật sản phẩm thành công!");
      setEditingProduct(null);
      fetchProducts();
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
      const { error } = await supabase.from("sanpham").delete().eq("id", id);
      if (error) alert("❌ Lỗi khi xóa sản phẩm: " + error.message);
      else {
        alert("🗑️ Đã xóa sản phẩm!");
        fetchProducts();
      }
    }
  };

  // 🔹 CSS nội tuyến
  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#ffe6f0",
      padding: "30px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      color: "#e6007e",
      fontSize: "28px",
      marginBottom: "30px",
    },
    form: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "15px",
      maxWidth: "800px",
      margin: "0 auto 40px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    formTitle: {
      color: "#ff66b3",
      marginBottom: "15px",
      fontSize: "20px",
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "15px",
    },
    input: {
      padding: "8px",
      borderRadius: "8px",
      border: "1px solid #ffb3d9",
      width: "100%",
    },
    formButtons: {
      marginTop: "15px",
      display: "flex",
      justifyContent: "flex-end",
      gap: "10px",
    },
    btn: {
      padding: "8px 15px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
    },
    submitBtn: {
      backgroundColor: "#e6007e",
      color: "#fff",
    },
    cancelBtn: {
      backgroundColor: "#ccc",
      color: "#fff",
    },
    productsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
    },
    productCard: {
      backgroundColor: "#fff",
      borderRadius: "15px",
      padding: "15px",
      boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    productImage: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "10px",
    },
    productTitle: {
      fontSize: "16px",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    price: {
      color: "#e6007e",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    rating: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "10px",
    },
    cardButtons: {
      display: "flex",
      justifyContent: "space-around",
    },
    editBtn: {
      backgroundColor: "#ffb3d9",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
    },
    deleteBtn: {
      backgroundColor: "#e6007e",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>🛠️ Quản lý sản phẩm (Admin)</h2>

      <form onSubmit={editingProduct ? handleEdit : handleAdd} style={styles.form}>
        <h3 style={styles.formTitle}>
          {editingProduct ? "✏️ Chỉnh sửa sản phẩm" : "➕ Thêm sản phẩm mới"}
        </h3>

        <div style={styles.formGrid}>
          <input
            style={styles.input}
            name="title"
            placeholder="Tên sản phẩm"
            value={editingProduct ? editingProduct.title : newProduct.title}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="price"
            type="number"
            min="0"
            placeholder="Giá"
            value={editingProduct ? editingProduct.price : newProduct.price}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="image"
            placeholder="URL hình ảnh"
            value={editingProduct ? editingProduct.image : newProduct.image}
            onChange={handleChange}
          />
          <input
            style={styles.input}
            name="rating_rate"
            type="number"
            min="0"
            max="5"
            step="0.1"
            placeholder="Đánh giá (0–5)"
            value={editingProduct ? editingProduct.rating_rate : newProduct.rating_rate}
            onChange={handleChange}
          />
          <input
            style={styles.input}
            name="rating_count"
            type="number"
            min="0"
            placeholder="Số lượt đánh giá"
            value={editingProduct ? editingProduct.rating_count : newProduct.rating_count}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formButtons}>
          {editingProduct && (
            <button
              type="button"
              onClick={() => setEditingProduct(null)}
              style={{ ...styles.btn, ...styles.cancelBtn }}
            >
              Hủy
            </button>
          )}
          <button type="submit" style={{ ...styles.btn, ...styles.submitBtn }}>
            {editingProduct ? "Lưu thay đổi" : "Thêm sản phẩm"}
          </button>
        </div>
      </form>

      <div style={styles.productsGrid}>
        {products.map((p) => (
          <div
            key={p.id}
            style={styles.productCard}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <img src={p.image} alt={p.title} style={styles.productImage} />
            <h4 style={styles.productTitle}>{p.title}</h4>
            <p style={styles.price}>${p.price}</p>
            <p style={styles.rating}>⭐ {p.rating_rate} ({p.rating_count})</p>
            <div style={styles.cardButtons}>
              <button onClick={() => setEditingProduct(p)} style={styles.editBtn}>
                Sửa
              </button>
              <button onClick={() => handleDelete(p.id)} style={styles.deleteBtn}>
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
