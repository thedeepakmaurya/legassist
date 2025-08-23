import Link from "next/link";
import Button from "../atoms/Button";

const Header = () => {
  return (
    <header className="flex-between rounded-lg  px-4 py-2">
      <Link className="text-primary flex items-center gap-2" href="/">
        <i className="ri-auction-fill ri-xl"></i>
        <h1 className=" text-xl font-semibold">Assistant</h1>
      </Link>
      <Button label="Register" />
    </header>
  );
};

export default Header;
