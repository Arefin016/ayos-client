import Banner from "@/components/Banner/Banner";
import DownloadApp from "../../components/DownloadApp/DownloadApp";

const OurServices = () => {
  return (
    <div>
      <Banner
        title={
          <>
            Ayos: Effective. Reliable. Enab <br />
            ling.
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
        backgroundImage="https://i.postimg.cc/054swQp1/Rectangle-9.png"
        gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.38) 100%)"
      />
      <DownloadApp />
    </div>
  );
};

export default OurServices;
