import * as React from "react";
import questionMarkInfo from "../../assets/images/icons/questionMarkInfo.png";
import bgInfo from "../../assets/images/icons/bgInfo.png";

function Info() {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center text-sm font-semibold tracking-tight leading-6 text-white lowercase shadow-sm min-h-[162px] mt-10">
      <img
        loading="lazy"
        src={bgInfo}
        className="object-cover absolute inset-0 size-full"
        alt=""
      />
      <div className="flex relative gap-5 px-7 py-9 rounded-2xl bg-sky-800 bg-opacity-60 max-md:flex-wrap max-md:px-5">
        <img
          loading="lazy"
          src={questionMarkInfo}
          className="shrink-0 self-start shadow-sm aspect-[1.01] w-[75px]"
          alt=""
        />
        <div className="flex-auto max-md:max-w-full">
          <h2 className="text-2xl leading-10 text-white">
            modernizing and simplifying vehicle transfer procedures :
          </h2>
          <p className="text-xl leading-10 text-white">
            state services modernize.
            <br />
            you can now declare your transfer online.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info;
