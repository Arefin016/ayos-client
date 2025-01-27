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
        <div className="mt-[136px] ml-[62px] xs:ml-4 sm:ml-4 md:ml-8 lg:ml-[62px]">
          <div className="space-y-[66px] xs:space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-[66px]">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-primaryColor font-poppins text-[40px] xs:text-[50px] sm:text-[60px] md:text-[70px] font-semibold w-full xs:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[1033px]"
            >
              {title}
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-primaryColor font-poppins text-[16px] xs:text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] w-full sm:w-[80%] md:w-[70%] lg:w-[770px]"
            >
              {subtitle}
            </p>
            {/* Button Section */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row gap-8 sm:gap-6 md:gap-8"
            >
              <Link to={playStore}>
                <img
                  src={playStorePic}
                  alt="Play Store"
                  className="w-[180px] xs:w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[73px]"
                />
              </Link>
              <Link to={appStore}>
                <img
                  src={appStorePic}
                  alt="App Store"
                  className="w-[180px] xs:w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
