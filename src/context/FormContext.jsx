"use client";

import { FormProvider, useForm } from "react-hook-form";

export const FormProviderWrapper = ({ children, defaultValues, resolver }) => {
  const methods = useForm({
    defaultValues,
    resolver,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
