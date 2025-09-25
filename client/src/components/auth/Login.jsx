import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginSuccess({ name: "Demo User", email, role }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h2 className="text-2xl font-bold">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2 rounded w-64">
        <option>Admin</option>
        <option>Librarian</option>
        <option>Student</option>
      </select>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
