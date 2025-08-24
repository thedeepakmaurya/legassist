const Input = (props) => {
  const { className, error, type, placeholder, ...restProps } =
    props;

  return (
    <div className="mb-4">
      <input  
        {...restProps}
        type={type ? type : "text"}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-black focus:outline-none ${className}`}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;
