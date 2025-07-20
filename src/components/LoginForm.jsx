import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    onLogin(e, email, password);
  };

  return (
    <>
      <p className="mb-1 text-lg font-semibold text-center text-gray-700">
        Welcome Back
      </p>
      <p className="mb-6 text-sm text-center text-gray-500">
        Sign in to your admin dashboard
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center w-full py-2 text-white bg-gray-900 rounded-md hover:bg-gray-800"
        >
          <LockClosedIcon className="w-4 h-4 mr-2" />
          Sign In
        </button>
      </form>
    </>
  );
}
