"use client";
import SignUpForm from "@/components/molecules/SignUpForm";
import AuthTemplate from "@/components/templates/AuthTemplate";
import { yupResolver } from "@hookform/resolvers/yup";
import { RHFProvider } from "@/context/FormContext";
import { signUpSchema } from "@/lib/validations/schema";

export default function SignUp() {
  return (
    <AuthTemplate>
      <RHFProvider
        defaultValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        resolver={yupResolver(signUpSchema)}
      >
        <SignUpForm />
      </RHFProvider>
    </AuthTemplate>
  );
}
