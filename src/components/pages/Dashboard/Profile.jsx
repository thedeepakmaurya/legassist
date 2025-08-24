"use client";
import Button from "@/components/atoms/Button";
import { useAuth } from "@/context/AuthContext";

const Profile = () => {
  const { currUser } = useAuth();
  const { name, email } = currUser || {};
  return (
    <div className="flex h-fit flex-col items-center rounded-xl py-4 shadow-lg md:col-span-2">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-black">
        <p className="text-4xl text-white capitalize">{name?.slice(0, 1)}</p>
      </div>
      <p className="mt-2 font-medium text-gray-900">
        {name} <i className="ri-verified-badge-fill text-gradient ri-lg"></i>
      </p>
      <p className="mb-4 text-sm text-gray-600">{email}</p>
      <Button label="Edit Profile" />
    </div>
  );
};

export default Profile;
