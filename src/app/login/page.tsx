"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState<"google" | "email" | "phone">(
    "google"
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [waitingForOtp, setWaitingForOtp] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        router.push("/dashboard");
      }
    });
  }, [router]);

  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
    if (error) alert(error.message);
    setLoading(false);
  };

  const handleEmailLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
    else router.push("/dashboard");
    setLoading(false);
  };

  const handleSendOtp = async () => {
    if (!phone) return alert("Enter a valid phone number");
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithOtp({
      phone,
      options: {
        channel: "sms",
      },
    });
    if (error) {
      alert(error.message);
    } else {
      setWaitingForOtp(true);
    }
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Enter OTP");
    setLoading(true);
    const { data, error } = await supabase.auth.verifyOtp({
      phone,
      token: otp,
      type: "sms",
    });
    if (error) {
      alert(error.message);
    } else {
      router.push("/dashboard");
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-[#000000] overflow-hidden">
      {/* Bottom center background image */}
      <Image
        src="/login/login-bg.png"
        alt="bg img"
        width={500}
        height={500}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
      />

      {/* Centered login box */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="max-w-md w-full bg-black/60  px-8 py-10 rounded-2xl shadow-xl border border-gray-700 space-y-6">
          {/* Mini logo/icon */}
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/login/logo.jpeg"
              alt="icon"
              width={60}
              height={60}
              className="rounded-full"
            />
            <h2 className="text-xl font-semibold text-gray-200">
              The Law <br />
              Classrooms
            </h2>
          </div>

          <h2 className=" font-bold text-center text-white">
            Welcome to The Law Classrooms
          </h2>

          {/* Login Method Selection */}
          <div className="flex justify-center gap-3">
            {["google", "email", "phone"].map((method) => (
              <button
                key={method}
                onClick={() => {
                  setLoginMethod(method as any);
                  setWaitingForOtp(false);
                  setOtp("");
                }}
                className={`px-4 py-2 rounded-md transition-all duration-200 font-medium text-sm ${
                  loginMethod === method
                    ? "bg-[#e2a600] text-black shadow-sm"
                    : "bg-[#000] text-gray-100 hover:bg-gray-900"
                }`}
              >
                {method.charAt(0).toUpperCase() + method.slice(1)}
              </button>
            ))}
          </div>

          {/* Google Login */}
          {loginMethod === "google" && (
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-[#000] hover:bg-[#111] text-white py-3 px-4 rounded-lg font-semibold shadow transition-all flex items-center justify-center gap-3"
              disabled={loading}
            >
              <Image
                src="/icons/google.png"
                alt="Google icon"
                width={20}
                height={20}
              />
              {loading ? "Please wait..." : "Continue with Google"}
            </button>
          )}

          {/* Email Login */}
          {loginMethod === "email" && (
            <>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition-all text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition-all text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={handleEmailLogin}
                className="w-full bg-[#000] hover:bg-[#ff9f10] text-white py-3 rounded-lg font-semibold transition-all shadow"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login with Email"}
              </button>
            </>
          )}

          {/* Phone Login */}
          {loginMethod === "phone" && (
            <>
              <input
                type="text"
                placeholder="+91xxxxxxxxxx"
                className="w-full px-4 py-2 text-white border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition-all"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {!waitingForOtp ? (
                <button
                  onClick={handleSendOtp}
                  className="w-full bg-[#000] hover:bg-[#181717] text-white py-3 rounded-lg font-semibold transition-all shadow"
                  disabled={loading}
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <button
                    onClick={handleVerifyOtp}
                    className="w-full bg-[#e9cb21] hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mt-2 transition-all shadow"
                    disabled={loading}
                  >
                    {loading ? "Verifying..." : "Verify OTP"}
                  </button>
                </>
              )}
            </>
          )}

          {/* Footer */}
          <div className="text-center text-sm text-gray-300">
            New user?{" "}
            <button
              className="text-[#c58026] hover:text-[#ffdd1b] underline font-medium transition-all"
              onClick={() => router.push("/signup")}
            >
              Sign up here
            </button>
            <br />
            <br />
            <p className="text-center text-sm text-gray-300 bg-white/10 backdrop-blur-md px-4 py-2 rounded-md">
              By using our services you are agreeing to our{" "}
              <span className="text-[#ffc74e]">Terms and Conditions</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
