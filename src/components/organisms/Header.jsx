"use client";
import Link from "next/link";
import Button from "../atoms/Button";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const { currUser } = useAuth();
  const { name, email } = currUser || {};

  return (
    <header className="flex-between sticky top-0 rounded-lg bg-white/80 px-4 py-2 md:px-28">
      <Link className="text-primary flex items-center gap-2" href="/">
        <h1 className="flex flex-col text-2xl font-semibold">
          <span className="text-gradient">Legal </span>
          <span className="pl-6 text-xs font-normal text-gray-600">
            Assistant
          </span>
        </h1>
      </Link>
      <div>
        {currUser ? (
          <Link href="/dashboard">
            <p className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-medium text-white">
              {name?.slice(0, 1) || "U"}
            </p>
          </Link>
        ) : (
          <Link href="/signin">
            <Button label="Sign in " />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
