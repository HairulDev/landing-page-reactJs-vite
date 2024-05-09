import React from "react";
import iconSuccess from "../../../assets/images/icons/success.png";

const StepItem = ({ number, text }) => {
  return (
    <div className="flex gap-3 self-start font-semibold text-center capitalize whitespace-nowrap max-md:mt-10">
      <div className="justify-center items-center text-lg tracking-tighter leading-2 text-white bg-sky-800 rounded-full h-[25px] w-[25px]">
        {number}
      </div>
      <div className="flex-auto my-auto text-xl tracking-tighter leading-5 text-sky-800">
        {text}
      </div>
    </div>
  );
};

const InputField = ({
  number,
  label,
  value,
  name,
  placeholder,
  onChange,
  className,
}) => {
  const isFormatValid =
    /^(?:[a-zA-Z]{2}-\d{3}-[a-zA-Z]{2}|(?:0[1-9]|[12]\d|3[01])\/(?:0[1-9]|1[0-2])\/\d{4}|(?:[01]\d|2[0-3]):(?:[0-5]\d))$/.test(
      value
    );

  return (
    <>
      <StepItem number={number} text={label} />
      <div
        className={`flex gap-5 justify-between py-3 pr-16 pl-5 mt-3 rounded bg-sky-800 bg-opacity-10 max-md:flex-wrap max-md:pr-5 max-md:max-w-full ${className}`}
      >
        <input
          name={name}
          onChange={onChange}
          type="text"
          placeholder={placeholder}
          className="my-auto w-full text-xl font-medium tracking-tighter leading-5 text-center text-black capitalize  bg-sky-800 bg-opacity-0"
        />
        {isFormatValid && (
          <div className="flex overflow-hidden relative flex-col justify-center items-center aspect-square w-[37px]">
            <img
              loading="lazy"
              src={iconSuccess}
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default InputField;
