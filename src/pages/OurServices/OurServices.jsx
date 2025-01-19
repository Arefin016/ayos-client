import Banner from "@/components/Banner/Banner";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import cardSvg from "../../assets/images/cardSvg.png";
import cardImage from "../../assets/images/cardImage.png";
import Card from "@/components/Card/Card";
import Container from "@/components/Container/Container";
import { Helmet } from "react-helmet-async";

const OurServices = () => {
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
    <div>
      <Helmet>
        <title>Ayos || Our Services</title>
      </Helmet>
      <Banner
        title={
          <>
            Ayos: Effective. Reliable. Enab <br />
            ling.
          </>
        }
        subtitle={
          <>
            Connect with trusted professionals for all your home needs—cleaning,
            repairs,
            <br />
            maintenance, and beyond. Post your job today and experience fast,
            reliable service <br /> with a hassle-free process!
          </>
        }
        backgroundImage="https://i.postimg.cc/054swQp1/Rectangle-9.png"
        gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.38) 100%)"
      />
      {/* This is the services section start */}
      <Container width="1561px">
        <div className="mt-[93px]">
          <div className="flex flex-col space-y-8 justify-center text-center">
            <h1
              data-aos="fade-up"
              className="text-[#172B4D] font-poppins text-[40px] font-semibold"
            >
              Best Contractors service for Your <br /> Needs!
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[#585858] font-jakarta text-xl"
            >
              Take control of your wellness journey with personalized AI
              insights. Track <br /> your progress, stay consistent
            </p>
          </div>
          {/* Card Section */}
          <div className="flex flex-wrap gap-5 pt-[107px] justify-center text-center items-center">
            {cardDetails.map((card, index) => (
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
      </Container>
      {/* This is the services section end */}
      {/*  */}
      <DownloadApp />
    </div>
  );
};

export default OurServices;
