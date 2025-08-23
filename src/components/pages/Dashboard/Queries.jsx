"use client";
import Button from "@/components/atoms/Button";
import ModalOverlay from "@/components/common/OverlayModal";
import { useState } from "react";
import AddQuery from "./AddQuery";

const Queries = () => {
  const [isQuery, setisQuery] = useState(false);

  return (
    <div className="md:col-span-6">
      <div className="flex items-center justify-between">
        <p className="text-gray-800">Total Queries: 4</p>
        <Button
          onClick={() => setisQuery(true)}
          label="New Query"
          icon="add-line"
        />
      </div>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200">
        <table className="min-w-full rounded-2xl text-nowrap">
          <thead className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Sr No.</th>
              <th className="px-4 py-3 text-left font-medium">Case Title</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Last Updated</th>
              <th className="px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            <Row />
          </tbody>
        </table>
      </div>
      {isQuery && (
        <ModalOverlay
          onClose={() => setisQuery(false)}
          content={<AddQuery />}
        />
      )}
    </div>
  );
};

export default Queries;

const Row = () => {
  return (
    <tr className="border-b border-gray-200 text-gray-600">
      <td className="px-4 py-3">01.</td>
      <td className="px-4 py-3 text-sm">
        <p>Property Dispute</p>
        <p>Lorem ipsum dolor sit...</p>
      </td>
      <td className="px-4 py-3">
        <span className="rounded-full bg-rose-100 px-4 py-1 text-sm text-rose-600">
          Closed
        </span>
      </td>
      <td className="px-4 py-3 text-center text-sm">2 days ago</td>
      <td className="flex items-center justify-center gap-2 px-4 py-3">
        <i className="ri-pencil-fill rounded-full bg-purple-100 px-2 py-1 text-purple-600"></i>
        <i className="ri-delete-bin-3-line rounded-full bg-rose-100 px-2 py-1 text-rose-600"></i>
      </td>
    </tr>
  );
};
