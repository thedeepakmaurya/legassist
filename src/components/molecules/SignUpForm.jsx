"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { useRHF } from "@/context/FormContext";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useRHF();

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
        fieldName="name"
        placeholder="Enter name"
        errors={errors}
      />
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
      <Input
        {...register("confirmPassword")}
        fieldName="confirmPassword"
        type="password"
        placeholder="Re enter password"
        errors={errors}
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
