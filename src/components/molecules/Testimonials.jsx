import * as React from "react";
import like from "../../assets/images/icons/like.png";
import star from "../../assets/images/icons/star.png";
import quotationMarks from "../../assets/images/icons/quotationMarks.png";
import elisa from "../../assets/images/avatar/elisa.png";
import gabriel from "../../assets/images/avatar/gabriel.png";
import hector from "../../assets/images/avatar/hector.png";

function StarRating({ rating }) {
  console.log("rating====>>", rating);
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <img
        key={i}
        loading="lazy"
        src={i < rating ? star : star}
        alt={`${i + 1} star`}
        className="shrink-0 aspect-square w-[27px]"
      />
    );
  }
  console.log("stars.length====>>", stars.length);
  return <div className="flex gap-0.5 my-auto">{stars}</div>;
}

function TestimonialCard({ testimonial, imageSrc, altText, ratings }) {
  return (
    <div className="flex flex-col grow pt-5 w-full bg-white rounded-lg max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-14 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-px w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={altText}
            className="shrink-0 aspect-square w-[83px]"
          />
          <StarRating rating={ratings} />
        </div>
        <div className="mt-3.5 text-base tracking-tighter leading-6 text-justify text-black">
          {testimonial}
        </div>
      </div>
    </div>
  );
}

function ClientInfo({ imageSrc, name, date }) {
  return (
    <div className="flex flex-1 gap-5">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${name}'s profile picture`}
        className="shrink-0 rounded-full aspect-square w-[67px]"
      />
      <div className="flex flex-col self-start">
        <div className="text-2xl font-bold tracking-tight leading-8 text-black">
          {name}
        </div>
        <div className="mt-4 text-lg font-medium tracking-tighter text-sky-800 lowercase leading-[22.5px]">
          <span className="text-sky-800">Client </span>
          <span className="text-sky-800 lowercase">from {date}</span>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      testimonial:
        "A perfect experience to obtain my declaration of assignment! The process was quick and efficient. I was guided every step of the way, and the customer service was exceptional. I highly recommend this process to anyone looking for a hassle-free solution.",
      imageSrc: quotationMarks,
      altText: "Client 1's profile picture",
      ratings: 1,
    },
    {
      testimonial:
        "I'm really pleased with my experience using this platform to declare the transfer of my vehicle. The process was quick and simple, and I was impressed by the ease of navigation.",
      imageSrc: quotationMarks,
      altText: "Client 2's profile picture",
      ratings: 2,
    },
    {
      testimonial:
        "I would like to express my satisfaction with my recent experience using this platform to declare the transfer of my vehicle. The process was incredibly easy and intuitive. I was able to enter all the necessary information in just a few minutes, and I appreciated the clarity of the instructions provided at each stage.",
      imageSrc: quotationMarks,
      altText: "Client 3's profile picture",
      ratings: 3,
    },
  ];

  const clientInfo = [
    {
      imageSrc: elisa,
      name: "Elisa L.",
      date: "22 February 2024",
    },
    {
      imageSrc: gabriel,
      name: "Gabriel B.",
      date: "15 February 2024",
    },
    {
      imageSrc: hector,
      name: "Hector E.",
      date: "7 January 2024",
    },
  ];

  return (
    <div className="flex flex-col items-center px-5 mt-10">
      {" "}
      <div className="flex flex-col items-center px-5">
        <img
          loading="lazy"
          src={like}
          alt="Company logo"
          className="max-w-full shadow-sm aspect-square w-[101px]"
        />
      </div>
      <h1 className="text-5xl font-medium tracking-tighter text-center text-black lowercase leading-[55.5px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
        our customers' opinions
      </h1>
      <div className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index > 0 ? "ml-5" : ""
              } w-[33%] max-md:ml-0 max-md:w-full`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-5 mt-6 w-full max-w-[1252px] max-md:flex-wrap max-md:max-w-full">
        {clientInfo.map((client, index) => (
          <ClientInfo key={index} {...client} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
