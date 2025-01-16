import Banner from "@/components/Banner/Banner";
import DownloadApp from "../../components/DownloadApp/DownloadApp";

const AboutUs = () => {
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
        backgroundImage="https://i.postimg.cc/05X80Z13/image.png"
        gradient="linear-gradient(90deg, rgba(9, 25, 64, 0.80) -0.85%, rgba(23, 64, 166, 0.00) 99.73%)"
      />
      <DownloadApp />
    </div>
  );
};

export default AboutUs;
