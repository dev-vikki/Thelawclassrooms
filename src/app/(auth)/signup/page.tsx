"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
  const [loading, setLoading] = useState(false);

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
      setAvatarPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const validateStep1 = (): string | null => {
    if (!name.trim()) return "Name is required";
    if (!username.trim()) return "Username is required";
    if (!email.includes("@")) return "Valid email is required";
    if (!phone.trim() || phone.length < 10) return "Phone number is invalid";
    if (!password || password.length < 6)
      return "Password must be at least 6 characters";
    if (!termsAccepted) return "You must accept the Terms and Conditions";
    return null;
  };

  const uploadAvatarToSupabase = async (
    uid: string
  ): Promise<string | null> => {
    if (!avatar) return null;
    const fileExt = avatar.name.split(".").pop();
    const filePath = `avatars/${uid}.${fileExt}`;
    const { error } = await supabase.storage
      .from("avatars")
      .upload(filePath, avatar);

    if (error) {
      console.error("Avatar upload failed", error.message);
      return null;
    }

    const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);
    return data?.publicUrl || null;
  };

  const proceedToStep2 = () => {
    const error = validateStep1();
    if (error) {
      alert(error);
      return;
    }
    setStep(2);
  };

  const verifyOtpAndRegister = async () => {
    setLoading(true);

    // Step 1: Sign up
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email,
        password,
      }
    );

    if (signUpError) {
      alert("Signup failed: " + signUpError.message);
      setLoading(false);
      return;
    }

    const uid = signUpData?.user?.id;
    if (!uid) {
      alert("User ID missing.");
      setLoading(false);
      return;
    }

    // Step 2: Upload Avatar
    const avatarUrl = await uploadAvatarToSupabase(uid);

    // Step 3: Insert into `users` table
    const { error: insertError } = await supabase.from("users").insert([
      {
        id: uid,
        name,
        username,
        email,
        phone,
        avatar_url: avatarUrl,
        terms_accepted: termsAccepted,
      },
    ]);

    if (insertError) {
      alert("DB Insert failed: " + insertError.message);
      setLoading(false);
      return;
    }

    alert("Registration successful! Please verify your email.");
    setLoading(false);
    router.push("/login");
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) alert("Google sign-in error: " + error.message);
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/login/login-bg.png"
          alt="Background"
          width={500}
          height={500}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
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
          className="w-full flex items-center justify-center gap-3 bg-[#1b1919] hover:bg-[#f81f02] text-white py-3 rounded-lg font-semibold"
        >
          <img src="icons/google.png" alt="Google Icon" className="w-6 h-6" />
          {loading ? "Processing..." : "Sign up with Google"}
        </button>

        <div className="text-gray-400 text-center my-2">OR</div>

        {step === 1 && (
          <>
            <input
              className="input"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              placeholder="Username *"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="input"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input"
              placeholder="+91xxxxxxxxxx *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="Password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="block text-white font-medium mt-3">
              Upload Avatar
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="text-white"
            />
            {avatarPreview && (
              <img
                src={avatarPreview}
                className="mt-2 w-20 h-20 rounded-full object-cover"
              />
            )}

            <label className="flex items-center gap-2 text-white mt-2">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              I accept the{" "}
              <span className="text-yellow-400 underline cursor-pointer">
                Terms and Conditions
              </span>
            </label>

            <button
              onClick={proceedToStep2}
              disabled={!termsAccepted}
              className="w-full bg-[#000] hover:bg-[#ff9f10] text-white py-3 rounded-lg font-semibold"
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
          >
            <p className="text-yellow-400 text-center mb-4">
              Verify your account by clicking the link sent to your email.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#000] hover:bg-[#ff9f10] text-white py-3 rounded-lg font-semibold"
            >
              {loading ? "Registering..." : "Complete Registration"}
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full mt-3 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-semibold"
            >
              Back
            </button>
          </form>
        )}

        <div className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/login")}
            className="text-[#c58026] hover:text-[#ffdd1b] underline font-medium"
          >
            Login here
          </button>
        </div>
      </div>
    </div>
  );
}
