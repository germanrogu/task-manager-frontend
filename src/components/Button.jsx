const Button = ({ label, onClick, className, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        label ? "px-3" : "px-2"
      } py-1 rounded-lg text-sm font-medium flex items-center justify-center transition duration-300 ease-in-out ${className}`}
    >
      {Icon && <Icon className={`w-4 h-4 ${label ? "mr-1" : ""}`} />}
      {label}
    </button>
  );
};

export default Button;
