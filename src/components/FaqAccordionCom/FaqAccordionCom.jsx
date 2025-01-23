import {
  Accordion as FaqAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner/Spinner";
import axios from "axios";

const FaqAccordionCom = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["faqData"],
    queryFn: async () => {
      const res = await axios.get("https://ayosph.com/api/home-page/faqs");
      return res.data;
    },
  });

  if (isLoading) return <Spinner />;

  if (error) {
    return <div>An error has occurred: {error?.message}</div>;
  }

  if (!data || !data?.data) {
    return <div>No data found</div>;
  }

  return (
    <FaqAccordion type="single" collapsible className="w-full space-y-6">
      {data?.data.map((item, index) => (
        <AccordionItem
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="px-6 py-2 border border-[#EAEAEA] rounded-[8px]"
          value={`item-${index + 1}`}
        >
          <AccordionTrigger className="font-jakarta text-xl font-medium text-[#101828] py-3">
            {item?.question}
          </AccordionTrigger>
          <AccordionContent className="text-xl font-jakarta font-medium text-[#667085] w-2/3">
            {item?.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </FaqAccordion>
  );
};

export default FaqAccordionCom;
