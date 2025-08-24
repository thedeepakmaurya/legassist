"use client";
import SignUpForm from "@/components/molecules/SignUpForm";
import AuthTemplate from "@/components/templates/AuthTemplate";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProviderWrapper } from "@/context/FormContext";
import { signUpSchema } from "@/lib/validations/schema";

export default function SignUp() {
  return (
    <AuthTemplate>
      <FormProviderWrapper
        defaultValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        resolver={yupResolver(signUpSchema)}
      >
        <SignUpForm />
      </FormProviderWrapper>
    </AuthTemplate>
  );
}
