import Banner from "@/components/Banner/Banner";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import humanPic from "../../assets/images/aboutUsPic.png";
import Container from "@/components/Container/Container";
import { Helmet } from "react-helmet-async";
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner/Spinner";
import { Empty } from "antd";

const AboutUs = () => {
  // This is the about us banner section fetch data
  const aboutUsData = async () => {
    try {
      const response = await apiClient.get("/about-page/banner");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", err);
      return null;
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["aboutUsBannerData"],
    queryFn: aboutUsData,
  });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <Helmet>
        <title>Ayos || About Us</title>
      </Helmet>
      {data && data?.data ? (
        <Banner
          title={data?.data?.title}
          subtitle={data?.data?.description}
          backgroundImage="https://i.postimg.cc/05X80Z13/image.png"
          gradient="linear-gradient(90deg, rgba(9, 25, 64, 0.80) -0.85%, rgba(23, 64, 166, 0.00) 99.73%)"
          playStore={data?.data?.button_two_url}
          appStore={data?.data?.button_one_url}
          playStorePic={data?.data?.button_one_image}
          appStorePic={data?.data?.button_two_image}
        />
      ) : (
        <Empty />
      )}
      {/* This is the first section start */}
      <section className="my-[115px]">
        <div className="lg:px-[183px]">
          {/* First Div */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center space-y-[35px]"
          >
            <h1 className="title">Who we are</h1>
            <p className="paragraph">
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
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center space-y-[35px] mt-[88px]"
          >
            <h1 className="title">Why Choose Us</h1>
            <p className="paragraph">
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
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center space-y-[35px] mt-[88px]"
          >
            <h1 className="title">What Users Need to Understand</h1>
            <p className="paragraph">
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
        <div className="flex lg:flex-row flex-col gap-10 items-center">
          {/* This is the image section */}
          <div data-aos="zoom-in">
            <img src={humanPic} alt="" />
          </div>
          {/* This is the content section */}
          <div>
            <div className="space-y-[31px] mb-12">
              <h1
                data-aos="fade-up"
                className="text-[#172B4D] font-poppins text-[40px] font-semibold"
              >
                Transform your home and Customer
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-[#172B4D] font-poppins text-xl font-medium"
              >
                Uncover the best characteristics that establish Ayos as the premier home enhancement 
                <br />
                option.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex lg:flex-row flex-col gap-[81px]"
            >
              {/* This is the left side content */}
              <div className="space-y-[27px]">
                {/* Seamless navigation */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="space-y-4 w-[390px]"
                >
                  <h1 className="aboutTitle">Seamless Navigation</h1>
                  <p className="aboutParagraph">
                    Our intuitive interface ensures you can find the right
                    contractor swiftly and effortlessly, making job management a
                    breeze with just a few clicks.
                  </p>
                </div>
                {/* Think Slow, Act Fast */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="space-y-4 w-[399px]"
                >
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
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="space-y-4 w-[399px]"
                >
                  <h1 className="aboutTitle">Simple Job Scheduling</h1>
                  <p className="aboutParagraph">
                    Effortful, controlled, and data-driven decisions are <br />
                    better than a quick decision and sloppy execution.
                  </p>
                </div>
              </div>
              {/* This is the right side content */}
              <div className="space-y-[55px]">
                {/* Streamlined Communication */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="space-y-4 w-[395px]"
                >
                  <h1 className="aboutTitle">Streamlined Communication</h1>
                  <p className="aboutParagraph">
                    <>
                      Nothing at Pathao is someone else’s problem. We <br /> all
                      work together on a shared mission.
                    </>
                  </p>
                </div>
                {/* Verified and Reliable Contractors */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="space-y-4 w-[401px]"
                >
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
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="space-y-4 w-[395px]"
                >
                  <h1 className="aboutTitle">24/7 Customer Support</h1>
                  <p className="aboutParagraph">
                    Our intuitive interface ensures you can find the right
                    contractor swiftly and effortlessly, making job management a
                    breeze with just a few clicks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* This is the second section end*/}

      {/* This is the third section start */}
      <Container width="1560px">
        <section className="mt-[120px]">
          <div>
            <div className="text-center space-y-[35px]">
              <h1 data-aos="fade-up" className="title">
                What Users Need to Understand
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="paragraph leading-9"
              >
                At Ayos, we aim to revolutionize the way homeowners and
                contractors connect, collaborate, and achieve success. Far
                beyond a simple marketplace, Ayos is your ultimate tool for
                empowerment and freedom. Whether you’re a homeowner seeking
                exceptional services or a contractor pursuing fair
                opportunities, our platform is purpose-built to meet your needs
                and elevate your experience. We don’t just facilitate
                connections—we provide an all-in-one solution complete with
                project management features, secure payment channels, and a
                robust feedback system to maintain the highest standards of
                quality and trust. <br />
                {/* Features */}
                <div className="mt-10">
                  <span className="text-[#172B4D] font-poppins text-2xl font-medium pt-2">
                    Features
                  </span>
                  <ul
                    data-aos="fade-up"
                    className="space-y-3 mt-2 ml-3 leading-9 list-none"
                  >
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      Seamless Connections: An intuitive interface that
                      effortlessly links homeowners with the ideal contractor
                      for their project.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      Verified Contractor Profiles: Access detailed profiles
                      with authentic reviews and ratings to make informed
                      decisions.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      Competitive Bidding System: Ensures fair and transparent
                      pricing for all projects.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      Comprehensive Project Management: Scheduling, invoicing,
                      and organizational tools tailored for contractors.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      In-App Messaging: A secure and efficient way to
                      communicate directly within the platform.
                    </li>
                  </ul>
                </div>
                {/* Benefits for Homeowners */}
                <div className="mt-10">
                  <span
                    data-aos="fade-up"
                    className="text-[#172B4D] font-poppins text-2xl font-medium pt-2"
                  >
                    Benefits for Homeowners
                  </span>
                  <ul
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="space-y-3 mt-2 ml-3 leading-9 list-none"
                  >
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      Curated Network of Experts: Gain access to a vetted
                      community of top-rated contractors.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      Budget-Friendly Options: Benefit from competitive pricing
                      tailored to your financial needs.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      Project Oversight: Stay informed and in control at every
                      stage with powerful management tools.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      Effortless Communication: Maintain clear, open lines of
                      dialogue with your contractor throughout the process.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      Peace of Mind: Trust that your project is in capable hands
                      from start to finish.
                    </li>
                  </ul>
                </div>
                {/* Benefits for Contractors */}
                <div className="mt-10">
                  <span
                    data-aos="fade-up"
                    className="text-[#172B4D] font-poppins text-2xl font-medium pt-2"
                  >
                    Benefits for Contractors
                  </span>
                  <ul
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="space-y-3 mt-2 ml-3 leading-9 list-none"
                  >
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      New Business Opportunities: Easily connect with homeowners
                      actively searching for your expertise.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      Fair Competition: The bidding system rewards quality and
                      ensures equitable pricing.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      Streamlined Operations: Use built-in tools to simplify
                      scheduling, invoicing, and overall project management.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      Enhanced Client Communication: Strengthen relationships
                      through seamless in-app messaging.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#172B4D]"></span>
                      Increased Visibility: Boost your professional reach and
                      attract more clients.
                    </li>
                  </ul>
                </div>
                {/* Why Ayos? */}
                <div className="mt-10">
                  <h1
                    data-aos="fade-up"
                    className="text-[#172B4D] font-poppins text-[32px] font-medium"
                  >
                    Why Ayos?
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="mt-2 leading-9"
                  >
                    At Ayos, we are reshaping the traditional landscape of home
                    improvement and construction services. Our platform is built
                    on principles of fairness, efficiency, and inclusivity.
                    Whether you’re looking to enhance your living space or grow
                    your contracting business, Allbetter offers the tools,
                    support, and trust you need to <br /> thrive. Our dedication
                    to innovation and user success drives everything we do,
                    making Allbetter a trusted partner in achieving your goals.
                    Join us in transforming the way homeowners and contractors
                    work together—experience the Allbetter difference today. 4o
                  </p>
                </div>
              </p>
            </div>
          </div>
        </section>
      </Container>
      {/* This is the third section end */}
      <DownloadApp />
    </div>
  );
};

export default AboutUs;
