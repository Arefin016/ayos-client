import React from "react";
import bucketPic from "../../../assets/images/bucket.png";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner/Spinner";
import { Empty } from "antd";
import apiClient from "@/utils/apiClient";

const ConnectWithBestHome = () => {
  const connectWithBestHome = async () => {
    try {
      const response = await apiClient.get("home-page/feature");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", err);
      return null;
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["connectWithHome"],
    queryFn: connectWithBestHome,
  });

  // console.log(data?.data);
  if (isLoading) return <Spinner />;

  if (!data || !data?.data) {
    return <Empty />;
  }

  return (
    <section className="bg-[#FAFAFA] py-0 xs:py-0 sm:py-0 md:py-0 lg:py-0 xl:py-[98px] 2xl:py-[98px] 3xl:py-[98px] px-0 xs:px-0 sm:px-0 md:px-0 lg:px-0 xl:px-[233px] 2xl:px-[233px] 3xl:px-[233px] mb-[100px]">
      <div className="flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row gap-[100px] items-center w-full xs:w-full sm:w-full md:w-[200px] lg:w-auto xl:w-[1437px] 2xl:w-[1437px] 3xl:w-[1437px]">
        <div data-aos="zoom-in">
          <img
            className="h-auto w-full xs:w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[411px] 2xl:w-[411px] 3xl:w-[411px] object-cover mx-auto"
            src={data?.data.image}
            alt=""
          />
        </div>

        {/*  */}
        {/* This is the second div  */}
        <div className="flex flex-col space-y-[60px] relative">
          <h2
            data-aos="fade-up"
            className="text-[#172B4D] text-[14px] xs:text-[14px] sm:text-[14px] md:text-[14px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] 3xl:text-[40px] font-semibold font-poppins w-full xs:w-full sm:w-full md:w-full lg:w-[902px] xl:w-[902px] 2xl:w-[902px] 3xl:w-[902px]"
          >
            {data?.data.title}
          </h2>
          <div className="flex flex-col">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="mb-8 text-[#172B4D] text-2xl font-medium w-[770px]"
            >
              {data?.data?.sub_title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-[#6F767E] text-[18px] w-[770px]"
            >
              With Ayos, discovering trusted home improvement professionals is
              effortless. We <br /> seamlessly connect homeowners and landlords
              with thoroughly vetted contractors <br /> for cleaning, repairs,
              and maintenance. Experience dependable service, transparent <br />
              communication, and budget-friendly solutions—all with upfront
              pricing and a hassle- <br />
              free process designed to meet your needs.
            </p>
          </div>
          {/* This is the button section */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row gap-8"
          >
            <Link to={data?.data?.button_two_url}>
              <img
                className="w-full xs:w-full sm:w-full md:w-auto lg:w-auto xl:w-auto 2xl:w-auto 3xl:w-auto" // Makes image responsive based on screen size
                src={data?.data?.button_one_image}
                alt="Button 1"
              />
            </Link>
            <Link to={data?.data?.button_one_url}>
              <img
                className="w-full xs:w-full sm:w-full md:w-auto lg:w-auto xl:w-auto 2xl:w-auto 3xl:w-auto" // Makes image responsive based on screen size
                src={data?.data?.button_two_image}
                alt="Button 2"
              />
            </Link>
          </div>

          {/* This is the bucket section */}
          <div className="absolute top-[422px] right-[-255px] xs:top-[300px] sm:top-[350px] md:top-[400px] lg:top-[422px] xl:top-[422px] 2xl:top-[400px]  xs:right-[-150px] sm:right-[-200px] md:right-[-250px] lg:right-[-255px] xl:right-[-255px] 2xl:right-[-255px] 3xl:right-[-255px]">
            <img
              className="w-[200px] xs:w-[150px] sm:w-[175px] md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[300px] 3xl:w-[300px]"
              src={bucketPic}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithBestHome;
