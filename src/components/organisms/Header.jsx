import Link from "next/link";
import Button from "../atoms/Button";

const Header = () => {
  return (
    <header className="flex-between rounded-lg  px-4 py-2">
      <Link className="text-primary flex items-center gap-2" href="/">
        <h1 className=" text-2xl font-semibold flex flex-col">
          Legal{" "}
          <span className="text-xs pl-6 font-normal text-gray-600">
            Assistant
          </span>
        </h1>
      </Link>
      <Link href="/signup">
        <Button label="Register" />
      </Link>
    </header>
  );
};

export default Header;
