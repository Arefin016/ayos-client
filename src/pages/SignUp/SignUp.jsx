import Container from "../../components/Container/Container";
import signUpPic from "../../assets/images/signupPic.png";
import playStorePic from "../../assets/images/googlePlayPic.png";
import appStorePic from "../../assets/images/appleStorePic.png";
import SignUpBtn from "../../components/SignUpBtn/SignUpBtn";
import { SiteLogo, UploadLogo } from "@/components/SVG/SVG";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  return (
    <Container>
      <Helmet>
        <title>Ayos || Sign Up</title>
      </Helmet>
      <section className="mt-[81px] mb-[74px]">
        <div className="flex gap-2">
          {/* This is the first div */}
          <img
            data-aos="zoom-in-right"
            data-aos-delay="100"
            src={signUpPic}
            alt=""
          />

          {/* This is the second div */}
          <div
            data-aos="zoom-in-left"
            data-aos-delay="100"
            className="w-[603px] h-auto py-[35px] px-[52px] bg-white_transparent rounded-3xl shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] flex flex-col gap-y-[74px] items-center "
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
              <div className="flex flex-row gap-x-[60px] ">
                <SignUpBtn
                  imgSrc={playStorePic}
                  primaryText="Get it on"
                  secondaryText="Google Play"
                  link="https://play.google.com/store/apps?hl=en&pli=1"
                ></SignUpBtn>
                {/* This is the App Store button  */}
                <SignUpBtn
                  imgSrc={appStorePic}
                  primaryText="Download on the"
                  secondaryText="App Store"
                  link="https://www.apple.com/app-store/"
                ></SignUpBtn>
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
