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
        className="h-auto xs:h-auto sm:h-auto md:h-auto lg:h-auto xl:h-[820px] 2xl:h-[820px] 3xl:h-[820px] rounded-[48px] w-[300px] xs:w-[340px] sm:w-[460px] md:w-[560px] lg:w-[740px] xl:w-[980px] 2xl:w-[1280px] 3xl:w-[1720px]"
        style={{
          backgroundImage: `${gradient}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-3 xs:mt-3 sm:mt-3 md:mt-3 lg:mt-5 xl:mt-5 2xl:mt-[136px] 3xl:mt-[136px] ml-5 xs:ml-5 sm:ml-5 md:ml-5 lg:ml-7 xl:ml-[62px] 2xl:ml-[62px] 3xl:ml-[62px]">
          <div className="space-y-5 xs:space-y-5 sm:space-y-6 md:space-y-10 lg:space-y-[45px] xl:space-y-[50px] 2xl:space-y-[66px] 3xl:space-y-[66px]">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-primaryColor font-poppins text-[28px] xs:text-[30px] sm:text-[35px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] 3xl:text-[70px] font-semibold w-[300px] xs:w-[350px] sm:w-[440px] md:w-[560px] lg:w-[750px] xl:w-[960px] 2xl:w-[1033px] 3xl:w-[1033px]"
            >
              {title}
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-primaryColor font-poppins text-[16px] xs:text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] w-[270px] xs:w-[350px] sm:w-[460px] md:w-[540px] lg:w-[750px] xl:w-[770px] 2xl:w-[770px] 3xl:w-[770px]"
            >
              {subtitle}
            </p>
            {/* Button Section */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row gap-2 xs:gap-3 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-5 2xl:gap-8 3xl:gap-8 items-center"
            >
              <Link to={playStore}>
                <img
                  src={playStorePic}
                  alt="Play Store"
                  className="w-[150px] xs:w-[150px] sm:w-[150px] md:w-[200px] lg:w-[200px] xl:w-[239px] 2xl:w-[239px] 3xl:w-[239px] h-[40px] xs:h-[40px] sm:h-[40px] md:h-[50px] lg:h-[50px] xl:h-[80px] 2xl:h-[80px] 3xl:h-[80px]"
                />
              </Link>
              <Link to={appStore}>
                <img
                  src={appStorePic}
                  alt="App Store"
                  className="w-[150px] xs:w-[150px] sm:w-[150px] md:w-[200px] lg:w-[200px] xl:w-[239px] 2xl:w-[239px] 3xl:w-[239px] h-[40px] xs:h-[40px] sm:h-[40px] md:h-[50px] lg:h-[50px] xl:h-[80px] 2xl:h-[80px] 3xl:h-[80px]"
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
