import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-accent text-black px-6 py-2 rounded-full font-medium transition transform hover:scale-105 duration-300 shadow-md"
        >
          Go Home
        </button>
      </div>
    </div>
  )
}

export default NotFoundPage
