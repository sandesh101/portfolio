const Button = ({
  buttonText,
  buttonColor = "#3A86FF",
  isSecondary = false,
  isIcon = false,
  icon,
}) => {
  return (
    <button
      className={`group flex items-center justify-center cursor-pointer bg-[#3A86FF] text-white gap-3 py-2 w-full ${
        isIcon ? "px-7" : "px-4"
      } rounded-2xl font-medium transition-all
      ${
        isSecondary
          ? "border border-[#2e2e2e] bg-transparent text-[#2e2e2e] hover:bg-[#444444]"
          : `bg-[${buttonColor}] hover:bg-[#2c6fdb]`
      }
      `}
    >
      {buttonText}
      {isIcon && icon}
    </button>
  );
};

export default Button;
