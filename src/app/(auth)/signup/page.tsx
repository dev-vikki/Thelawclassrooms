"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default function RegisterPage() {
  const router = useRouter();

  // Step control: 1 for user details + terms, 2 for OTP + password
  const [step, setStep] = useState<1 | 2>(1);

  // Form states
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const dummyOtp = "123456";

  // Loading and error states
  const [loading, setLoading] = useState(false);

  // Avatar file preview handler
  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
      setAvatarPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Step 1 validation (basic)
  const validateStep1 = (): string | null => {
    if (!name.trim()) return "Name is required.";
    if (!username.trim()) return "Username is required.";
    if (email && !email.includes("@")) return "Invalid email address.";
    if (!phone.trim() || phone.length < 10)
      return "Valid phone number is required.";
    if (!termsAccepted) return "You must accept the Terms and Conditions.";
    return null;
  };

  // Step 2 validation
  const validateStep2 = (): string | null => {
    if (!password) return "Password is required.";
    if (password !== confirmPassword) return "Passwords do not match.";
    return null;
  };

  // Proceed to Step 2 - send OTP (dummy here)
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

  // Register user in Supabase
  const verifyOtpAndRegister = async () => {
    const error = validateStep2();
    if (error) {
      alert(error);
      return;
    }
    if (otp !== dummyOtp) {
      alert("Invalid OTP. Please try again.");
      return;
    }

    setLoading(true);
    try {
      // 1. Create user in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            phone,
            name,
            username,
            terms_accepted: termsAccepted,
          },
        },
      });

      if (authError) {
        alert(`Auth error: ${authError.message}`);
        setLoading(false);
        return;
      }

      const userId = authData?.user?.id;
      if (!userId) {
        alert("Failed to retrieve user ID after sign-up.");
        setLoading(false);
        return;
      }

      // 2. Upload avatar if provided
      let avatar_url = null;
      if (avatarFile) {
        const fileExt = avatarFile.name.split(".").pop();
        const fileName = `${userId}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(fileName, avatarFile, { upsert: true });

        if (uploadError) {
          alert(`Avatar upload error: ${uploadError.message}`);
          setLoading(false);
          return;
        }

        // Get public URL
        const { data: publicUrlData } = supabase.storage
          .from("avatars")
          .getPublicUrl(fileName);
        avatar_url = publicUrlData.publicUrl;
      }

      // 3. Insert user profile in `users` table
      const { error: profileError } = await supabase.from("users").insert({
        id: userId,
        name,
        username,
        email,
        phone,
        password, // Note: storing plain password is NOT recommended in real apps; this is per your schema
        avatar_url,
        terms_accepted: termsAccepted,
      });

      if (profileError) {
        alert(`Profile insert error: ${profileError.message}`);
        setLoading(false);
        return;
      }

      alert("Registration successful! Please check your email to confirm.");
      router.push("/login");
    } catch (err) {
      alert(`Unexpected error: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  // Google OAuth Sign-in handler
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
    <div className="relative min-h-screen bg-[#000000] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/login/login-bg.png"
          alt="Background"
          width={500}
          height={500}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
          priority
        />
      </div>

      <div className="relative z-10 w-[380px] sm:max-w-md bg-black/60 px-6 py-8 rounded-2xl shadow-xl border border-gray-700 space-y-6">
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/login/logo.jpeg"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full"
            priority
          />
          <h2 className="text-xl font-semibold text-gray-200 whitespace-nowrap">
            The Law <br /> Classrooms
          </h2>
        </div>

        <h2 className="font-bold text-center text-white">
          Create Your Account
        </h2>

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-[#1b1919] hover:bg-[#f81f02] text-white py-3 rounded-lg font-semibold transition shadow"
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
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
            <input
              type="text"
              placeholder="Username *"
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Email (optional)"
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <input
              type="text"
              placeholder="+91xxxxxxxxxx *"
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition text-white"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />

            <div>
              <label
                htmlFor="avatar-upload"
                className="block mb-1 text-white font-medium cursor-pointer"
              >
                Upload Avatar (optional)
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                disabled={loading}
                className="text-white"
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
              className="w-full bg-[#000] hover:bg-[#ff9f10] text-white py-3 rounded-lg font-semibold transition shadow"
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="password"
              placeholder="Password *"
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition text-white mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Confirm Password *"
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition text-white mb-4"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={loading}
            />
            <p className="text-yellow-400 text-center my-2">
              Enter the OTP sent to your {email ? "email" : "phone"} (Dummy OTP:{" "}
              {dummyOtp})
            </p>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffb1b] transition text-white mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={loading}
            />

            <button
              onClick={verifyOtpAndRegister}
              disabled={loading || otp.length === 0}
              className="w-full bg-[#000] hover:bg-[#ff9f10] text-white py-3 rounded-lg font-semibold transition shadow"
            >
              {loading ? "Registering..." : "Complete Registration"}
            </button>

            <button
              onClick={() => {
                setStep(1);
                setOtpSent(false);
                setOtp("");
              }}
              disabled={loading}
              className="w-full mt-3 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-semibold transition"
            >
              Back
            </button>
          </>
        )}

        <div className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <button
            className="text-[#c58026] hover:text-[#ffdd1b] underline font-medium transition"
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
