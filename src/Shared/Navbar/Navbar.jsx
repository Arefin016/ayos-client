import { Link, NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/utils/apiClient";
import { useState } from "react";
import { Button, Drawer } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";

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
          <nav className="flex-grow hidden xl:flex justify-center">
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
          <RxHamburgerMenu
            size={24}
            className="xl:hidden cursor-pointer"
            onClick={showDrawer}
          />

          {/* Drawer (Mobile Only) */}
          <Drawer
            title="Ayos"
            onClose={onClose}
            open={open}
            className="md:hidden"
          >
            <ul className="space-y-4 flex flex-col items-center justify-center mt-14">
              <li data-aos="fade-in" data-aos-delay="100">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "navClassActive"
                      : "navClass hover:text-[#083EC5]"
                  }
                  onClick={onClose} 
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
                  onClick={onClose}
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
                  onClick={onClose}
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
                  onClick={onClose}
                >
                  Contact Us
                </NavLink>
              </li>
              {/* Get to App button */}
              <li data-aos="fade-in" data-aos-delay="500">
                <Link
                  to="/signUp"
                  data-aos="fade-in"
                  data-aos-delay="300"
                  className="xl:flex 2xl:flex 3xl:flex"
                >
                  <button
                    onClick={onClose} // সাইনআপ ক্লিক করলেও Drawer বন্ধ হবে
                    className="text-base border-[2px] border-solid border-transparent bg-button text-[#FFF] px-6 py-2 rounded-[26px] hover:bg-transparent hover:border-button hover:text-button ease-in-out duration-150"
                  >
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
            className="hidden xl:flex"
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
