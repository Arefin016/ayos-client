import Container from "../Container/Container";
import ayosPic from "../../assets/images/AyosPlatform.png";

const Contractor = () => {
  return (
    <Container width="1461px">
      <section>
        <div className="flex items-center justify-center">
          {/* This is the image Content */}
          <div className="w-[823px] h-[855px] object-cover">
            <img src={ayosPic} alt="" />
          </div>
          {/* This is the content */}
          <div className="flex flex-col space-y-10">
            <div className="">
              <h1 className="text-[#172B4D] font-poppins text-[32px] font-semibold mb-[18px]">
                Contractor service provider, Save Time
              </h1>
              <p className="text-[#6F767E] font-poppins text-[18px] font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <h1 className="text-[#172B4D] font-poppins text-[32px] font-semibold mb-[18px]">
                Contractor service provider, Save Time
              </h1>
              <p className="text-[#6F767E] font-poppins text-[18px] font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <h1 className="text-[#172B4D] font-poppins text-[32px] font-semibold mb-[18px]">
                Contractor service provider, Save Time
              </h1>
              <p className="text-[#6F767E] font-poppins text-[18px] font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contractor;
