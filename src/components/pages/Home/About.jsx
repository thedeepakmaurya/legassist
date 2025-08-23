import Button from "@/components/atoms/Button";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col md:col-span-2">
      <h2 className="mt-8 text-4xl font-bold text-gray-900 md:text-5xl">
        <span className=" "> Next-Gen</span>, <br />
        <span className="text-gradient">Legal Support</span>, Anytime, Anywhere!
      </h2>
      <p className="mt-4 max-w-2xl text-gray-600">
        Our platform makes legal guidance simple, fast, and accessible. With
        AI-powered assistance, you can understand complex laws and get reliable
        answers to your legal questions.
      </p>
      <Link className="w-fit" href="/signup">
        <Button
          className="mt-6"
          label="Get Started"
          icon="arrow-right-s-line"
        />
      </Link>
      <p className="mt-2 text-sm text-gray-500">
        <i className="ri-auction-fill text-xl text-rose-300"></i> Your legal
        help, on your terms.
      </p>
    </div>
  );
};

export default About;
