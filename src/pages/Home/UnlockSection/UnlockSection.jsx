"use client";
import Banner from "@/components/Banner/Banner";
import Container from "@/components/Container/Container";
import { VideoLogo } from "@/components/SVG/SVG";
import { useState } from "react";

const UnlockSection = () => {
  const buttonArr = [
    {
      id: 1,
      name: "Advertising",
      subHeading:
        "For someone responsible for planning, executing, and optimizing advertising campaigns.For someone responsible for planning, executing, and optimizing advertising campaigns.",
      videoUrl: "http://google.com",
    },
    {
      id: 2,
      name: "Client",
      subHeading:
        "For someone responsible for planning, executing, and optimizing advertising campaigns.For someone responsible for planning, executing, and optimizing advertising campaigns.",
      videoUrl: "http://google.com",
    },
    {
      id: 3,
      name: "Contractor",
      subHeading:
        "For someone responsible for planning, executing, and optimizing advertising campaigns.For someone responsible for planning, executing, and optimizing advertising campaigns.",
      videoUrl: "http://google.com",
    },
  ];

  const [activeButton, setactiveButton] = useState(buttonArr[0].id);
  const [shownService, setshownService] = useState(buttonArr[0]);

  const handleActiveService = (id) => {
    setactiveButton(id);
    const selectedItem = buttonArr.find((item) => item.id == id);
    if (selectedItem) {
      setshownService(selectedItem);
    }
  };

  return (
    <Container width="1560px">
      <section className="mt-5">
        <div>
          <h1 className="text-center text-[#172B4D] font-poppins text-[40px] font-semibold">
            Unlock the Best Servoce for <br /> Your Needs!
          </h1>

          <div className="flex flex-row gap-x-[59px] justify-center mt-8">
            {buttonArr.map((item, index) => {
              return (
                <button
                  className={`${
                    activeButton == item.id
                      ? "text-primaryColor font-poppins text-xl bg-[#083EC5] rounded-[13px] py-5 px-[50px] border border-[#083EC5] w-[235px]"
                      : "text-[#172B4D] text-xl font-poppins rounded-[13px] border border-[#083EC5] py-5 px-[50px] w-[235px]"
                  }`}
                  onClick={() => {
                    handleActiveService(item?.id);
                  }}
                  key={item?.id}
                >
                  {" "}
                  {item?.name}{" "}
                </button>
              );
            })}
          </div>
          {/* This is the content */}
          <div>
            <section className="flex items-center justify-center pt-20">
              <div className="h-[820px] rounded-[48px] w-[1720px]">
                <iframe
                  className="rounded-[48px]"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/LXb3EKWsInQ?si=n2j1FQTB1RAymVtw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default UnlockSection;
