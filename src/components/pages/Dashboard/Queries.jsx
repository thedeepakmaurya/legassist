"use client";
import Button from "@/components/atoms/Button";
import ModalOverlay from "@/components/common/OverlayModal";
import { useEffect, useState } from "react";
import AddQuery from "./AddQuery";
import { yupResolver } from "@hookform/resolvers/yup";
import { querySchema } from "@/lib/validations/schema";
import moment from "moment";
import NoData from "@/components/atoms/NoData";
import { FormProviderWrapper } from "@/context/FormContext";

const Queries = () => {
  const [isQuery, setisQuery] = useState(false);
  const [allQueries, setAllQueries] = useState([]);

  useEffect(() => {
    const queries = JSON.parse(localStorage.getItem("queries")) || [];
    setAllQueries(queries);
  }, []);

  return (
    <div className="lg:col-span-6">
      <div className="flex items-center justify-between">
        <p className="text-gray-800">
          Total Queries: {allQueries?.length || 0}
        </p>
        <Button
          onClick={() => setisQuery(true)}
          label="New Query"
          icon="add-line"
        />
      </div>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200">
        <table className="min-w-full rounded-2xl text-nowrap">
          <thead className="background-gradient text-white">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Sr No.</th>
              <th className="px-4 py-3 text-left font-medium">Case Title</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Last Updated</th>
              <th className="px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(allQueries) &&
              allQueries?.map((query, i) => (
                <Row data={query} key={i} index={i} />
              ))}
          </tbody>
        </table>
        {allQueries?.length < 1 && <NoData />}
      </div>
      {isQuery && (
        <ModalOverlay
          onClose={() => setisQuery(false)}
          content={
            <FormProviderWrapper
              defaultValues={{
                title: "",
              }}
              resolver={yupResolver(querySchema)}
            >
              <AddQuery
                onClose={() => setisQuery(false)}
                setAllQueries={setAllQueries}
                allQueries={allQueries}
              />
            </FormProviderWrapper>
          }
        />
      )}
    </div>
  );
};

export default Queries;

const Row = ({ data, index }) => {
  const { title, createdAt } = data;

  return (
    <tr className="border-b border-gray-200 text-gray-600">
      <td className="px-4 py-3">{index + 1}.</td>
      <td className="line-clamp-1 px-4 py-3 text-sm">
        <p>{title}</p>
      </td>
      <td className="px-4 py-3">
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm text-blue-600">
          pending
        </span>
      </td>
      <td className="px-4 py-3 text-center text-sm">
        {moment(createdAt).format("DD-MM-YYYY hh:mm")}
      </td>
      <td className="flex items-center justify-center gap-2 px-4 py-3">
        <button disabled className="disabled:cursor-not-allowed">
          <i className="ri-delete-bin-3-line rounded-full bg-rose-100 p-2 text-rose-600"></i>
        </button>
      </td>
    </tr>
  );
};
