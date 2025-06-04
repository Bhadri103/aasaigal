import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Heart } from "lucide-react";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md glass-effect rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
        <div className="text-center mb-12">
          <Heart
            className="mx-auto text-primary animate-pulse mb-6"
            size={64}
            fill="currentColor"
          />
          <h1 className="text-4xl font-playfair text-primary-dark mb-4 font-bold">
            Unlock Aasaigal
          </h1>
          <p className="text-2xl font-dancing-script text-primary-dark opacity-90">
            Step into our magical world
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
            <label className="block text-lg font-medium text-primary-dark mb-2 font-playfair">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border-2 border-primary-light rounded-xl focus:ring-4 focus:ring-primary-light/30 focus:border-primary transition-all duration-300 bg-white/50"
              required
            />
          </div>

          <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
            <label className="block text-lg font-medium text-primary-dark mb-2 font-playfair">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-primary-light rounded-xl focus:ring-4 focus:ring-primary-light/30 focus:border-primary transition-all duration-300 bg-white/50"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center font-poppins">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-6 rounded-xl hover:bg-primary-dark transform hover:scale-105 transition-all duration-300 font-poppins font-medium text-lg shadow-lg hover:shadow-xl"
          >
            Enter Our World
          </button>
        </form>
      </div>
    </div>
  );
}
