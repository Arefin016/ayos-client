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
          <div>
            <h1 className="text-[#172B4D] font-inter text-[31.625px] font-medium">
              Send your message
            </h1>
            {/*  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div className="flex flex-col">
                <label>First Name</label>
                <input
                  className="border border-[#D0D3D6] rounded-[37px]"
                  {...register("firstName")}
                />
                <label>First Name</label>
                <input {...register("firstName")} />
                <label>First Name</label>
                <input {...register("firstName")} />
              </div>

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
