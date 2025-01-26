import Container from "../../components/Container/Container";
import signUpPic from "../../assets/images/signupPic.png";
import { SiteLogo, UploadLogo } from "@/components/SVG/SVG";
import { Helmet } from "react-helmet-async";

import playBtn from "../../assets/images/signupBtn1.png";
import appBtn from "../../assets/images/signupBtn2.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container>
      <Helmet>
        <title>Ayos || Sign Up</title>
      </Helmet>
      <section className="mt-[81px] mb-[74px]">
        <div className="flex flex-col xs:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row 3xl:flex-row gap-2">
          {/* This is the first div */}
          <img
            data-aos="zoom-in-right"
            data-aos-delay="100"
            src={signUpPic}
            alt=""
            className="w-full xs:w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[50%] 3xl:w-[50%] 4xl:w-[1127px] h-auto xs:h-auto sm:h-auto md:h-auto lg:h-auto xl:h-[619px] 2xl:h-[619px] 3xl:h-auto "
          />

          {/* This is the second div */}
          <div
            data-aos="zoom-in-left"
            data-aos-delay="100"
            className="w-full xs:w-full sm:w-full md:w-full lg:w-[603px] xl:w-[603px] 2xl:w-[603px] 3xl:w-[603px] h-auto py-5 xs:py-4 sm:py-4 md:py-4 lg:py-[35px] xl:py-[35px] 2xl:py-[35px] 3xl:py-[35px] px-4 xs:px-4 sm:px-4 md:px-4 lg:px-[52px] xl:px-[52px] 2xl:px-[52px] 3xl:px-[52px] bg-white_transparent rounded-3xl shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] flex flex-col gap-y-5 xs:gap-y-5 sm:gap-y-5 md:gap-y-8 lg:gap-y-[74px] xl:gap-y-[74px] 2xl:gap-y-[74px] 3xl:gap-y-[74px] items-center"
          >
            {/* This is the logo section start */}
            <div className="flex flex-col gap-y-[26px] items-center">
              <SiteLogo></SiteLogo>
              <p className="font-jakarta text-2xl font-bold">
                Download the app
              </p>
            </div>
            <UploadLogo />
            <div className="flex flex-col gap-y-[26px]">
              <div className="flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-[60px] xs:gap-x-[60px] sm:gap-x-[60px] md:gap-x-[60px] lg:gap-x-[60px] xl:gap-x-[60px] 2xl:gap-x-[60px] 3xl:gap-x-[60px]">
                <Link to={"https://play.google.com/store/apps?hl=en&zxpli=1"}>
                  <img src={playBtn} alt="" />
                </Link>
                <Link to={"https://www.apple.com/app-store/"}>
                  <img src={appBtn} alt="" />
                </Link>
              </div>
              <p className=" text-[16px] font-normal leading-[180%] text-[#172B4D] text-center ">
                ou have to download the app to log in as a contractor. Click on
                the button to download the app.
              </p>
            </div>
            {/* This is the logo section end */}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default SignUp;
