"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignupPage() {
  const router = useRouter();
  const [signupMethod, setSignupMethod] = useState<
    "google" | "email" | "phone"
  >("google");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${window.location.origin}/userinfo` },
      });
      if (error) throw error;
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignup = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/userinfo` },
      });
      if (error) throw error;
      alert("Check your email to confirm signup.");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`;
      const { error } = await supabase.auth.signInWithOtp({
        phone: formattedPhone,
      });
      if (error) throw error;
      setOtpSent(true);
      alert("OTP sent!");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`;
      const { error } = await supabase.auth.verifyOtp({
        phone: formattedPhone,
        token: otp,
        type: "sms",
      });
      if (error) throw error;
      router.push("/userinfo");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#000000] overflow-hidden">
      {/* Background image */}
      <Image
        src="/login/login-bg.png"
        alt="bg img"
        width={500}
        height={500}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
      />

      {/* Centered signup box */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="max-w-md w-full bg-black/60 px-8 py-10 rounded-2xl shadow-xl border border-gray-700 space-y-6">
          {/* Logo and Title */}
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/login/logo.jpeg"
              alt="logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <h2 className="text-xl font-semibold text-gray-200">
              The Law <br /> Classrooms
            </h2>
          </div>

          <h2 className="font-bold text-center text-white text-lg">
            Create your account
          </h2>

          {/* Signup method buttons */}
          <div className="flex justify-center gap-3">
            {["google", "email", "phone"].map((method) => (
              <button
                key={method}
                onClick={() => {
                  setSignupMethod(method as any);
                  setOtpSent(false);
                  setOtp("");
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  signupMethod === method
                    ? "bg-[#e2a600] text-black shadow-sm"
                    : "bg-black text-gray-100 hover:bg-gray-900"
                }`}
              >
                {method.charAt(0).toUpperCase() + method.slice(1)}
              </button>
            ))}
          </div>

          {/* Google Signup */}
          {signupMethod === "google" && (
            <button
              onClick={handleGoogleSignup}
              className="w-full bg-black hover:bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold shadow flex items-center justify-center gap-3 transition-all"
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

          {/* Email Signup */}
          {signupMethod === "email" && (
            <>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border bg-black text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition-all"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-4 border bg-black text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition-all"
              />
              <button
                onClick={handleEmailSignup}
                className="w-full mt-4 bg-[#ff9f10] hover:bg-yellow-500 text-black py-3 rounded-lg font-semibold transition-all shadow"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up with Email"}
              </button>
            </>
          )}

          {/* Phone Signup */}
          {signupMethod === "phone" && (
            <>
              {!otpSent ? (
                <>
                  <input
                    type="text"
                    placeholder="+91xxxxxxxxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 text-white border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition-all"
                  />
                  <button
                    onClick={handleSendOtp}
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-all shadow mt-2"
                    disabled={loading}
                  >
                    {loading ? "Sending OTP..." : "Send OTP"}
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <button
                    onClick={handleVerifyOtp}
                    className="w-full bg-[#e9cb21] hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mt-2 transition-all shadow"
                    disabled={loading}
                  >
                    {loading ? "Verifying..." : "Verify OTP & Continue"}
                  </button>
                </>
              )}
            </>
          )}

          {/* Footer */}
          <div className="text-center text-sm text-gray-300">
            Already have an account?{" "}
            <button
              className="text-[#c58026] hover:text-[#ffdd1b] underline font-medium transition-all"
              onClick={() => router.push("/login")}
            >
              Login here
            </button>
            <br />
            <br />
            <p className="text-center text-sm text-gray-300 bg-white/10 backdrop-blur-md px-4 py-2 rounded-md">
              By signing up, you agree to our{" "}
              <span className="text-[#ffc74e]">Terms and Conditions</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
