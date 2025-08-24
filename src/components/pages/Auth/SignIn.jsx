"use client";
import AuthTemplate from "@/components/templates/AuthTemplate";
import SignInForm from "@/components/molecules/SignInForm";
import { RHFProvider } from "@/context/FormContext";
import { signInSchema } from "@/lib/validations/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthProvider } from "@/context/AuthContext";

export default function SignIn() {
  return (
    <AuthTemplate>
      <AuthProvider>
        <RHFProvider
          defaultValues={{
            email: "",
            password: "",
          }}
          resolver={yupResolver(signInSchema)}
        >
          <SignInForm />
        </RHFProvider>
      </AuthProvider>
    </AuthTemplate>
  );
}
