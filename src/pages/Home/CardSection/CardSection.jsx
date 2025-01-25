import Card from "@/components/Card/Card";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "@/components/Spinner/Spinner";

const CardSection = () => {
  const apiClient = axios.create({
    baseURL: import.meta.env.VITE_SITE_URL,
  });

  const cardData = async () => {
    const response = await apiClient.get("/categories");
    return response.data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["cardData"],
    queryFn: cardData,
  });

  if (isLoading) return <Spinner />;

  if (error) {
    return <div>An error has occurred: {error?.message}</div>;
  }

  if (!data || !data?.data) {
    return <div>No data found</div>;
  }

  return (
    <section className="pb-[100px] px-[180px]">
      <div>
        {/* This is the title section start */}
        <div className="flex flex-col text-center space-y-8">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[#172B4D] font-poppins text-[40px] font-semibold"
          >
            Unlock the Best Contractors for Your <br /> Needs!
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#585858] font-jakarta text-xl"
          >
            Take control of your wellness journey with personalized AI insights.
            Track <br /> your progress, stay consistent
          </p>
          {/* This is the title section end */}

          {/* Card Section */}
          <div className="grid grid-cols-3 gap-5 pt-[107px] justify-center text-center">
            {data?.data.slice(0, 6).map((card, index) => (
              <Card
                key={index}
                title={card?.title}
                description={card?.description}
                icon={card.icon}
                image={card?.thumbnail}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-[60px]">
          <Link to={"/services"} data-aos="fade-up">
            <button className="text-primaryColor border-[2px] border-solid border-transparent text-[16px] font-medium bg-[#083EC5] py-[18px] px-[95px] rounded-xl hover:border-button hover:bg-transparent hover:text-button">
              All view
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
