import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { TextField } from "@mui/material"
import { toast } from "react-toastify"
import API from "../api/axios"

const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", password: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await API.post("/api/auth/register", form)

      toast.success("Registration successful")
      navigate("/login")
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Registration failed")
    }
  }

  return (
    <div className="h-screen text-white flex items-center justify-center px-4">
      <div className="bg-secondary p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Create Account
          </h2>
          <p className="text-sm text-gray-400">
            Sign up to start building your playlists.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Name"
            name="name"
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
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
