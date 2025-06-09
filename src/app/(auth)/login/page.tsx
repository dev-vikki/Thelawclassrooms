"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [waitingForOtp, setWaitingForOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetInitiated, setResetInitiated] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) router.push("/dashboard");
    });
  }, [router]);

  const isPhone = (val: string) => /^\d{10}$/.test(val.trim());
  const isEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/dashboard` },
    });
    if (error) alert(error.message);
    setLoading(false);
  };

  const handleLogin = async () => {
    if (isPhone(input)) {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({
        phone: `+91${input.trim()}`,
        options: { channel: "sms" },
      });
      if (error) alert(error.message);
      else setWaitingForOtp(true);
      setLoading(false);
    } else if (isEmail(input)) {
      if (!password) return alert("Enter your password.");
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email: input.trim(),
        password,
      });
      if (error) alert(error.message);
      else router.push("/dashboard");
      setLoading(false);
    } else {
      alert("Enter a valid email or 10-digit phone number.");
    }
  };

  const handleOtpVerify = async () => {
    setLoading(true);
    const { error } = await supabase.auth.verifyOtp({
      phone: `+91${input.trim()}`,
      token: otp,
      type: "sms",
    });
    if (error) alert(error.message);
    else router.push("/dashboard");
    setLoading(false);
  };

  const handleForgotPassword = async () => {
    if (!isEmail(input)) return alert("Enter your registered email.");
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(input.trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) alert(error.message);
    else {
      alert("Password reset link sent to your email.");
      setResetInitiated(true);
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background */}
      <Image
        src="/login/login-bg.png"
        alt="Background"
        width={800}
        height={800}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-40 z-0"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="w-full max-w-md bg-black/60 border border-gray-700 rounded-2xl p-8 shadow-xl space-y-6">
          {/* Logo */}
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/login/logo.jpeg"
              alt="logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <h2 className="text-xl text-white font-semibold text-center leading-tight">
              The Law Classrooms
            </h2>
          </div>

          <h3 className="text-white text-center font-bold">
            Login to Your Account
          </h3>

          {/* Google Auth Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white hover:bg-gray-100 text-black py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            disabled={loading}
          >
            <Image
              src="/icons/google.png"
              alt="Google"
              width={20}
              height={20}
            />
            {loading ? "Please wait..." : "Login with Google"}
          </button>

          {/* Unified Input */}
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-full px-4 py-2 bg-black border border-gray-500 rounded-lg text-white placeholder-gray-400"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setWaitingForOtp(false);
              setResetInitiated(false);
            }}
          />

          {/* Password field (only if email) */}
          {isEmail(input) && !waitingForOtp && (
            <>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 bg-black border border-gray-500 rounded-lg text-white placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="text-right">
                <button
                  className="text-sm text-yellow-300 hover:text-yellow-100 underline mt-1"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </button>
              </div>
            </>
          )}

          {/* OTP field (only if phone) */}
          {isPhone(input) && waitingForOtp && (
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          )}

          {/* Action Button */}
          <button
            onClick={waitingForOtp ? handleOtpVerify : handleLogin}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-lg font-semibold"
            disabled={loading}
          >
            {loading
              ? waitingForOtp
                ? "Verifying..."
                : "Processing..."
              : waitingForOtp
              ? "Verify OTP"
              : "Login"}
          </button>

          {/* Footer */}
          <div className="text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <button
              className="text-yellow-400 underline hover:text-yellow-200"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
