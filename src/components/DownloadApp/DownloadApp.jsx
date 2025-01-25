import Container from "../Container/Container";
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  const downloadApp = async () => {
    try {
      const response = await apiClient.get("home-page/app-download");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["downloadAppData"],
    queryFn: downloadApp,
  });

  if (isLoading) return <Spinner />;

  if (!data || !data?.data) {
    return <div className="text-center my-36">No data found</div>;
  }

  return (
    <Container width="1560px">
      <section className="bg-[#EEF3FF] rounded-[32px] mb-[93px] mt-5 xs:mt-5 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5 2xl:mt-10 3xl:mt-20">
        <div className="flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row 3xl:flex-row gap-5 items-center">
          <div className="ml-4 xs:ml-4 sm:ml-4 md:ml-4 lg:ml-8 xl:ml-10 2xl:ml-[51px] 3xl:ml-[51px]">
            <h2
              data-aos="fade-up"
              className="text-secondaryButton text-[28px] xs:text-[28px] sm:text-[30px] md:text-[35px] lg:text-[45px] xl:text-[45px] 2xl:text-[56px] 3xl:text-[56px] font-poppins w-full xs:w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[650px] 3xl:w-[650px] font-semibold"
            >
              {data?.data.title}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay=" 100"
              className="text-[#585858] text-[16px] xs:text-[16px] sm:text-[16px] md:text-lg lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl font-poppins font-normal mt-6 w-full xs:w-full sm:w-full md:w-full lg:w-[720px] xl:w-full 2xl:w-[720px] 3xl:w-[720px]"
            >
              {data?.data?.description}
            </p>
            {/* This is the button section */}
            <div
              data-aos="fade-up"
              data-aos-delay=" 200"
              className="flex flex-row gap-4 mt-[50px]"
            >
              <Link to={data?.data?.button_two_url}>
                <img src={data?.data?.button_one_image} alt="Play Store" />
              </Link>
              <Link to={data?.data?.button_one_url}>
                <img src={data?.data?.button_two_image} alt="App Store" />
              </Link>
            </div>
          </div>
          {/* This is the image section */}
          <div data-aos="zoom-in ">
            <img
              className="w-full xs:w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full 3xl:w-[752px] h-full xs:h-full sm:h-full md:h-full lg:h-auto xl:h-full 2xl:h-full 3xl:h-[800px] object-cover"
              src={data?.data?.image}
              alt="downloadApp"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default DownloadApp;
