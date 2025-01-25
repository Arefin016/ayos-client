"use client";
import Banner from "@/components/Banner/Banner";
import Container from "@/components/Container/Container";
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const UnlockSection = () => {
  const buttonArr = [
    {
      id: 1,
      name: "Advertising",
      subHeading:
        "For someone responsible for planning, executing, and optimizing advertising campaigns.For someone responsible for planning, executing, and optimizing advertising campaigns.",
      videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?si=n2j1FQTB1RAymVtw",
    },
    {
      id: 2,
      name: "Client",
      subHeading:
        "For someone responsible for planning, executing, and optimizing advertising campaigns.For someone responsible for planning, executing, and optimizing advertising campaigns.",
      videoUrl: "https://www.youtube.com/embed/KvE92fCMbmc?si=ZO67XT4W3HE840-D",
    },
    {
      id: 3,
      name: "Contractor",
      subHeading:
        "For someone responsible for planning, executing, and optimizing advertising campaigns.For someone responsible for planning, executing, and optimizing advertising campaigns.",
      videoUrl: "https://www.youtube.com/embed/uzLwg85XoBM?si=A0QpT-PmlXlp5h0l",
    },
  ];

  // Banner Data Fetch
  const unlockSectionData = async () => {
    try {
      const response = await apiClient.get("/home-page/video-section");
      return response.data;
    } catch (err) {
      console.error("Error fetching data:", err);
      return null;
    }
  };

  const { data } = useQuery({
    queryKey: ["unlockSectionData"],
    queryFn: unlockSectionData,
  });

  // console.log(data?.data);

  const [activeButton, setactiveButton] = useState(data?.data[0].id);
  const [shownService, setshownService] = useState(data?.data[0]);

  const handleActiveService = (id) => {
    setactiveButton(id);
    const selectedItem = data?.data.find((item) => item.id == id);
    if (selectedItem) {
      setshownService(selectedItem);
    }
  };
  // console.log(shownService);

  return (
    <Container width="1560px">
      <section className="mt-5">
        <div>
          <h1
            data-aos="fade-up"
            data-aos-delay=" 100"
            className="text-center text-[#172B4D] font-poppins text-[40px] font-semibold"
          >
            Unlock the Best Servoce for <br /> Your Needs!
          </h1>

          <div
            data-aos="fade-up"
            data-aos-delay=" 100"
            className="flex flex-row gap-x-[59px] justify-center mt-8"
          >
            {data?.data.map((item) => {
              return (
                <button
                  className={`${
                    activeButton == item?.id
                      ? "text-primaryColor font-poppins text-xl bg-[#083EC5] rounded-[13px] py-5 px-[50px] border border-[#083EC5] w-[235px]"
                      : "text-[#172B4D] text-xl font-poppins rounded-[13px] border border-[#083EC5] py-5 px-[50px] w-[235px]"
                  }`}
                  onClick={() => {
                    handleActiveService(item?.id);
                  }}
                  key={item?.id}
                >
                  {" "}
                  {item?.btn_title}{" "}
                </button>
              );
            })}
          </div>
          {/* This is the content */}
          <div>
            <section className="flex items-center justify-center pt-20">
              <div className="h-[820px] rounded-[48px] w-[1720px]">
                {shownService?.video_url && (
                  <iframe
                    className="rounded-[48px]"
                    width="100%"
                    height="100%"
                    src={shownService.video_url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </section>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default UnlockSection;
