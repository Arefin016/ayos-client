import { Link, NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import apiClient from "@/utils/apiClient";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
            <ul className="flex xl:space-x-10 2xl:space-x-20 hidden xl:flex">
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

            {/* Hamburger Button */}
            <div className="xl:hidden flex items-center">
              <button onClick={toggleMenu} className="text-2xl text-gray-800">
                {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
              </button>
            </div>
          </nav>

          {/* Sign-up button */}
          <Link
            className="hidden xl:flex 2xl:flex 3xl:flex"
            to="/signUp"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <button className="text-xl border-[2px] border-solid border-transparent bg-button text-[#FFF] px-[35px] py-[11px] rounded-[26px] hover:bg-transparent hover:border-button hover:text-button ease-in-out duration-150">
              Get to app
            </button>
          </Link>
        </div>

        {/* Mobile Menu: when isMenuOpen is true, show the menu */}
        {isMenuOpen && (
          <div className="absolute text-gray-800 bg-opacity-100 bg-white text-center xl:hidden flex flex-col items-center space-y-4 mt-4 z-50 justify-center">
            <NavLink
              to="/"
              className="navClass hover:text-[#083EC5]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="navClass hover:text-[#083EC5]"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className="navClass hover:text-[#083EC5]"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Services
            </NavLink>
            <NavLink
              to="/contact"
              className="navClass hover:text-[#083EC5]"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Contact Us
            </NavLink>
            <Link to="/signUp">
              <button className="text-xl border-[2px] border-solid border-transparent bg-button text-[#FFF] px-[35px] py-[11px] rounded-[26px] hover:bg-transparent hover:border-button hover:text-button ease-in-out duration-150">
                Get to app
              </button>
            </Link>
          </div>
        )}
      </section>
    </Container>
  );
};

export default Navbar;
