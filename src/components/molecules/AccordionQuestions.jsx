import * as React from "react";
import questionmarkcloud from "../../assets/images/icons/questionmarkcloud.png";
import arrowRight from "../../assets/images/icons/arrowRight.png";
import successQuestion from "../../assets/images/icons/successQuestion.png";
import arrowDown from "../../assets/images/icons/arrowDown.png";

const QuestionItem = ({
  icon,
  question,
  answer,
  textColor,
  isOpen,
  toggleQuestion,
}) => (
  <div
    className={` flex gap-5 justify-between mt-6 w-full text-3xl tracking-tighter text-center ${textColor} bg-white rounded-md shadow-sm leading-[55.5px] max-md:flex-wrap max-md:px-5 max-md:mr-1 max-md:max-w-full`}
    onClick={toggleQuestion}
  >
    <div className="flex gap-5 max-md:flex-wrap">
      <img src={icon} alt="" className="shrink-0 w-11 aspect-square" />
      <div className="flex-auto my-auto max-md:max-w-full">{question}</div>
    </div>
    <img
      src={isOpen ? arrowDown : arrowRight}
      alt=""
      className="shrink-0 my-auto aspect-square w-[33px]"
    />
  </div>
);

const questions = [
  {
    icon: successQuestion,
    question: (
      <>
        when{" "}
        <span className="font-semibold text-sky-800 lowercase">
          to register
        </span>{" "}
        <span className="lowercase">the sale of my vehicle?</span>
      </>
    ),
    answer: (
      <>
        Ideally, register the transfer of your vehicle at the time of sale. at
        the time of sale. This will avoid any unpleasant surprises when the new
        new owner's declaration. If you forget, you can declare the transfer at
        any time. But remember: as soon possible.
      </>
    ),
    textColor: "text-black",
  },
  {
    icon: successQuestion,
    question: (
      <>
        why{" "}
        <span className="font-semibold text-sky-800 lowercase">register</span>{" "}
        <span className="lowercase">the sale of my vehicle?</span> ?
      </>
    ),
    answer: (
      <>
        By declaring your vehicle for sale, you will avoid receiving fines fines
        from the buyer in the event of infringements by the new owner of the
        vehicle. The declaration of sale formalizes the sale of your vehicle.
      </>
    ),
    textColor: "text-black",
  },
];
function BannerButoom() {
  const [openQuestion, setOpenQuestion] = React.useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="flex flex-col p-20 font-medium lowercase bg-zinc-300 bg-opacity-10 max-md:px-5">
      <div className="flex flex-col px-8 shadow-sm max-md:px-5 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
        <section className="flex flex-col items-center px-16 text-5xl font-medium tracking-tighter text-center text-black lowercase bg-zinc-300 bg-opacity-10 leading-[56px] max-md:px-5 max-md:text-4xl max-md:leading-[52px] mb-10">
          <div className="flex flex-col max-w-full w-[530px] max-md:text-4xl max-md:leading-[52px]">
            <img
              loading="lazy"
              src={questionmarkcloud}
              alt="Company logo"
              className="self-center max-w-full aspect-square w-[101px]"
            />
            <p className="mt-2 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
              Our
              <span className="font-semibold text-sky-800 lowercase">
                {" "}
                teams
              </span>
              <span className="lowercase"> answer </span>
              <br />
              <span className="lowercase">to your questions</span>
            </p>
          </div>
        </section>
        {questions.map((question, index) => (
          <React.Fragment key={index}>
            <QuestionItem
              icon={question.icon}
              question={question.question}
              textColor={question.textColor}
              isOpen={openQuestion === index}
              toggleQuestion={() => toggleQuestion(index)}
            />
            {openQuestion === index && (
              <div className="self-start mt-11 ml-4 text-2xl tracking-tighter leading-10 text-sky-800 max-md:mt-10 max-md:max-w-full">
                {question.answer}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default BannerButoom;
