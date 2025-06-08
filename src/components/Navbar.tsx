import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Navbar = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setUserName(user.name || "")
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div
          className="text-xl font-bold cursor-pointer flex items-center gap-3"
          onClick={() => navigate("/")}
        >
          <img src="/logo.png" alt="logo" width={50} height={50} />
          <span className="text-accent">MPMS</span>
        </div>

        <div className="flex items-center gap-4">
          {userName && (
            <div className="flex items-center gap-2">
              <div
                className="bg-accent w-8 h-8 rounded-full flex items-center justify-center font-bold uppercase text-black"
                title={userName}
              >
                {userName[0]}
              </div>
              <span className="text-sm font-medium hidden sm:inline">
                {userName}
              </span>
            </div>
          )}

          <button
            className="bg-accent text-black px-5 py-2.5 rounded-full font-medium transition transform hover:scale-105 duration-300 shadow-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
