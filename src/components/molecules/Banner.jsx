import * as React from "react";
import questionmarkcloud from "../../assets/images/icons/questionmarkcloud.png";
function Banner() {
  return (
    <section className="flex flex-col items-center px-16 text-5xl font-medium tracking-tighter text-center text-black lowercase bg-zinc-300 bg-opacity-10 leading-[56px] max-md:px-5 max-md:text-4xl max-md:leading-[52px]">
      <div className="flex flex-col max-w-full w-[530px] max-md:text-4xl max-md:leading-[52px]">
        <img
          loading="lazy"
          src={questionmarkcloud}
          alt="Company logo"
          className="self-center max-w-full aspect-square w-[101px]"
        />
        <p className="mt-2 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
          Our
          <span className="font-semibold text-sky-800 lowercase"> teams</span>
          <span className="lowercase"> answer </span>
          <br />
          <span className="lowercase">to your questions</span>
        </p>
      </div>
    </section>
  );
}

export default Banner;
