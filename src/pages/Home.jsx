import Hero from "../components/molecules/Hero";
import Testimonials from "../components/molecules/Testimonials";
import Contact from "../components/molecules/Contact";
import AccordionQuestions from "../components/molecules/AccordionQuestions";
import Info from "../components/molecules/Info";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto p-5">
        <AccordionQuestions />
        <Contact />
        <Testimonials />
        <Info />
      </div>
    </>
  );
};

export default Home;
