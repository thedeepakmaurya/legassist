const SideBar = ({ isSideMenu }) => {
  return (
    <div
      className={`fixed top-14 right-0 z-50 h-full w-full transform bg-white transition-transform duration-500 ease-in-out md:top-20 md:w-80 ${
        isSideMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <p className="py-4 text-center">&copy; 2025. All rights reserved.</p>
    </div>
  );
};

export default SideBar;
