"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { useRHF } from "@/context/FormContext";
import moment from "moment";

const AddQuery = ({ onClose, setAllQueries, allQueries }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useRHF();

  const onSubmit = (data) => {
    let newQueries = JSON.parse(localStorage.getItem("queries")) || [];
    const timeStampData = { ...data, createdAt: moment() };
    newQueries.push(timeStampData);
    setAllQueries([...allQueries, timeStampData]);
    localStorage.setItem("queries", JSON.stringify(newQueries));
    reset();
    onClose();
  };

  return (
    <div className="mx-auto rounded-2xl bg-white p-6 md:max-w-[75%]">
      <h2 className="mb-1 text-xl font-semibold text-gray-800">
        Submit Your Legal Query
      </h2>
      <p className="mb-8 text-gray-600">
        Please provide detailed information about your legal issue to help us
        assist you effectively.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("title")}
          fieldName="title"
          placeholder="Enter your legal query"
          errors={errors}
        />
        <div className="flex justify-end">
          <Button
            disabled={isSubmitting}
            type="submit"
            label="Submit Query"
            className="disabled:cursor-not-allowed"
          />
        </div>
      </form>
    </div>
  );
};

export default AddQuery;
