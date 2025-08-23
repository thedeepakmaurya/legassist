import Button from "../atoms/Button";

const QueryCard = ({ title, description, link }) => {
  return (
    <div className="rounded-xl p-4 shadow-lg">
      <h4 className="text-lg font-medium">
        <span className="text-xl font-bold text-gray-400">01.</span>{" "}
        <span className="font-medium">Contract Review</span>
      </h4>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus
        repellat dolore voluptatibus minus quae.
      </p>
      <div className="mt-8 flex items-center justify-between gap-2">
        <p className="text-sm text-gray-600">2 days ago</p>
        <div className="flex gap-2">
          <i className="ri-eye-2-line h-fit rounded-full bg-purple-100 px-2 py-1 text-purple-600"></i>
          <i className="ri-delete-bin-5-line h-fit rounded-full bg-rose-100 px-2 py-1 text-rose-600"></i>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
