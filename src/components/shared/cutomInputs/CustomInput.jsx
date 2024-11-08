const CustomInput = ({ placeholder, label, type, instruction , cols, required }) => {
  return (
    <div className={`space-y-1 ${cols ? `col-span-${cols}` : ""}`}>
      <label htmlFor={label} className="font-semibold block">
        {label} <span className="text-red-600">{required ? "*" : ""}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`border border-gray-400 rounded-md py-1 px-3 focus:outline-none w-full }`}
      />
      {instruction && <p className="text-sm text-gray-500">{instruction}</p>}
    </div>
  );
};

export default CustomInput;
