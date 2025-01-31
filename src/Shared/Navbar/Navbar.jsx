import { Link, NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/utils/apiClient";
import { useState } from "react";
import { Button, Drawer } from "antd";
import { FaBars } from "react-icons/fa";

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

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Container width="1720px">
      <section className="w-full mt-5 px-5">
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
          <nav className="flex-grow hidden md:flex justify-center">
            <ul className="flex xl:space-x-10 2xl:space-x-20">
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

          {/* Hamburger button for mobile */}
          <Button
            type="primary"
            onClick={showDrawer}
            className="md:hidden" // Hide on desktop
          >
            <FaBars size={24} /> {/* React Icon Hamburger */}
          </Button>

          {/* Drawer (Mobile Only) */}
          <Drawer
            title="Basic Drawer"
            onClose={onClose}
            open={open}
            className="md:hidden"
          >
            <ul className="space-y-4">
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
              {/* Add the Get to App button in Drawer for mobile */}
              <li data-aos="fade-in" data-aos-delay="500">
                <Link
                  to="/signUp"
                  data-aos="fade-in"
                  data-aos-delay="300"
                  className="xl:flex 2xl:flex 3xl:flex"
                >
                  <button className="text-xl border-[2px] border-solid border-transparent bg-button text-[#FFF] px-[35px] py-[11px] rounded-[26px] hover:bg-transparent hover:border-button hover:text-button ease-in-out duration-150">
                    Get to app
                  </button>
                </Link>
              </li>
            </ul>
          </Drawer>

          {/* Sign-up button for large devices */}
          <Link
            to="/signUp"
            data-aos="fade-in"
            data-aos-delay="300"
            className="hidden lg:flex"
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
