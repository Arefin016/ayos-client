import DownloadApp from "../../../components/DownloadApp/DownloadApp";
import Banner from "../../../components/Banner/Banner";
import ConnectWithBestHome from "../ConnectWithBestHome/ConnectWithBestHome";
import FAQ from "../FAQ/FAQ";
import AyosPlatform from "../AyosPlatform/AyosPlatform";
import CardSection from "../CardSection/CardSection";
import UnlockSection from "../UnlockSection/UnlockSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Ayos || Home</title>
      </Helmet>
      <Banner
        title={
          <>
            Expert Assistance, Anytime, <br /> Anywhere Ayos
          </>
        }
        subtitle={
          <>
            Connect with trusted professionals for all your home needs—cleaning,
            repairs,
            <br />
            maintenance, and beyond. Post your job today and experience fast,
            reliable service <br /> with a hassle-free process!
          </>
        }
        backgroundImage="https://i.postimg.cc/MTvfGNm0/banner-Img.png"
        gradient="linear-gradient(90deg, rgba(9, 25, 64, 0.80) -0.85%, rgba(23, 64, 166, 0.00) 99.73%)"
      />
      <AyosPlatform />
      <ConnectWithBestHome />
      <CardSection />
      <UnlockSection />
      <FAQ />
      <DownloadApp />
    </div>
  );
};

export default Home;
