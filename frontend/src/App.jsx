import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
const App = () => {
  const {checkAuth, isCheckingAuth ,authUser} = useAuthStore()
  useEffect(() => {
    checkAuth()
  },[checkAuth])
  return (
    <div className="min-h-screen bg-zinc-950 relative flex items-center justify-center p-4 overflow-hidden text-zinc-300">
      {/* GRID BG & GLOW SHAPES */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Violet Glow */}
      <div className="absolute top-0 -left-4 size-96 bg-violet-500 opacity-20 blur-[120px]" />

      {/* Emerald Glow */}
      <div className="absolute bottom-0 -right-4 size-96 bg-emerald-500 opacity-15 blur-[120px]" />
      
      {/* Content */}
      
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
