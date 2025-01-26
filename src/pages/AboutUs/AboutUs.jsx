import Banner from "@/components/Banner/Banner";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import humanPic from "../../assets/images/aboutUsPic.png";
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
      console.error("Error fetching data:", err);
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

  console.log(needToUnderData, "i'm html data");

  const parsedData =
    typeof needToUnderData?.data?.description === "string"
      ? needToUnderData?.data?.description
      : JSON.stringify(needToUnderData?.data?.description, null, 2);

  console.log(needToUnderData?.data?.title);

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
      <section className="my-[115px]">
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
      <section className="bg-[#EEF3FF] px-[79px]">
        <div className="flex lg:flex-row flex-col gap-10 items-center">
          {/* This is the image section */}
          <div data-aos="zoom-in">
            <img src={humanPic} alt="" />
          </div>
          {/* This is the content section */}
          <div>
            <div className="space-y-[31px] mb-12">
              <h1
                data-aos="fade-up"
                className="text-[#172B4D] font-poppins text-[40px] font-semibold"
              >
                Transform your home and Customer
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-[#172B4D] font-poppins text-xl font-medium"
              >
                Uncover the best characteristics that establish Ayos as the premier home enhancement 
                <br />
                option.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex lg:flex-row flex-col gap-[81px]"
            >
              {/* This is the left side content */}
              <div className="space-y-[27px]">
                {/* Seamless navigation */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="space-y-4 w-[390px]"
                >
                  <h1 className="aboutTitle">Seamless Navigation</h1>
                  <p className="aboutParagraph">
                    Our intuitive interface ensures you can find the right
                    contractor swiftly and effortlessly, making job management a
                    breeze with just a few clicks.
                  </p>
                </div>
                {/* Think Slow, Act Fast */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="space-y-4 w-[399px]"
                >
                  <h1 className="aboutTitle">Think Slow, Act Fast.</h1>
                  <p className="aboutParagraph">
                    <>
                      Effortful, controlled, and data-driven decisions are{" "}
                      <br />
                      better than a quick decision and sloppy execution.
                    </>
                  </p>
                </div>
                {/* Simple Job Scheduling */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="space-y-4 w-[399px]"
                >
                  <h1 className="aboutTitle">Simple Job Scheduling</h1>
                  <p className="aboutParagraph">
                    Effortful, controlled, and data-driven decisions are <br />
                    better than a quick decision and sloppy execution.
                  </p>
                </div>
              </div>
              {/* This is the right side content */}
              <div className="space-y-[55px]">
                {/* Streamlined Communication */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="space-y-4 w-[395px]"
                >
                  <h1 className="aboutTitle">Streamlined Communication</h1>
                  <p className="aboutParagraph">
                    <>
                      Nothing at Pathao is someone else’s problem. We <br /> all
                      work together on a shared mission.
                    </>
                  </p>
                </div>
                {/* Verified and Reliable Contractors */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="space-y-4 w-[401px]"
                >
                  <h1 className="aboutTitle">
                    Verified and Reliable Contractors
                  </h1>
                  <p className="aboutParagraph">
                    <>
                      Pathao exists to serve. Everything we do <br /> impacts{" "}
                      <br />
                      thousands of people.
                    </>
                  </p>
                </div>
                {/* 24/7 Customer Support */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="space-y-4 w-[395px]"
                >
                  <h1 className="aboutTitle">24/7 Customer Support</h1>
                  <p className="aboutParagraph">
                    Our intuitive interface ensures you can find the right
                    contractor swiftly and effortlessly, making job management a
                    breeze with just a few clicks.
                  </p>
                </div>
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
      <DownloadApp />
    </div>
  );
};

export default AboutUs;
