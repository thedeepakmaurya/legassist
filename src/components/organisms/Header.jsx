"use client";
import Link from "next/link";
import Button from "../atoms/Button";
import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user);
  }, []);

  return (
    <header className="flex-between sticky top-0 bg-white/80 rounded-lg px-4 py-2">
      <Link className="text-primary flex items-center gap-2" href="/">
        <h1 className="flex flex-col text-2xl font-semibold">
          Legal{" "}
          <span className="pl-6 text-xs font-normal text-gray-600">
            Assistant
          </span>
        </h1>
      </Link>
      <div>
        {user ? (
          <Link href="/profile">
            <p className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-medium text-white">
              {user?.name || "U"}
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
