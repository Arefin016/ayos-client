import {
  Accordion as FaqAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAccordionCom = () => {
  const faqItems = [
    {
      title: "Is there a free trial available?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can I change my plan later?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "What is your cancellation policy?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can other info be added to an invoice?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How does billing work?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How do I change my account email?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];
  return (
    <FaqAccordion type="single" collapsible className="w-full space-y-6">
      {faqItems?.map((item, index) => (
        <AccordionItem
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="px-6 py-2 border border-[#EAEAEA] rounded-[8px]"
          value={`item-${index + 1}`}
        >
          <AccordionTrigger className="font-jakarta text-xl font-medium text-[#101828] py-3">
            {item?.title}
          </AccordionTrigger>
          <AccordionContent className="text-xl font-jakarta font-medium text-[#667085] w-2/3">
            {item?.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </FaqAccordion>
  );
};

export default FaqAccordionCom;
