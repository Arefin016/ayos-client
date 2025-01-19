import React from "react";

const Card = ({ title, description, icon, image, index }) => {
  return (
    <section>
      <div
        data-aos="fade-up"
        data-aos-delay={index * 100}
        className="w-[507px] py-[10px] px-4 bg-[#F5F5F5] rounded-2xl"
      >
        {/* Card Header */}
        <div>
          <div className="flex flex-row justify-between items-center py-4">
            <h1 className="text-[#41405D] font-poppins text-[32px] font-semibold">
              {title}
            </h1>
            <img src={icon} alt={`${title} icon`} />
          </div>
          <p className="text-left text-[#667085] font-jakarta text-[16px]">
            {description}
          </p>
          {/* Card Image */}
          <div className="pt-8">
            <img src={image} alt={`${title}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
