import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import logo from "../assets/logo.png";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer"
import {Link} from "react-router"
import { MessageCircleIcon, MailIcon, LoaderIcon, LockIcon } from "lucide-react";


const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };
  return (
    <div className="w-full flex items-center justify-center p-4 bg-zinc-950">
      <div className="relative w-full max-w-5xl md:h-[600px] min-h-[500px]">
        <BorderAnimatedContainer>
           <div className="w-full flex flex-col md:flex-row">
            {/* FORM CLOUMN - LEFT SIDE */}
             <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-zinc-800/30">
              <div className="w-full max-w-md">
                {/* Heading Text */}
                <div className="text-center mb-6">
                  
                  <img
                    src={logo}
                    alt="Pulse Logo"
                    className="w-14 h-14 mx-auto mb-4 object-contain"
                  />
                  <h2 className="text-2xl font-bold text-zinc-100 mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-zinc-400">Login to access to your account</p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Email */}
                  <div>
                    <label className="auth-input-label">Email</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />

                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="auth-input"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                  </div>
                  {/* password */}

                  <div>
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon " />

                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="auth-input"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    className="auth-btn"
                    type="submit"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link to="/signup" className="auth-login">
                    Don't have an account? Sign Up
                  </Link>
                </div>
              </div>
            </div>
            {/* FORM ILLUSTRATION - RIGHT SIDE */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-violet-500/10 via-transparent to-emerald-500/5">
              <div>
                <img
                  src="./login.png"
                  alt="People using mobile devices"
                  className="max-w-sm mx-auto object-contain"
                />

                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-violet-400">
                    Connect anytime, anywhere
                  </h3>

                  <div className="mt-4 flex justify-center gap-4">
                    <span className="auth-badge">Free</span>
                    <span className="auth-badge">Easy</span>
                    <span className="auth-badge">Secure</span>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
};

export default LoginPage;
