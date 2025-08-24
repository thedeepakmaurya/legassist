const Input = (props) => {
  const { className, fieldName, errors, type, placeholder, ...restProps } =
    props;

  return (
    <div className="mb-4">
      <input
        {...restProps}
        type={type ? type : "text"}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-black focus:outline-none ${className}`}
      />
      {errors && errors[fieldName] && (
        <p className="text-sm text-red-500">{errors[fieldName].message}</p>
      )}
    </div>
  );
};

export default Input;
