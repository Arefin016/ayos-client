import Container from "@/components/Container/Container";
import FaqAccordionCom from "@/components/FaqAccordionCom/FaqAccordionCom";
import FaqPic from "../../../assets/images/faqDesign.png";

const FAQ = () => {
  return (
    <section>
      <div className="text-center py-20">
        <h1 className="text-[#101828] text-4xl font-jakarta font-semibold">
          Frequently asked questions
        </h1>
        <p className="text-[#667085] mt-5 text-xl">
          Everything you need to know about the product and billing.
        </p>
        {/* This is the accordian */}
        <Container width="1336px">
          <section className="mt-16 relative">
            <FaqAccordionCom />
          </section>
          <div className="absolute top-[270px] left-[-5px]">
            <img src={FaqPic} alt="" />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default FAQ;
