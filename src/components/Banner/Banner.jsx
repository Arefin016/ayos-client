import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

const Banner = ({
  title,
  subtitle,
  backgroundImage,
  gradient,
  playStore,
  appStore,
  playStorePic,
  appStorePic,
}) => {
  return (
    <section className="flex items-center justify-center pt-8">
      <div
        className="lg:h-[820px] rounded-[48px] lg:w-[1720px]"
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
              className="text-primaryColor font-poppins text-[70px] font-semibold w-[1033px]"
            >
              {title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-primaryColor font-poppins text-[18px] w-[770px]"
            >
              {subtitle}
            </p>
            {/* This is the button section */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-row gap-8"
            >
              <Link to={playStore}>
                <img src={playStorePic} alt="Play Store" />
              </Link>
              <Link to={appStore}>
                <img src={appStorePic} alt="App Store" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
