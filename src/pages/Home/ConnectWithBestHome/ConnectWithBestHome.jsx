import React from "react";
import device from "../../../assets/images/Device.png";
import bucketPic from "../../../assets/images/bucket.png";

const ConnectWithBestHome = () => {
  return (
    <section className="bg-[#FAFAFA] py-[98px] px-[233px] mt-[125px] mb-[100px]">
      <div className="flex flex-row gap-[138px] items-center">
        <div>
          <img
            className="h-[858px] w-[411px] object-cover"
            src={device}
            alt=""
          />
        </div>
        {/*  */}
        {/* This is the second div  */}
        <div className="flex flex-col space-y-[60px] relative">
          <h2 className="text-[#172B4D] text-[40px] font-semibold font-poppins">
            Connect with the Best Home Improvement <br /> Pros and Transform
            Your Space
          </h2>
          <div className="flex flex-col">
            <h1 className="mb-8 text-[#172B4D] text-2xl font-medium">
              Save Time and Money with Ayos: Your Partner for Effortless <br />
              Solutions
            </h1>
            <p className="text-[#6F767E] text-[18px]">
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
          <div className="flex flex-row gap-8">
            <button>Google Play Store</button>
            <button>App Store</button>
          </div>
          {/* This is the bucket section */}
          <div className="absolute top-[418px] right-[-259px]">
            <img src={bucketPic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithBestHome;
