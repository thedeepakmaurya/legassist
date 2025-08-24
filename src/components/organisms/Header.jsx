"use client";
import Link from "next/link";
import Button from "../atoms/Button";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import SideBar from "./SideBar";

const Header = () => {
  const { currUser } = useAuth();
  const { name, email } = currUser || {};

  const [isSideMenu, setIsSideMenu] = useState(false);

  return (
    <>
      <header className="flex-between sticky top-0 mx-auto max-w-7xl rounded-lg bg-white/80 px-4 py-2 md:px-28">
        <Link className="text-primary flex items-center gap-2" href="/">
          <h1 className="flex flex-col text-2xl font-semibold">
            <span className="text-gradient">Legal </span>
            <span className="pl-6 text-xs font-normal text-gray-600">
              Assistant
            </span>
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          {!currUser?.name && (
            <Link href="/signin">
              <Button label="Sign in " />
            </Link>
          )}
          <button onClick={() => setIsSideMenu(!isSideMenu)}>
            <i className="ri-menu-3-line ri-xl md:hidden"></i>
          </button>
        </div>
      </header>
      {isSideMenu && <SideBar isSideMenu={isSideMenu} />}
    </>
  );
};

export default Header;
