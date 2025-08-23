const Button = (props) => {
  const { label, ...restProps } = props;
  return (
    <button className="bg-primary  text-sm cursor-pointer text-white hover:scale-105 transform transition duration-300 px-6 py-2 rounded-full ">
      {label}
    </button>
  );
};

export default Button;
