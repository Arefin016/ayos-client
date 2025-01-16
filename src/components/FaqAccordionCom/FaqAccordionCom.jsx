import {
  Accordion as FaqAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAccordionCom = () => {
  return (
    <FaqAccordion type="single" collapsible className="w-full space-y-6">
      <AccordionItem
        className="p-6 border border-[#EAEAEA] rounded-[8px]"
        value="item-1"
      >
        <AccordionTrigger className="font-jakarta text-xl font-medium text-[#101828]">
          Is there a free trial available?
        </AccordionTrigger>
        <AccordionContent className="text-xl font-jakarta font-medium text-[#667085]">
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you <br /> with a free, personalized 30-minute onboarding call to get
          you up and <br /> running as soon as possible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className="p-6 border border-[#EAEAEA] rounded-[8px]"
        value="item-2"
      >
        <AccordionTrigger className="font-jakarta text-xl font-medium text-[#101828]">
          Can I change my plan later?
        </AccordionTrigger>
        <AccordionContent className="text-xl font-jakarta font-medium text-[#667085]">
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you <br /> with a free, personalized 30-minute onboarding call to get
          you up and <br /> running as soon as possible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className="p-6 border border-[#EAEAEA] rounded-[8px]"
        value="item-3"
      >
        <AccordionTrigger className="font-jakarta text-xl font-medium text-[#101828]">
          What is your cancellation policy?
        </AccordionTrigger>
        <AccordionContent className="text-xl font-jakarta font-medium text-[#667085]">
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you <br /> with a free, personalized 30-minute onboarding call to get
          you up and <br /> running as soon as possible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className="p-6 border border-[#EAEAEA] rounded-[8px]"
        value="item-4"
      >
        <AccordionTrigger className="font-jakarta text-xl font-medium text-[#101828]">
          Can other info be added to an invoice?
        </AccordionTrigger>
        <AccordionContent className="text-xl font-jakarta font-medium text-[#667085]">
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you <br /> with a free, personalized 30-minute onboarding call to get
          you up and <br /> running as soon as possible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className="p-6 border border-[#EAEAEA] rounded-[8px]"
        value="item-5"
      >
        <AccordionTrigger className="font-jakarta text-xl font-medium text-[#101828]">
          How does billing work?
        </AccordionTrigger>
        <AccordionContent className="text-xl font-jakarta font-medium text-[#667085]">
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you <br /> with a free, personalized 30-minute onboarding call to get
          you up and <br /> running as soon as possible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className="p-6 border border-[#EAEAEA] rounded-[8px]"
        value="item-6"
      >
        <AccordionTrigger className="font-jakarta text-xl font-medium text-[#101828]">
          How do I change my account email?
        </AccordionTrigger>
        <AccordionContent className="text-xl font-jakarta font-medium text-[#667085]">
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you <br /> with a free, personalized 30-minute onboarding call to get
          you up and <br /> running as soon as possible.
        </AccordionContent>
      </AccordionItem>
    </FaqAccordion>
  );
};

export default FaqAccordionCom;
