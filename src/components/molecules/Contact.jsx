import * as React from "react";
import contact from "../../assets/images/icons/contact.png";

function Contact() {
  return (
    <section className="flex justify-center items-center px-16 bg-zinc-300 bg-opacity-10 max-md:px-5">
      <img
        loading="lazy"
        src={contact}
        alt="Descriptive alt text for the image"
        className="max-w-full aspect-[2.5]  w-[634px]"
      />
    </section>
  );
}

export default Contact;
