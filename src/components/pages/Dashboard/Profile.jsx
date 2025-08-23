import Button from "@/components/atoms/Button";

const Profile = () => {
  return (
    <div className="shadow-lg flex h-fit flex-col py-4 rounded-xl items-center md:col-span-2">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-black">
        <p className="text-4xl text-white">U</p>
      </div>
      <p className="mt-2 font-medium text-gray-900">
        User Name <i className="ri-verified-badge-fill text-gradient ri-lg"></i>
      </p>
      <p className="text-sm mb-4 text-gray-600">username@gmail.com</p>
      <Button label="Edit Profile" />
    </div>
  );
};

export default Profile;
