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
      {/*  */}
      {/* <AyosPlatform /> */}
      {/* <ConnectWithBestHome /> */}
      {/* <CardSection /> */}
      {/* <UnlockSection /> */}
      {/* <FAQ /> */}
      {/* <DownloadApp /> */}
    </div>
  );
};

export default Home;
