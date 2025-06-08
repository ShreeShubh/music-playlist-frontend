import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { TextField } from "@mui/material"
import { toast } from "react-toastify"

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", form)
      //console.log(res)

      localStorage.setItem("token", res.data.accessToken)
      localStorage.setItem("user", JSON.stringify(res.data.user))

      toast.success("Login successful")
      navigate("/dashboard")
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login failed")
    }
  }

  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="bg-secondary p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Sign in to Music Playlist Management System
          </h2>
          <p className="text-sm text-gray-400">
            Manage your playlists and discover new music.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            onChange={handleChange}
            variant="outlined"
            sx={{
              input: {
                backgroundColor: "#2a2a2a",
                color: "white",
                borderRadius: 1,
              },
              label: {
                color: "#ccc",
              },
              "& label.Mui-focused": {
                color: "#1BD760",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "#444",
                },
                "&:hover fieldset": {
                  borderColor: "#888",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1BD760",
                },
              },
            }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
            variant="outlined"
            sx={{
              input: {
                backgroundColor: "#2a2a2a",
                color: "white",
                borderRadius: 1,
              },
              label: {
                color: "#ccc",
              },
              "& label.Mui-focused": {
                color: "#1BD760",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "#444",
                },
                "&:hover fieldset": {
                  borderColor: "#888",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1BD760",
                },
              },
            }}
          />
          <button
            type="submit"
            className="w-full bg-accent text-black py-2.5 rounded-full font-medium transition transform hover:scale-105 duration-300 shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
