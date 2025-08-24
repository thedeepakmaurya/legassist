"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
// import { useRHF } from "@/context/FormContext";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

const SignUpForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useFormContext();

  console.log(errors);

  const onSubmit = (data) => {
    let signUpData = JSON.parse(localStorage.getItem("signUp")) || [];
    signUpData.push(data);
    localStorage.setItem("signUp", JSON.stringify(signUpData));
    reset();
    router.push("/signin");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("name")}
        placeholder="Enter name"
        error={errors.name?.message}
      />
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
      <Input
        {...register("confirmPassword")}
        type="password"
        placeholder="Re enter password"
        error={errors.confirmPassword?.message}
      />
      <Button
        disabled={isSubmitting}
        type="submit"
        label="Signup"
        className="w-full rounded-lg disabled:cursor-not-allowed"
      />
    </form>
  );
};

export default SignUpForm;
