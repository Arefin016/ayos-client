import Container from "../Container/Container";
import ayosPic from "../../assets/images/AyosPlatform.png";

const Contractor = ({ content }) => {
  console.log(content?.contractor?.thumbnail);
  return (
    <Container width="1461px">
      <section>
        <div className="flex items-center justify-center">
          {/* This is the image Content */}
          <div data-aos="zoom-in" className="w-[823px] h-[855px] object-cover">
            <img src={content?.contractor?.thumbnail} alt="" />
          </div>
          {/* This is the content */}
          <div className="flex flex-col space-y-10">
            {content?.contractor?.content.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <h1 className="text-[#172B4D] font-poppins text-[32px] font-semibold mb-[18px]">
                  {item?.title}
                </h1>
                <p className="text-[#6F767E] font-poppins text-[18px] font-normal">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contractor;
