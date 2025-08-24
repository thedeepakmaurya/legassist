"use client";
import Button from "@/components/atoms/Button";
import { useAuth } from "@/context/AuthContext";
import { successToast } from "@/utils/toastMessage";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const { currUser } = useAuth();
  const { name, email } = currUser || {};

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("queries");
    Cookies.remove("authToken");
    successToast("Logout successful");
    router.refresh();
  };

  return (
    <div className="mx-auto flex h-fit w-full flex-col items-center rounded-xl py-4 shadow-lg md:sticky md:max-w-[50%] lg:max-w-full lg:top-28 lg:col-span-2">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-black">
        <p className="text-4xl text-white capitalize">{name?.slice(0, 1)}</p>
      </div>
      <p className="mt-2 font-medium text-gray-900">
        {name} <i className="ri-verified-badge-fill text-gradient ri-lg"></i>
      </p>
      <p className="mb-4 text-sm text-gray-600">{email}</p>
      <Button label="Logout" onClick={handleLogout} />
    </div>
  );
};

export default Profile;
