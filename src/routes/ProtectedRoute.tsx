import { Navigate } from "react-router-dom"
import type { ReactElement } from "react" // 👈 type-only import

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const token = localStorage.getItem("token")
  return token ? children : <Navigate to="/login" />
}

export default ProtectedRoute
