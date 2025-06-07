'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function UserInfoPage() {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push('/login');
      } else {
        setSession(data.session.user);
        checkProfile(data.session.user.id);
      }
    });
  }, [router]);

  async function checkProfile(userId: string) {
    const { data } = await supabase.from('profiles').select('*').eq('id', userId).single();
    if (data && data.full_name && data.username) {
      router.push('/dashboard');
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
    }
  };

  const uploadAvatar = async () => {
    if (!avatarFile || !session) return null;
    const fileExt = avatarFile.name.split('.').pop();
    const fileName = `${session.user.id}/${uuidv4()}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, avatarFile, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) throw uploadError;

    const { data: publicUrlData } = supabase.storage.from('avatars').getPublicUrl(filePath);
    return publicUrlData.publicUrl;
  };

  const handleSave = async () => {
    if (!fullName.trim() || !username.trim()) {
      alert('Full Name and Username are required');
      return;
    }

    setLoading(true);
    try {
      let uploadedAvatarUrl = avatarUrl;

      if (avatarFile) {
        uploadedAvatarUrl = await uploadAvatar();
        if (!uploadedAvatarUrl) throw new Error('Failed to upload profile picture');
      }

      const updates = {
        id: session.id,
        full_name: fullName,
        username,
        phone,
        avatar_url: uploadedAvatarUrl,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from('profiles').upsert(updates);
      if (error) throw error;

      router.push('/dashboard');
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!session) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto p-6 mt-12 bg-white rounded shadow space-y-6">
      <h1 className="text-3xl font-bold text-center">Complete Your Profile</h1>

      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Contact Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <div>
        <label className="block mb-1 font-medium">Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full mb-2"
        />
        {avatarFile && (
          <img
            src={URL.createObjectURL(avatarFile)}
            alt="Preview"
            className="h-24 w-24 rounded-full object-cover mt-2"
          />
        )}
      </div>

      <button
        onClick={handleSave}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded font-semibold"
      >
        {loading ? 'Saving...' : 'Save Profile'}
      </button>
    </div>
  );
}
