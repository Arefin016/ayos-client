import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Container from "../../components/Container/Container";

const Navbar = () => {
  return (
    <Container width="1720px">
      <section className="container-[1720px] mt-5 py-4">
        <div className="flex flex-row justify-between font-poppins items-center">
          {/* This is the logo Section */}
          <Link data-aos="fade-in" to={"/"}>
            <img src={logo} alt="" />
          </Link>
          {/* This is the Navigation Section */}
          <nav>
            <ul className="flex space-x-20">
              <li data-aos="fade-in" data-aos-delay="100">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "navClassActive "
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
          {/* This is the Get to app section */}
          <Link to={"/signUp"} data-aos="fade-in" data-aos-delay="300">
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
