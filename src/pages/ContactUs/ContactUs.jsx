import { useForm } from "react-hook-form";
import contactUs from "../../assets/images/contactUsPic.png";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
        <div className="">
          <div className="mb-[94px]">
            <h1 className="text-[#172B4D] font-inter text-[31.625px] font-medium">
              Send your message
            </h1>
            {/*  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div className="flex flex-col mt-10 space-y-6">
                {/* Your Name Field Start */}
                <label className="flex gap-1 items-center text-[#152934] font-roboto font-medium">
                  Your Name{" "}
                  <span className="text-[#E83330] font-roboto font-medium">
                    *
                  </span>{" "}
                </label>
                <input
                  className="border border-[#D0D3D6] rounded-[37px] py-5 px-4 w-[642px] text-[#D0D3D6] font-poppins text-[16px]"
                  placeholder="Enter your name"
                  {...register("firstName")}
                />
                {/* Your Name Field end */}
                {/* Your Email Address Field Start */}
                <label className="flex gap-1 items-center text-[#152934] font-roboto font-medium mb-4">
                  Email Address{" "}
                  <span className="text-[#E83330] font-roboto font-medium">
                    *
                  </span>{" "}
                </label>
                <input
                  className="border border-[#D0D3D6] rounded-[37px] py-5 px-4 w-[642px] text-[#D0D3D6] font-poppins text-[16px]"
                  placeholder="Enter your email address"
                  {...register("firstName")}
                />
                {/* Your Email Address Field end */}
                {/* Your Mobile Number Field Start */}
                <label className="flex gap-1 items-center text-[#152934] font-roboto font-medium mb-4">
                  Mobile Number{" "}
                </label>
                <input
                  className="border border-[#D0D3D6] rounded-[37px] py-5 px-4 w-[642px] text-[#D0D3D6] font-poppins text-[16px]"
                  placeholder="01XXXXXXXXX"
                  {...register("firstName")}
                />
                {/* Your Mobile Number Field end */}
                {/* message Field Section Start */}
                <label className="flex gap-1 items-center text-[#152934] font-roboto font-medium mb-4">
                  Message{" "}
                  <span className="text-[#E83330] font-roboto font-medium">
                    *
                  </span>{" "}
                </label>
                <textarea
                  className="border border-[#D0D3D6] rounded-[37px] py-5 px-4 w-[642px] h-[111px] text-[#D0D3D6] font-poppins text-[16px]"
                  placeholder="Write your message"
                  {...register("firstName")}
                />
                {/* message Field Section ends */}
                <p className="w-[643px] text-[#5D6A72] font-poppins text-[14px]">
                  <>
                    We want your input: questions, bug reports, complaints,
                    praise, feature <br /> requests — every little bit helps.
                    Let us know what we can do to improve <br /> ayos.
                  </>
                </p>
              </div>
              <input
                className="mt-6 bg-[#083EC5] rounded-[37px] px-[108px] h-[57px] text-primaryColor font-poppins text-[16px] cursor-pointer"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
