import * as React from "react";
import iconSuccess2 from "../../assets/images/icons/success2.png";
import iconSuccess3 from "../../assets/images/icons/success3.png";
import payments from "../../assets/images/icons/payments.png";
import infoBlue from "../../assets/images/icons/infoBlue.png";
import InputField from "../atoms/InputField";

function Heading({ children }) {
  return (
    <div className="flex-auto self-start text-5xl pl-4 font-semibold tracking-tighter leading-4 text-black max-md:text-4xl">
      {children}
    </div>
  );
}

function SubHeading() {
  return (
    <div className="flex flex-col self-end mt-4 text-lg tracking-tighter text-center text-sky-800">
      <div className="font-semibold leading-5">
        <div className="font-semibold flex items-center">
          <img loading="lazy" src={infoBlue} alt="" className="mb-8" />
          <span className="font-medium text-black">
            Licensed & Authorized &nbsp;
          </span>
          <span className="text-sky-800"> Ministry of the Interior</span>
        </div>
        <span className="font-medium text-black">Prefecture approval</span>
        <span className="font-bold text-sky-800"> n°59783</span>
      </div>
    </div>
  );
}

function LeftSection() {
  const initialState = {
    registration: "",
    dateOfSale: "",
    timeOfSale: "",
  };
  const [form, setForm] = React.useState(initialState);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-5xl font-semibold tracking-tighter text-sky-800 capitalize leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px] mb-14">
          <span className="text-sky-800">Declaration</span>
          <span className="text-sky-800 lowercase"> of transfer </span>
          <span className="font-medium lowercase">to</span>
          <span className="font-bold text-sky-800"> ANTS</span>
        </div>
        <InputField
          label="Registration"
          number={1}
          value={form.registration}
          name="registration"
          onChange={onChange}
          placeholder="BB-123-BB"
          className="mb-6"
        />
        <InputField
          label="Date Of Sale"
          number={2}
          value={form.dateOfSale}
          name="dateOfSale"
          onChange={onChange}
          placeholder="DD/MM/YYYY"
          className="mb-6"
        />
        <InputField
          label="Time of sale"
          number={3}
          value={form.timeOfSale}
          name="timeOfSale"
          onChange={onChange}
          placeholder="--:--"
          className="mb-6"
        />
        <button className="justify-center self-start px-12 py-5 mt-12 text-2xl font-semibold tracking-wide leading-5 text-white capitalize whitespace-nowrap bg-sky-800 rounded-xl max-md:px-6 max-md:mt-10">
          Next
        </button>
      </div>
    </div>
  );
}

function StepIndicator() {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  return (
    <div className="flex gap-5 font-semibold text-center text-sky-800 capitalize max-md:flex-wrap">
      <div className="flex flex-auto my-auto text-base leading-6">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="justify-center px-5 py-2.5 bg-white border border-solid shadow-sm border-zinc-500 border-opacity-20 rounded-[39px] max-md:pl-5">
              {step}
            </div>
            {index < steps.length - 1 && (
              <img
                loading="lazy"
                src={`{{ext_${6 + index}}}`}
                alt=""
                className="shrink-0 my-auto aspect-[20] w-[42px]"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function StepDetails({ number, text }) {
  return (
    <>
      <div className="flex z-10 gap-4 text-center max-md:flex-wrap">
        <div className="justify-start items-start w-6 h-6 text-base font-semibold leading-6 text-white whitespace-nowrap bg-lime-200 rounded-full">
          {number}
        </div>
        <div className="flex-auto text-xl text-left  text-black">{text}</div>
      </div>
      {number < 4 && (
        <div className="shrink-0 ml-3 w-0.5 border-2 border-solid bg-stone-300 border-stone-300 h-[19px] max-md:ml-2.5" />
      )}
    </>
  );
}

function RightSection() {
  return (
    <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-10 max-md:mt-10 max-md:max-w-full">
        <StepIndicator />
        <div className="flex flex-col pr-3.5 pl-9 mt-9 max-md:pl-5 max-md:max-w-full">
          <section className="flex flex-col px-8 py-6 bg-white shadow-lg rounded-[30px] max-md:px-5 max-md:max-w-full">
            <header className="flex gap-3 text-3xl font-bold tracking-tight leading-8 text-black max-md:flex-wrap">
              <img
                loading="lazy"
                src={iconSuccess2}
                alt=""
                className="shrink-0 self-start aspect-square w-[29px]"
              />
              <h2 className="flex-auto mb-5">Online registration</h2>
            </header>
            <StepDetails number={1} text="Record the 3 pieces of information" />
            <StepDetails number={2} text="Enter seller information" />
            <StepDetails number={3} text="Teach buyer information" />
            <StepDetails number={4} text="Follow-up on your request" />
          </section>
          <PaymentSection />
        </div>
      </div>
    </div>
  );
}
function PaymentSection() {
  return (
    <div className="flex flex-col self-center pb-4 mt-7 ml-3 max-w-full bg-white rounded-2xl border-4 border-emerald-500 border-solid w-[391px]">
      <div className="justify-center py-2.5 pr-20 pl-20 text-2xl font-semibold tracking-tighter leading-8 text-white uppercase bg-emerald-500 rounded-1x max-md:px-8">
        Secure payment
      </div>
      <div className="flex gap-4 mx-3.5 mt-3.5 max-md:mx-2.5">
        <div className="overflow-hidden relative flex-grow-0">
          <img
            loading="lazy"
            src={iconSuccess3}
            alt=""
            className="object-cover w-auto h-auto max-w-full max-h-full"
          />
        </div>
        <div className="overflow-hidden relative flex-grow-1">
          <img
            loading="lazy"
            src={payments}
            alt=""
            className="object-cover w-auto h-auto max-w-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="flex flex-col p-5">
      <header className="flex gap-5 items-start w-full capitalize max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <Heading>Welcome !</Heading>
        <SubHeading />
      </header>
      <main className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <LeftSection />
          <RightSection />
        </div>
      </main>
    </div>
  );
}
