import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    username: "",
    password_hash: "",
    fullname: "",
    email: "",
    role: 0, // 0 = user, 1 = admin
  });

  // 🔹 Lấy danh sách người dùng
  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from("tbl_user")
      .select("*")
      .order("id", { ascending: true });
    if (error) console.error("Lỗi khi tải người dùng:", error.message);
    else setUsers(data || []);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editingUser) setEditingUser({ ...editingUser, [name]: value });
    else setNewUser({ ...newUser, [name]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("tbl_user").insert([newUser]);
    if (error) alert("❌ Lỗi khi thêm người dùng: " + error.message);
    else {
      alert("✅ Thêm người dùng thành công!");
      setNewUser({
        username: "",
        password_hash: "",
        fullname: "",
        email: "",
        role: 0,
      });
      fetchUsers();
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const { id, ...updated } = editingUser;
    const { error } = await supabase
      .from("tbl_user")
      .update(updated)
      .eq("id", id);
    if (error) alert("❌ Lỗi khi cập nhật người dùng: " + error.message);
    else {
      alert("✅ Cập nhật người dùng thành công!");
      setEditingUser(null);
      fetchUsers();
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa người dùng này không?")) {
      const { error } = await supabase.from("tbl_user").delete().eq("id", id);
      if (error) alert("❌ Lỗi khi xóa người dùng: " + error.message);
      else {
        alert("🗑️ Đã xóa người dùng!");
        fetchUsers();
      }
    }
  };

  // 🔹 CSS nội tuyến (theo tông hồng)
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
    usersGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
    },
    userCard: {
      backgroundColor: "#fff",
      borderRadius: "15px",
      padding: "15px",
      boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    userInfo: {
      fontSize: "14px",
      color: "#333",
      marginBottom: "8px",
    },
    role: {
      fontWeight: "bold",
      color: "#e6007e",
    },
    cardButtons: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "10px",
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
      <h2 style={styles.title}>👤 Quản lý người dùng</h2>

      <form onSubmit={editingUser ? handleEdit : handleAdd} style={styles.form}>
        <h3 style={styles.formTitle}>
          {editingUser ? "✏️ Chỉnh sửa người dùng" : "➕ Thêm người dùng mới"}
        </h3>

        <div style={styles.formGrid}>
          <input
            style={styles.input}
            name="username"
            placeholder="Tên đăng nhập"
            value={editingUser ? editingUser.username : newUser.username}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="password_hash"
            placeholder="Mật khẩu (hash)"
            value={
              editingUser ? editingUser.password_hash : newUser.password_hash
            }
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="fullname"
            placeholder="Họ và tên"
            value={editingUser ? editingUser.fullname : newUser.fullname}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="email"
            type="email"
            placeholder="Email"
            value={editingUser ? editingUser.email : newUser.email}
            onChange={handleChange}
            required
          />
          <select
            style={styles.input}
            name="role"
            value={editingUser ? editingUser.role : newUser.role}
            onChange={handleChange}
          >
            <option value={0}>User</option>
            <option value={1}>Admin</option>
          </select>
        </div>

        <div style={styles.formButtons}>
          {editingUser && (
            <button
              type="button"
              onClick={() => setEditingUser(null)}
              style={{ ...styles.btn, ...styles.cancelBtn }}
            >
              Hủy
            </button>
          )}
          <button type="submit" style={{ ...styles.btn, ...styles.submitBtn }}>
            {editingUser ? "Lưu thay đổi" : "Thêm người dùng"}
          </button>
        </div>
      </form>

      <div style={styles.usersGrid}>
        {users.map((u) => (
          <div
            key={u.id}
            style={styles.userCard}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <p style={styles.userInfo}>
              <strong>Username:</strong> {u.username}
            </p>
            <p style={styles.userInfo}>
              <strong>Fullname:</strong> {u.fullname}
            </p>
            <p style={styles.userInfo}>
              <strong>Email:</strong> {u.email}
            </p>
            <p style={styles.userInfo}>
              <strong>Role:</strong>{" "}
              <span style={styles.role}>{u.role === 1 ? "Admin" : "User"}</span>
            </p>
            <div style={styles.cardButtons}>
              <button onClick={() => setEditingUser(u)} style={styles.editBtn}>
                Sửa
              </button>
              <button
                onClick={() => handleDelete(u.id)}
                style={styles.deleteBtn}
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
