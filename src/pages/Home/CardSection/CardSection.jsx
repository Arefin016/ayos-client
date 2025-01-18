import Card from "@/components/Card/Card";
import cardSvg from "../../../assets/images/cardSvg.png";
import cardImage from "../../../assets/images/cardImage.png";
import { Link } from "react-router-dom";

const CardSection = () => {
  const cardDetails = [
    {
      title: "Plumbing",
      description:
        "Declogging Work, Pipe leak repair, Pipe Replacement ,Faucet Replacement, Toilet Replacement, Water pressure repairs, Water heater installation, Water Filter Replacement",
      icon: cardSvg,
      image: cardImage,
    },
    {
      title: "Furniture",
      description:
        "Declogging Work, Pipe leak repair, Pipe Replacement ,Faucet Replacement, Toilet Replacement, Water pressure repairs, Water heater installation, Water Filter Replacement",
      icon: cardSvg,
      image: cardImage,
    },
    {
      title: "CCCTV",
      description:
        "Declogging Work, Pipe leak repair, Pipe Replacement ,Faucet Replacement, Toilet Replacement, Water pressure repairs, Water heater installation, Water Filter Replacement",
      icon: cardSvg,
      image: cardImage,
    },
    {
      title: "Painting",
      description:
        "Declogging Work, Pipe leak repair, Pipe Replacement ,Faucet Replacement, Toilet Replacement, Water pressure repairs, Water heater installation, Water Filter Replacement",
      icon: cardSvg,
      image: cardImage,
    },
    {
      title: "Roof Repairs",
      description:
        "Declogging Work, Pipe leak repair, Pipe Replacement ,Faucet Replacement, Toilet Replacement, Water pressure repairs, Water heater installation, Water Filter Replacement",
      icon: cardSvg,
      image: cardImage,
    },
    {
      title: "Handyman",
      description:
        "Declogging Work, Pipe leak repair, Pipe Replacement ,Faucet Replacement, Toilet Replacement, Water pressure repairs, Water heater installation, Water Filter Replacement",
      icon: cardSvg,
      image: cardImage,
    },
    {
      title: "AC Repair",
      description:
        "Declogging Work, Pipe leak repair, Pipe Replacement ,Faucet Replacement, Toilet Replacement, Water pressure repairs, Water heater installation, Water Filter Replacement",
      icon: cardSvg,
      image: cardImage,
    },
    {
      title: "Electrical",
      description:
        "Declogging Work, Pipe leak repair, Pipe Replacement ,Faucet Replacement, Toilet Replacement, Water pressure repairs, Water heater installation, Water Filter Replacement",
      icon: cardSvg,
      image: cardImage,
    },
  ];

  return (
    <section className="pb-[100px] px-[180px]">
      <div>
        {/* This is the title section start */}
        <div className="flex flex-col text-center space-y-8">
          <h1 className="text-[#172B4D] font-poppins text-[40px] font-semibold">
            Unlock the Best Contractors for Your <br /> Needs!
          </h1>
          <p className="text-[#585858] font-jakarta text-xl">
            Take control of your wellness journey with personalized AI insights.
            Track <br /> your progress, stay consistent
          </p>
          {/* This is the title section end */}

          {/* Card Section */}
          <div className="grid grid-cols-3 gap-5 pt-[107px] justify-center text-center">
            {cardDetails.slice(0, 6).map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
                image={card.image}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-[60px]">
          <Link to={"/services"}>
            <button className="text-primaryColor text-[16px] font-medium bg-[#083EC5] py-[18px] px-[95px] rounded-xl">
              All view
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
