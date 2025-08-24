"use client";
import { AuthProvider } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AuthTemplate = ({ children }) => {
  const path = usePathname();

  return (
    <section className="mx-auto flex min-h-screen max-w-7xl">
      <div className="z-50 flex w-full flex-col justify-center px-8 md:w-1/2 md:px-16 lg:px-24">
        <div className="mx-auto w-full max-w-md">
          <h1 className="mb-4 text-3xl font-bold">
            {path === "/signup" ? "Sign up" : "Sign in"}
          </h1>
          <p className="mb-6 text-gray-600">
            {path === "/signup" ? "Sign up" : "Sign in"} today and let AI
            simplify your legal needs.
            <br />
            {path === "/signup"
              ? "Already registered"
              : "Don't have an account"}{" "}
            ?
            <Link
              href={path === "/signup" ? "/signin" : "/signup"}
              className="px-1 text-blue-600 hover:underline"
            >
              {path === "/signup" ? "Sign in here" : "Sign up here"}
            </Link>
          </p>
          <AuthProvider>{children}</AuthProvider>

          {path === "/signup" && (
            <p className="mt-6 text-sm text-gray-600">
              By signing up you agree to our
              <Link
                href="/privacy"
                className="px-1 text-blue-600 hover:underline"
              >
                Privacy Policy
              </Link>
              and
              <Link
                href="/terms"
                className="px-1 text-blue-600 hover:underline"
              >
                Terms of Service
              </Link>
              .
            </p>
          )}
        </div>
      </div>

      <div className="background-gradient hidden h-screen items-center justify-center md:flex md:w-1/2">
        <Link className="flex items-center gap-2 text-white" href="/">
          <h1 className="flex flex-col text-7xl font-semibold">
            <span className="">Legal </span>
            <span className="pt-3 pl-20 text-2xl font-normal">Assistant</span>
          </h1>
        </Link>
      </div>
    </section>
  );
};

export default AuthTemplate;
