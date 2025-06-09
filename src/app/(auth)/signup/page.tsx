"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/lib/supabaseClient";

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [password, setPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const dummyOtp = "123456";
  const [loading, setLoading] = useState(false);

  // Handle avatar preview
  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
      setAvatarPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Basic step 1 validations
  const validateStep1 = (): string | null => {
    if (!name.trim()) return "Name is required";
    if (!username.trim()) return "Username is required";
    if (email && !email.includes("@")) return "Please enter a valid email";
    if (!phone.trim() || phone.length < 10)
      return "Valid phone number is required";
    if (!termsAccepted) return "You must accept the Terms and Conditions";
    return null;
  };

  // Password strength check
  const isStrongPassword = (pw: string) => {
    // Min 8 chars, at least 1 uppercase, 1 lowercase, 1 number, 1 special char
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      pw
    );
  };

  // Step 2 validations: password + OTP
  const validateStep2 = (): string | null => {
    if (!password) return "Password is required.";
    if (!isStrongPassword(password))
      return "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
    if (otp !== dummyOtp) return "Invalid OTP.";
    return null;
  };

  // Proceed to step 2 after step 1 validation and OTP sending
  const proceedToStep2 = () => {
    const error = validateStep1();
    if (error) {
      alert(error);
      return;
    }
    alert(
      `Sending OTP to ${
        email ? `email: ${email}` : `phone: ${phone}`
      } (Dummy OTP: ${dummyOtp})`
    );
    setOtpSent(true);
    setStep(2);
  };

  // Final step: verify OTP & password, then simulate registration success
  const verifyOtpAndRegister = () => {
    const error = validateStep2();
    if (error) {
      alert(error);
      return;
    }

    setLoading(true);
    const newUserId = uuidv4();

    // Simulate backend user creation (replace with actual supabase logic as needed)
    setTimeout(() => {
      setLoading(false);
      alert(`Registration successful! Your user ID: ${newUserId}`);
      router.push("/login");
    }, 1500);
  };

  // Google OAuth Sign-In
  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      alert(`Google sign-in error: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#000000] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/login/login-bg.png"
          alt="Background"
          width={500}
          height={500}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
        />
      </div>

      <div className="relative z-10 w-[380px] sm:w-full sm:max-w-md bg-black/60 px-6 py-8 rounded-2xl shadow-xl border border-gray-700 space-y-6">
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/login/logo.jpeg"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h2 className="text-xl font-semibold text-gray-200">
            The Law <br /> Classrooms
          </h2>
        </div>

        <h2 className="font-bold text-center text-white">
          Create Your Account
        </h2>

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-[#1b1919] hover:bg-[#f81f02] text-white py-3 rounded-lg font-semibold transition-all shadow"
        >
          <img src="icons/google.png" alt="Google Icon" className="w-6 h-6" />
          {loading ? "Processing..." : "Sign up with Google"}
        </button>

        <div className="text-gray-400 text-center my-2">OR</div>

        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition-all text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
            <input
              type="text"
              placeholder="Username *"
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition-all text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition-all text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <input
              type="text"
              placeholder="+91xxxxxxxxxx *"
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition-all text-white"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />

            <div>
              <label
                htmlFor="avatar-upload"
                className="block mb-1 text-white font-medium cursor-pointer"
              >
                Upload Avatar
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="text-white"
                disabled={loading}
              />

              {avatarPreview && (
                <img
                  src={avatarPreview}
                  alt="Avatar Preview"
                  className="mt-2 w-20 h-20 rounded-full object-cover border border-gray-300"
                />
              )}
            </div>

            <label className="flex items-center gap-2 text-white select-none">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                disabled={loading}
              />
              I accept the{" "}
              <span className="text-[#ffc74e] cursor-pointer underline">
                Terms and Conditions
              </span>
            </label>

            <button
              onClick={proceedToStep2}
              disabled={loading || !termsAccepted}
              className="w-full bg-[#000] cursor-pointer hover:bg-[#ff9f10] text-white py-3 rounded-lg font-semibold transition-all shadow disabled:opacity-50"
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              verifyOtpAndRegister();
            }}
            noValidate
            aria-describedby="step2-desc"
          >
            <p
              id="step2-desc"
              className="text-yellow-400 text-center mb-4"
              aria-live="polite"
            >
              Enter the OTP sent to your {email ? "email" : "phone"}.
              <br />
              (Use OTP: {dummyOtp})
            </p>

            <input
              type="text"
              name="otp"
              id="otp"
              placeholder="Enter OTP"
              className="w-full px-4 py-2 mb-3 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition-all text-white"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={loading}
              inputMode="numeric"
              pattern="[0-9]*"
              required
              aria-required="true"
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password *"
              className="w-full px-4 py-2 mb-4 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition-all text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              autoComplete="new-password"
              required
              aria-required="true"
            />

            <button
              type="submit"
              disabled={loading || otp.length === 0}
              className="w-full bg-[#000] hover:bg-[#ff9f10] text-white py-3 rounded-lg font-semibold transition-all shadow disabled:opacity-50"
              aria-disabled={loading || otp.length === 0}
            >
              {loading ? "Verifying..." : "Complete Registration"}
            </button>

            <button
              type="button"
              onClick={() => {
                setStep(1);
                setOtpSent(false);
                setOtp("");
              }}
              disabled={loading}
              className="w-full mt-3 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-semibold transition-all"
            >
              Back
            </button>
          </form>
        )}

        <div className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <button
            className="text-[#c58026] hover:text-[#ffdd1b] underline font-medium transition-all"
            onClick={() => router.push("/login")}
            disabled={loading}
          >
            Login here
          </button>
        </div>
      </div>
    </div>
  );
}
