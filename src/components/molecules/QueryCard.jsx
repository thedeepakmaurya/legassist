import Button from "../atoms/Button";

const QueryCard = ({ title, description, link }) => {
  return (
    <div className="border-light-gray rounded-lg border p-4">
      <h4 className="text-xl font-semibold">1. Contract Review</h4>
      <p className="text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        accusamus eius perferendis earum quo dignissimos.
      </p>
      <Button label="View Details" className="mt-3" />
    </div>
  );
};

export default QueryCard;
