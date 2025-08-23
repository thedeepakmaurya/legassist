"use client";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import AuthTemplate from "@/components/templates/AuthTemplate";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AuthTemplate>
      <form>
        <Input
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
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
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Re enter password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <Button label="Signup" className="w-full rounded-lg" />
      </form>
    </AuthTemplate>
  );
}
