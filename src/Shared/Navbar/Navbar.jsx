import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <section className="container-[1720px] mt-5">
      <div className="flex flex-row justify-between items-center">
        {/* This is the logo Section */}
        <img src={logo} alt="" />
        {/* This is the Navigation Section */}
        <nav>
          <ul className="flex space-x-20">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#083EC5] font-normal" : "text-[#172B4D]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="text-blue-500">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="text-blue-500">
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="text-blue-500">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* This is the Get to app section */}
        <button>Get to app</button>
      </div>
    </section>
  );
};

export default Navbar;
