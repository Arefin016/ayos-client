import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Container from "../../components/Container/Container";

const Navbar = () => {
  return (
    <Container width="1720px">
      <section className="container-[1720px] mt-5 py-4">
        <div className="flex flex-row justify-between font-poppins items-center">
          {/* This is the logo Section */}
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          {/* This is the Navigation Section */}
          <nav>
            <ul className="flex space-x-20">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "navClassActive" : "navClass"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "navClassActive" : "navClass"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "navClassActive" : "navClass"
                  }
                >
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "navClassActive" : "navClass"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* This is the Get to app section */}
          <Link to={"/signUp"}>
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
