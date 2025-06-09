import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./routes/ProtectedRoute"
import Dashboard from "./pages/Dashboard"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Dashboard />
              </>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  )
}

export default App
