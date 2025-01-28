import { Link, NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/utils/apiClient";

const Navbar = () => {
  // Fetch navbar data
  const navbarFetchData = async () => {
    try {
      const response = await apiClient.get("/ayosph/system-info");
      return response.data;
    } catch (error) {
      console.error("Error fetching navbar data", error);
      return null;
    }
  };

  const { data: navbarData } = useQuery({
    queryKey: ["navbarData"],
    queryFn: navbarFetchData,
  });

  return (
    <Container width="1720px">
      <section className="w-full mt-5 px-5 xs:px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-5 3xl:px-5 4xl:px-0">
        <div className="flex flex-row justify-between font-poppins items-center navbar">
          {/* Logo Section */}
          <Link to={"/"}>
            <img
              className="w-[143px] h-10"
              src={navbarData?.data?.logo}
              alt="Logo"
            />
          </Link>

          {/* Navigation Section */}
          <nav>
            {/* Desktop and tablet navigation (hidden on mobile) */}
            <ul className="flex xl:space-x-10 2xl:space-x-20  xl:flex">
              <li data-aos="fade-in" data-aos-delay="100">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "navClassActive"
                      : "navClass hover:text-[#083EC5]"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li data-aos="fade-in" data-aos-delay="200">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "navClassActive"
                      : "navClass hover:text-[#083EC5]"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li data-aos="fade-in" data-aos-delay="300">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "navClassActive"
                      : "navClass hover:text-[#083EC5]"
                  }
                >
                  Our Services
                </NavLink>
              </li>
              <li data-aos="fade-in" data-aos-delay="400">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "navClassActive"
                      : "navClass hover:text-[#083EC5]"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Sign-up button */}
          <Link
            className=" xl:flex 2xl:flex 3xl:flex"
            to="/signUp"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <button className="text-xl border-[2px] border-solid border-transparent bg-button text-[#FFF] px-[35px] py-[11px] rounded-[26px] hover:bg-transparent hover:border-button hover:text-button ease-in-out duration-150">
              Get to app
            </button>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default Navbar;
