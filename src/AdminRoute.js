import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // Nếu không có user, chuyển tới login
  if (!user) return <Navigate to="/login" />;

  // Nếu user không phải admin (role !== 1) → chuyển về trang chủ
  if (user.role !== 1) return <Navigate to="/" />;

  return children;
}
