import { useEffect, useState } from "react";
import playStore from "../../assets/images/playStorePic.png";
import appStore from "../../assets/images/appStorePic.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage("https://i.postimg.cc/MTvfGNm0/banner-Img.png");
  }, []);

  return (
    <section className="flex items-center justify-center pt-8">
      <div
        className="h-[820px] rounded-[48px] w-[1720px]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(9, 25, 64, 0.80) -0.85%, rgba(23, 64, 166, 0.00) 99.73%),url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-[136px] ml-[62px]">
          <div className="space-y-[66px]">
            <h1 className="text-primaryColor font-poppins text-[70px] font-semibold">
              Expert Assistance, Anytime, <br /> Anywhere Ayos
            </h1>
            <p className="text-primaryColor font-poppins text-[18px]">
              Connect with trusted professionals for all your home
              needs—cleaning, repairs, <br /> maintenance, and beyond. Post your
              job today and experience fast, reliable service <br /> with a
              hassle-free process!
            </p>
            {/* This is the button section */}
            <div className="flex flex-row gap-8">
              <Link to={"https://play.google.com/store/apps?hl=en&pli=1"}>
                <img src={playStore} alt="" />
              </Link>
              <Link to={"https://www.apple.com/app-store/"}>
                <img src={appStore} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
