import React from "react";
import bucketPic from "../../../assets/images/bucket.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner/Spinner";

const ConnectWithBestHome = () => {
  const apiClient = axios.create({
    baseURL: import.meta.env.VITE_SITE_URL,
  });

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
    return <div className="text-center my-36">No data found</div>;
  }

  return (
    <section className="bg-[#FAFAFA] py-[98px] px-[233px] mb-[100px]">
      <div className="flex flex-row gap-[138px] items-center">
        <div data-aos="zoom-in">
          <img
            className="h-[858px] w-[411px] object-cover"
            src={data?.data.image}
            alt=""
          />
        </div>
        {/*  */}
        {/* This is the second div  */}
        <div className="flex flex-col space-y-[60px] relative">
          <h2
            data-aos="fade-up"
            className="text-[#172B4D] text-[40px] font-semibold font-poppins w-[902px]"
          >
            {data?.data.title}
          </h2>
          <div className="flex flex-col">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="mb-8 text-[#172B4D] text-2xl font-medium"
            >
              {data?.data?.sub_title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-[#6F767E] text-[18px]"
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
            className="flex flex-row gap-8"
          >
            <Link to={data?.data?.button_two_url}>
              <img src={data?.data?.button_one_image} alt="" />
            </Link>
            <Link to={data?.data?.button_one_url}>
              <img src={data?.data?.button_two_image} alt="" />
            </Link>
          </div>
          {/* This is the bucket section */}
          <div className="absolute top-[400px] right-[-233px]">
            <img src={bucketPic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithBestHome;
