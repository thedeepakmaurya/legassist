import Queries from "./Queries";

const Profile = () => {
  return (
    <section className="mt-8">
      <div className="flex-center flex-col">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-black">
          <p className="text-4xl text-white">U</p>
        </div>
        <p className="mt-2 font-bold text-gray-900">User Name</p>
        <p className="text-sm text-gray-600">username@gmail.com</p>
      </div>
      <Queries />
    </section>
  );
};

export default Profile;
