import Banner from "@/components/Banner/Banner";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import Container from "@/components/Container/Container";
import { Helmet } from "react-helmet-async";
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner/Spinner";
import { Empty } from "antd";
import parse from "html-react-parser";

const AboutUs = () => {
  // This is the about us banner section fetch data
  const aboutUsData = async () => {
    try {
      const response = await apiClient.get("/about-page/banner");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["aboutUsBannerData"],
    queryFn: aboutUsData,
  });

  // about us paragraph data fatching
  const paragraphData = async () => {
    try {
      const response = await apiClient.get("/about-page/about-us-content");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", err);
      return null;
    }
  };

  const { isLoading: paragraphLoading, data: paraData } = useQuery({
    queryKey: ["paragraphData"],
    queryFn: paragraphData,
  });

  // console.log(paraData?.data[0]);

  const needToUnderstandData = async () => {
    try {
      const response = await apiClient.get("/about-page/need-to-understand");
      return response.data;
    } catch (error) {
      console.error("Erro fetching data:", err);
      return null;
    }
  };

  const { data: needToUnderData } = useQuery({
    queryKey: ["needToUnder"],
    queryFn: needToUnderstandData,
  });

  // This is the transform section start
  const transformData = async () => {
    try {
      const response = await apiClient.get("/about-page/transform");
      return response.data;
    } catch (error) {
      console.error("Error fething data:", err);
      return null;
    }
  };

  const { data: transData } = useQuery({
    queryKey: ["transformData"],
    queryFn: transformData,
  });

  const parsedData =
    typeof needToUnderData?.data?.description === "string"
      ? needToUnderData?.data?.description
      : String(needToUnderData?.data?.description);

  if (isLoading || paragraphLoading) return <Spinner />;

  if (!paraData || !paraData?.data) {
    return (
      <div>
        <Empty />
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Ayos || About Us</title>
      </Helmet>
      {data && data?.data ? (
        <Banner
          title={data?.data?.title}
          subtitle={data?.data?.description}
          backgroundImage="https://i.postimg.cc/05X80Z13/image.png"
          gradient="linear-gradient(90deg, rgba(9, 25, 64, 0.80) -0.85%, rgba(23, 64, 166, 0.00) 99.73%)"
          playStore={data?.data?.button_two_url}
          appStore={data?.data?.button_one_url}
          playStorePic={data?.data?.button_one_image}
          appStorePic={data?.data?.button_two_image}
        />
      ) : (
        <Empty />
      )}
      {/* This is the first section start */}
      <section className="my-9 xs:my-[115px] sm:my-[115px] md:my-[115px] lg:my-[115px] xl:my-[115px] 2xl:my-[115px] 3xl:">
        <div className="lg:px-[183px]">
          {/* First Div */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center space-y-[35px]"
          >
            <h1 className="title">{paraData?.data[0].title}</h1>
            <p className="paragraph">{paraData?.data[0].description}</p>
          </div>
          {/* Second Div */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center space-y-[35px] mt-[88px]"
          >
            <h1 className="title">{paraData?.data[1].title}</h1>
            <p className="paragraph">{paraData?.data[1].description}</p>
          </div>
          {/* Third Div */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center space-y-[35px] mt-[88px]"
          >
            <h1 className="title">{paraData?.data[2].title}</h1>
            <p className="paragraph">{paraData?.data[2].description}</p>
          </div>
        </div>
      </section>
      {/* This is the first section end */}
      {/* This is the second section start*/}
      <section className="bg-[#EEF3FF] px-0 xs:px-[79px] sm:px-[79px] md:px-[79px] lg:px-[79px] xl:px-[79px] 2xl:px-[79px] 3xl:px-[79px]">
        <div className="flex lg:flex-row flex-col gap-10 items-center">
          {/* This is the image section */}
          <div data-aos="zoom-in">
            <img
              className="w-[719px] xs:w-[719px] sm:w-[719px] md:w-[719px] lg:w-[719px] xl:w-[719px] 2xl:w-[719px] 3xl:w-[719px] h-[875px] xs:h-[875px] sm:h-[875px] md:h-[875px] lg:h-[875px] xl:h-[875px] 2xl:h-[875px] 3xl:h-[875px] object-contain"
              src={transData?.data?.transform?.image}
              alt=""
            />
          </div>
          {/* This is the content section */}
          <div>
            <div className="space-y-[31px] mb-12">
              <h1
                data-aos="fade-up"
                className="text-[#172B4D] font-poppins text-[40px] font-semibold"
              >
                {transData?.data?.transform?.title}
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-[#172B4D] font-poppins text-xl font-medium w-full xs:w-[902px] sm:w-[902px] md:w-[902px] lg:w-[902px] xl:w-[902px] 2xl:w-[902px] 3xl:w-[902px]"
              >
                {transData?.data?.transform?.description}
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="gap-[81px]">
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2">
                {transData?.data?.content?.slice(0, 6).map((item, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={100 * (index + 1)}
                    className="w-full xs:w-[400px] sm:w-[400px] md:w-[400px] lg:w-[400px] xl:w-[400px] 2xl:w-[400px] 3xl:w-[400px]"
                  >
                    <h1 className="aboutTitle mt-[27px]">{item?.title}</h1>
                    <p className="aboutParagraph mt-4">{item?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* This is the second section end*/}

      {/* This is the third section start */}
      <Container width="1560px">
        <section className="mt-[120px]">
          <div className="text-center space-y-[35px]">
            <h1 data-aos="fade-up" className="title">
              {needToUnderData?.data?.title}
            </h1>
            <div className="user-descreption-wrapper text-left mb-5">
              {parse(parsedData)}
            </div>
          </div>
        </section>
      </Container>
      {/* This is the third section end */}
      {/* <DownloadApp /> */}
    </div>
  );
};

export default AboutUs;
