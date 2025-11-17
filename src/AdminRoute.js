// AdminRoute.jsx
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // Chưa đăng nhập → về trang login
  if (!user) return <Navigate to="/login" replace />;

  // Không phải admin → quay về trang chủ
  if (Number(user.role) !== 1) return <Navigate to="/" replace />;

  return children;
}
