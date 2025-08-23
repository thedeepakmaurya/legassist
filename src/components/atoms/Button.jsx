const Button = (props) => {
  const { icon, label, className, ...restProps } = props;
  return (
    <button
      className={`bg-primary transform cursor-pointer rounded-full px-6 py-3  text-white transition duration-300 hover:bg-gray-800 ${className}`}
    >
      {label} {icon && <i className={`ri-${icon} ri-lg`}></i>}
    </button>
  );
};

export default Button;
