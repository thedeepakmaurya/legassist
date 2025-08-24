"use client";

import { useRHF } from "@/context/FormContext";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
import { errorToast } from "@/utils/toastMessage";
import { useAuth } from "@/context/AuthContext";
import Cookies from "js-cookie";

const SignInForm = () => {
  const router = useRouter();
  const { users } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useRHF();

  const onSubmit = (data) => {
    const userExists = users.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    if (userExists) {
      const { name, email } = userExists;
      localStorage.setItem("currentUser", JSON.stringify({ name, email }));
      const randomToken = Math.random().toString(36).substring(2, 15);
      Cookies.set("authToken", randomToken, { path: "/", expires: 1 });
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
        fieldName="email"
        type="email"
        placeholder="Email address"
        errors={errors}
      />
      <Input
        {...register("password")}
        fieldName="password"
        type="password"
        placeholder="Enter password"
        errors={errors}
      />
      <Button disabled={isSubmitting} type="submit" label="Signin" className="w-full rounded-lg disabled:cursor-not-allowed" />
    </form>
  );
};

export default SignInForm;
