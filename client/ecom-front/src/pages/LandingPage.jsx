
import { useNavigate } from "react-router-dom";
import ProductCardList from "./ProductCardList";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between items-center px-8 py-4 border-b shadow-sm">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-800">Welcome</h1>
        </div>
        <div className="flex space-x-4 items-center">
          <button
            className="px-6 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center text-center px-8 py-16">
        <ProductCardList />
      </main>
    </div>
  );
}

export default LandingPage;