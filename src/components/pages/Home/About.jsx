import Button from "@/components/atoms/Button";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col md:col-span-2">
      <h2 className="mt-4 text-4xl font-bold text-gray-900 md:mt-8 md:text-5xl">
        <span className=" ">AI-Powered</span>, <br />
        <span className="text-gradient">Legal Support</span>, Anytime, Anywhere!
      </h2>
      <p className="mt-4 max-w-2xl text-gray-600">
Our platform makes legal guidance simple, fast, and accessible for everyone. With AI-powered assistance, you can cut through confusing laws, understand your rights clearly, and get instant, reliable answers tailored to your situation. From personal matters to business challenges, we put trusted legal support right at your fingertips.      </p>
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
