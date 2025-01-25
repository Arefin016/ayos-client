import Banner from "@/components/Banner/Banner";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import Card from "@/components/Card/Card";
import Container from "@/components/Container/Container";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner/Spinner";
import apiClient from "@/utils/apiClient";

const OurServices = () => {
  // Service Data Fetch
  const serviceData = async () => {
    const response = await apiClient.get("/home-page/categories");
    return response.data;
  };

  const { isLoading: isServiceLoading, data: serviceResponse } = useQuery({
    queryKey: ["serviceData"],
    queryFn: serviceData,
  });

  // Banner Data Fetch
  const bannerData = async () => {
    try {
      const response = await apiClient.get("/about-page/banner");
      return response.data;
    } catch (err) {
      console.error("Error fetching data:", err);
      return null;
    }
  };

  const { isLoading: isBannerLoading, data: bannerResponse } = useQuery({
    queryKey: ["bannerData"],
    queryFn: bannerData,
  });

  if (isServiceLoading || isBannerLoading) return <Spinner />;

  if (!serviceResponse?.data) {
    return <div className="text-center">No data found</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Ayos || Our Services</title>
      </Helmet>
      {}
      {bannerResponse && bannerResponse?.data ? (
        <Banner
          title={bannerResponse?.data?.title}
          subtitle={bannerResponse?.data?.description}
          backgroundImage="https://i.postimg.cc/054swQp1/Rectangle-9.png"
          gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.38) 100%)"
          playStore={bannerResponse?.data?.button_two_url}
          appStore={bannerResponse?.data?.button_one_url}
          playStorePic={bannerResponse?.data?.button_one_image}
          appStorePic={bannerResponse?.data?.button_two_image}
        />
      ) : (
        <div className="text-center">No data found</div>
      )}
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
            {serviceResponse?.data.map((card, index) => (
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
