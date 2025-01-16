import { useEffect, useState } from "react";
import Container from "../Container/Container";

const Banner = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage("https://i.postimg.cc/MTvfGNm0/banner-Img.png");
  }, []);

  return (
    <Container width="1720px">
      <section>
        <div
          className="relative w-full h-screen flex items-center justify-center"
          style={{
            background: `linear-gradient(90deg, rgba(9, 25, 64, 0.80) -0.85%, rgba(23, 64, 166, 0.00) 99.73%), url(${backgroundImage})`,
            backgroundSize: "1720px 820px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "48px",
          }}
        ></div>
      </section>
    </Container>
  );
};

export default Banner;
