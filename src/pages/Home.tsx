import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="h-screen text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-accent">
          Music Playlist Manager
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto">
          Create and manage your favorite playlists, search songs via Spotify,
          and vibe to your personal collection with ease.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button
            onClick={() => navigate("/login")}
            className="bg-accent text-black font-semibold px-7 py-3 rounded-full transition-transform transform hover:scale-105 shadow-lg"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="border border-gray-300 hover:border-accent text-white font-semibold px-7 py-3 rounded-full transition-transform transform hover:scale-105 shadow-sm"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
