import Container from "../Container/Container";
import downloadPic from "../../assets/images/downloadApp.png";
import SignUpBtn from "../SignUpBtn/SignUpBtn";
import playStorePic from "../../assets/images/googlePlayPic.png";
import appStorePic from "../../assets/images/appleStorePic.png";

const DownloadApp = () => {
  return (
    <Container width="1560px">
      <section className="bg-[#EEF3FF] rounded-[32px] mb-[93px] mt-5 xs:mt-5 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5 2xl:mt-10 3xl:mt-20">
        <div className="flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row 3xl:flex-row gap-5 items-center">
          <div className="ml-4 xs:ml-4 sm:ml-4 md:ml-4 lg:ml-8 xl:ml-10 2xl:ml-[51px] 3xl:ml-[51px]">
            <h2
              data-aos="fade-up"
              className="text-secondaryButton text-[30px] xs:text-[30px] sm:text-[30px] md:text-[56px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] 3xl:text-[56px] font-poppins w-full xs:w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[650px] 3xl:w-[650px] font-semibold"
            >
              Download the App and Start Building Better Habits Today!
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay=" 100"
              className="text-[#585858] text-xl mt-6"
            >
              Take control of your wellness journey with personalized AI
              insights. Track <br /> your progress, stay consistent, and achieve
              your goals — right from your <br /> device.
            </p>
            {/* This is the button section */}
            <div
              data-aos="fade-up"
              data-aos-delay=" 200"
              className="flex flex-row gap-4 mt-[50px]"
            >
              <SignUpBtn
                imgSrc={appStorePic}
                primaryText="Download on the"
                secondaryText="App Store"
                link="https://www.apple.com/app-store/"
              />
              <SignUpBtn
                imgSrc={playStorePic}
                primaryText="Get it on"
                secondaryText="Google Play"
                link="https://play.google.com/store/apps?hl=en&pli=1"
              />
            </div>
          </div>
          {/* This is the image section */}
          <div data-aos="zoom-in">
            <img src={downloadPic} alt="" />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default DownloadApp;
