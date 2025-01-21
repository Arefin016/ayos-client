import Container from "../Container/Container";
import downloadPic from "../../assets/images/downloadApp.png";
import SignUpBtn from "../SignUpBtn/SignUpBtn";
import playStorePic from "../../assets/images/googlePlayPic.png";
import appStorePic from "../../assets/images/appleStorePic.png";

const DownloadApp = () => {
  return (
    <Container width="1560px">
      <section className="bg-[#EEF3FF] rounded-[32px] mb-[93px] mt-20">
        <div className="flex lg:flex-row flex-col gap-5 items-center">
          <div className="ml-[51px]">
            <h2
              data-aos="fade-up"
              className="text-secondaryButton text-[56px] font-semibold"
            >
              Download the App and <br /> Start Building Better <br /> Habits
              Today!
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
