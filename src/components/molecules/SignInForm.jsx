"use client";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
import { errorToast, successToast } from "@/utils/toastMessage";
import { useAuth } from "@/context/AuthContext";
import Cookies from "js-cookie";
import { useFormContext } from "react-hook-form";

const SignInForm = () => {
  const router = useRouter();
  const { users } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useFormContext();

  const onSubmit = (data) => {
    const userExists = users.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    if (userExists) {
      const { name, email } = userExists;
      localStorage.setItem("currentUser", JSON.stringify({ name, email }));
      const randomToken = Math.random().toString(36).substring(2, 15);
      Cookies.set("authToken", randomToken, { path: "/", expires: 1 });
      successToast("Sign in successful");
      reset();
      router.replace("/dashboard");
    } else {
      errorToast("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("email")}
        type="email"
        placeholder="Email address"
        error={errors.email?.message}
      />
      <Input
        {...register("password")}
        type="password"
        placeholder="Enter password"
        error={errors.password?.message}
      />
      <Button
        disabled={isSubmitting}
        type="submit"
        label="Signin"
        className="w-full rounded-lg disabled:cursor-not-allowed"
      />
    </form>
  );
};

export default SignInForm;
