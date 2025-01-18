import Banner from "@/components/Banner/Banner";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import humanPic from "../../assets/images/aboutUsPic.png";

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
      {/* This is the first section start */}
      <section className="my-[115px]">
        <div className="px-[183px]">
          {/* First Div */}
          <div className="text-center space-y-[35px]">
            <h1 className="text-[#172B4D] font-poppins text-[40px] font-semibold">
              Who we are
            </h1>
            <p className="text-[#172B4D] font-poppins text-xl text-left">
              Ayos is a revolutionary platform that redefines how homeowners,
              property managers, and contractors connect and collaborate for
              home services. From cleaning and repairs to major renovations,
              Ayos effortlessly links homeowners with trusted, local
              professionals who deliver quality results. For contractors,
              especially small businesses and mom-and-pop operations from
              underserved communities, Ayos provides a suite of powerful tools
              to streamline business operations. Features like CRM, invoicing,
              and project management empower contractors to manage their
              workflows, enhance communication, and grow their businesses
              efficiently. <br /> By bridging the gap between customers and
              contractors, Ayos simplifies every step of the process—from
              discovering reliable service providers to completing projects
              seamlessly. Whether you're a homeowner looking for dependable help
              or a contractor seeking to scale your business, Ayos is the
              ultimate solution for thriving in the home services ecosystem.
            </p>
          </div>
          {/* Second Div */}
          <div className="text-center space-y-[35px] mt-[88px]">
            <h1 className="text-[#172B4D] font-poppins text-[40px] font-semibold">
              Why Choose Us
            </h1>
            <p className="text-[#172B4D] font-poppins text-xl text-left">
              What truly distinguishes Ayos is our unwavering commitment to
              transparency, trust, and fostering meaningful relationships.
              Unlike traditional models that can often lead to misunderstandings
              and disputes, our platform prioritizes open communication and
              clear, mutually agreed-upon terms. We harness the power of
              technology not just to optimize processes, but to create a vibrant
              community where both parties can interact with confidence,
              clarity, and mutual respect, ensuring every collaboration is
              seamless and impactful.
            </p>
          </div>
          {/* Third Div */}
          <div className="text-center space-y-[35px] mt-[88px]">
            <h1 className="text-[#172B4D] font-poppins text-[40px] font-semibold">
              What Users Need to Understand
            </h1>
            <p className="text-[#172B4D] font-poppins text-xl text-left">
              What truly distinguishes Ayos is our unwavering commitment to
              transparency, trust, and fostering meaningful relationships.
              Unlike traditional models that can often lead to misunderstandings
              and disputes, our platform prioritizes open communication and
              clear, mutually agreed-upon terms. We harness the power of
              technology not just to optimize processes, but to create a vibrant
              community where both parties can interact with confidence,
              clarity, and mutual respect, ensuring every collaboration is
              seamless and impactful.
            </p>
          </div>
        </div>
      </section>
      {/* This is the first section end */}
      {/* This is the second section start*/}
      <section className="bg-[#EEF3FF] px-[79px]">
        <div className="flex gap-10 items-center">
          {/* This is the image section */}
          <div>
            <img src={humanPic} alt="" />
          </div>
          {/* This is the content section */}
          <div>
            <div>
              <div className="space-y-[31px] mb-12">
                <h1 className="text-[#172B4D] font-poppins text-[40px] font-semibold">
                  Transform your home and Customer
                </h1>
                <p className="text-[#172B4D] font-poppins text-xl font-medium">
                  Uncover the best characteristics that establish Ayos as the premier home enhancement 
                  <br />
                  option.
                </p>
              </div>
              {/*  */}
              <div className="flex gap-[81px]">
                {/* This is the left side content */}
                <div className="space-y-[27px]">
                  {/* Seamless navigation */}
                  <div className="space-y-4 w-[390px]">
                    <h1 className="aboutTitle">Seamless Navigation</h1>
                    <p className="aboutParagraph">
                      Our intuitive interface ensures you can find the right
                      contractor swiftly and effortlessly, making job management
                      a breeze with just a few clicks.
                    </p>
                  </div>
                  {/* Think Slow, Act Fast */}
                  <div className="space-y-4 w-[399px]">
                    <h1 className="aboutTitle">Think Slow, Act Fast.</h1>
                    <p className="aboutParagraph">
                      <>
                        Effortful, controlled, and data-driven decisions are{" "}
                        <br />
                        better than a quick decision and sloppy execution.
                      </>
                    </p>
                  </div>
                  {/* Simple Job Scheduling */}
                  <div className="space-y-4 w-[399px]">
                    <h1 className="aboutTitle">Simple Job Scheduling</h1>
                    <p className="aboutParagraph">
                      Effortful, controlled, and data-driven decisions are{" "}
                      <br />
                      better than a quick decision and sloppy execution.
                    </p>
                  </div>
                </div>
                {/* This is the right side content */}
                <div className="space-y-[27px]">
                  {/* Streamlined Communication */}
                  <div className="space-y-4 w-[395px]">
                    <h1 className="aboutTitle">Streamlined Communication</h1>
                    <p className="aboutParagraph">
                      <>
                        Nothing at Pathao is someone else’s problem. We <br />{" "}
                        all work together on a shared mission.
                      </>
                    </p>
                  </div>
                  {/* Verified and Reliable Contractors */}
                  <div className="space-y-4 w-[401px]">
                    <h1 className="aboutTitle">
                      Verified and Reliable Contractors
                    </h1>
                    <p className="aboutParagraph">
                      <>
                        Pathao exists to serve. Everything we do <br /> impacts{" "}
                        <br />
                        thousands of people.
                      </>
                    </p>
                  </div>
                  {/* 24/7 Customer Support */}
                  <div className="space-y-4 w-[395px]">
                    <h1 className="aboutTitle">24/7 Customer Support</h1>
                    <p className="aboutParagraph">
                      Our intuitive interface ensures you can find the right
                      contractor swiftly and effortlessly, making job management
                      a breeze with just a few clicks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* This is the second section end*/}
      <DownloadApp />
    </div>
  );
};

export default AboutUs;
