import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

const AddQuery = () => {
  return <div className="bg-white mx-auto md:max-w-[75%] rounded-2xl p-6">
      <h2 className="text-xl text-gray-800 font-semibold mb-1">Submit Your Legal Query</h2>
      <p className="text-gray-600 mb-8">Please provide detailed information about your legal issue to help us assist you effectively.</p>

      <form >
        <Input placeholder="Enter your legal query" />
        <div className="flex justify-end">
            <Button label="Submit Query"/>
        </div>
      </form>
  </div>;
};

export default AddQuery;
