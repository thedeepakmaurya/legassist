"use client";
import { FormProvider, useForm } from "react-hook-form";
import { createContext, useContext } from "react";

const RHFContext = createContext(null);

export const RHFProvider = ({ children, defaultValues, resolver }) => {
  const methods = useForm({ defaultValues, resolver });

  return (
    <RHFContext.Provider value={methods}>
      <FormProvider {...methods}>{children}</FormProvider>
    </RHFContext.Provider>
  );
};

export const useRHF = () => useContext(RHFContext);
