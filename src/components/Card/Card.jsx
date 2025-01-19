import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Card = ({ title, description, image, index }) => {
  return (
    <section>
      <div
        data-aos="fade-up"
        data-aos-delay={index * 100}
        className="w-[507px] py-[10px] px-4 bg-[#F5F5F5] rounded-2xl hover:bg-[#E0E0E0] hover:shadow-custom_shadow ease-out duration-300 group"
      >
        {/* Card Header */}
        <div>
          <div className="flex flex-row justify-between items-center py-4">
            <h1 className="text-[#41405D] font-poppins text-[32px] font-semibold">
              {title}
            </h1>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-[2px] border-solid border-[#083EC5]  transition-transform transform group-hover:rotate-[180deg] group-hover:duration-500   ">
              <GoArrowUpRight className="text-[#083EC5] text-2xl font-bold" />
            </div>
          </div>
          <p className="text-left text-[#667085] group-hover:text-black ease-out duration-150 font-jakarta text-[16px]">
            {description}
          </p>
          {/* Card Image */}
          <div className="pt-8">
            <img
              src={image}
              alt={`${title}`}
              className="w-[475px] h-[355px] object-cover transition-transform ease-out duration-300 transform group-hover:scale-95"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
