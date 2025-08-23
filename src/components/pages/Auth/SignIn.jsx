"use client";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import AuthTemplate from "@/components/templates/AuthTemplate";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AuthTemplate>
      <form>
        <Input
          name="email"
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button label="Signin" className="w-full rounded-lg" />
      </form>
    </AuthTemplate>
  );
}
