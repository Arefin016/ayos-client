import Banner from "@/components/Banner/Banner";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import Card from "@/components/Card/Card";
import Container from "@/components/Container/Container";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "@/components/Spinner/Spinner";

const OurServices = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: "serviceData",
    queryFn: async () => {
      const res = await axios.get(
        "https://ayosph.com/api/home-page/categories"
      );
      return res?.data;
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
          <div className="flex lg:flex-wrap lg:flex-row flex-col gap-5 pt-[107px] justify-center text-center items-center">
            {data?.data.map((card, index) => (
              <Card
                key={index}
                title={card?.title}
                description={card?.description}
                icon={card.icon}
                image={card?.thumbnail}
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
