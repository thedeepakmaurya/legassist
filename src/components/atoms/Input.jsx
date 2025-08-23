const Input = (props) => {
  const { className, value, onChange, type, placeholder, name, ...restProps } = props;
  return ( 
    <div>
      <input
        {...restProps}
        type={type ? type : "text"}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`mb-4 w-full rounded-lg border border-gray-200 focus:border-black px-4 py-3 focus:outline-none ${className}`}
      />
    </div>
  );
};

export default Input;
