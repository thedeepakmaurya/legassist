import Button from "@/components/atoms/Button";
import QueryCard from "@/components/molecules/QueryCard";

const Queries = () => {
  return (
    <div className="mt-8">
      <h2 className="pb-2 text-xl font-bold text-gray-900 md:text-3xl">
        My Queries
      </h2>
      <div className="mt-5 grid gap-6 md:gap-10 md:grid-cols-3">
          <QueryCard/>
          <QueryCard/>
          <QueryCard/>
          <QueryCard/>

        

        
      </div>
    </div>
  );
};

export default Queries;
