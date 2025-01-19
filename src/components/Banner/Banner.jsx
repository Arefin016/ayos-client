import { Link } from "react-router-dom";
import playStore from "../../assets/images/playStorePic.png";
import appStore from "../../assets/images/appStorePic.png";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

const Banner = ({ title, subtitle, backgroundImage, gradient }) => {
  return (
    <section className="flex items-center justify-center pt-8">
      <div
        className="h-[820px] rounded-[48px] w-[1720px]"
        style={{
          backgroundImage: `${gradient}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-[136px] ml-[62px]">
          <div className="space-y-[66px]">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-primaryColor font-poppins text-[70px] font-semibold"
            >
              {title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-primaryColor font-poppins text-[18px]"
            >
              {subtitle}
            </p>
            {/* This is the button section */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-row gap-8"
            >
              <Link to={"https://play.google.com/store/apps?hl=en&pli=1"}>
                <img src={playStore} alt="Play Store" />
              </Link>
              <Link to={"https://www.apple.com/app-store/"}>
                <img src={appStore} alt="App Store" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
