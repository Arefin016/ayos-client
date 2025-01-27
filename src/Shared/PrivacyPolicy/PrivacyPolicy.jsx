import Spinner from "@/components/Spinner/Spinner";
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Empty } from "antd";
import parse from "html-react-parser";

const PrivacyPolicy = () => {
  const privacyFetchData = async () => {
    try {
      const response = await apiClient.get("/dynamic-pages/privacy-policy");
      return response.data;
    } catch (error) {
      console.error("Error privacyFetchData", error);
      return null;
    }
  };

  const { data } = useQuery({
    queryKey: ["privacyFetchData"],
    queryFn: privacyFetchData,
  });

  if (isLoading) return <Spinner />;

  if (!data || !data?.data) {
    return <Empty />;
  }

  const parsedData =
    typeof data?.data?.page_content === "string"
      ? data?.data?.page_content
      : String(data?.data?.page_content);

  return (
    <section className="text-center my-10">
      <div className="user-descreption-wrapper text-left px-[200px]">
        {parse(parsedData)}
      </div>
    </section>
  );
};

export default PrivacyPolicy;
