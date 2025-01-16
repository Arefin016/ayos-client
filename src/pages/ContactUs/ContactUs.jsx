import contactUs from "../../assets/images/contactUsPic.png";

const ContactUs = () => {
  return (
    <section className="">
      <div className="flex flex-row gap-[409px] items-center bg-[#F5F6F7] pl-[181px] pr-[327px]">
        {/* This is the content */}
        <div>
          <h1 className="text-[#172B4D] font-inter text-[45.82px] font-medium mb-[18px]">
            Ayos Service
          </h1>
          <p className="text-[#5D6467] text-xl font-roboto">
            Our press release, coverage and press kit
          </p>
        </div>
        {/* This is the content */}
        <div>
          <img src={contactUs} alt="" />
        </div>
      </div>

      {/* This is the contact us */}
      <div className="flex justify-center gap-[67px] mt-[73px]">
        {/* This is the content section */}
        <div>
          <h1 className="text-[#172B4D] font-poppins text-[62px] font-semibold mb-6">
            Contact us
          </h1>
          <p className="text-[#646A69] font-poppins font-normal">
            We are here to help you make a first move to greener choice.
          </p>
        </div>
        {/* This is the input section */}
        <div>
          <h2>This is the input section</h2>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
