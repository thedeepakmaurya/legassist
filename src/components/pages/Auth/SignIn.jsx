"use client";
import AuthTemplate from "@/components/templates/AuthTemplate";
import SignInForm from "@/components/molecules/SignInForm";
import { signInSchema } from "@/lib/validations/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProviderWrapper } from "@/context/FormContext";

export default function SignIn() {
  return (
    <AuthTemplate>
        <FormProviderWrapper
          defaultValues={{
            email: "",
            password: "",
          }}
          resolver={yupResolver(signInSchema)}
        >
          <SignInForm />
        </FormProviderWrapper>
    </AuthTemplate>
  );
}
