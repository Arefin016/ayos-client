import Container from "../../components/Container/Container";
import footerLogo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Container width="1560px">
      <footer className="mb-[38px]">
        <div className="flex lg:flex-row flex-col justify-between font-poppins items-center px-5 xs:px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-5 3xl:px-0">
          {/* This is the logo Section */}
          <Link to={"/"}>
            <img
              className="w-[143px] h-10 mb-5 xs:mb-5 sm:mb-5 md:mb-5 lg:mb-0 xl:mb-0 2xl:mb-0"
              src={footerLogo}
              alt=""
            />
          </Link>
          {/* This is the Navigation Section */}
          <nav>
            <ul className="flex lg:flex-row flex-col lg:space-x-7 xl:space-x-[55px] 2xl:space-x-[55px] items-center xs:items-center sm:items-center md:items-center">
              <li>
                <NavLink to="/" className={"navClass hover:text-[#083EC5]"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={"navClass hover:text-[#083EC5]"}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={"navClass hover:text-[#083EC5]"}
                >
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={"navClass hover:text-[#083EC5]"}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* This is the social icons section */}
          <div className="flex flex-row gap-5 xs:gap-5 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-[34px] 2xl:gap-[34px] mt-6 xs:mt-6 sm:mt-6 md:mt-6 lg:mt-0 xl:mt-0 2xl:mt-0 3xl:mt-0">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* This is the border section */}

        <div className="bg-[#201F22] h-[1px] opacity-[0.31] mt-8 flex mx-auto w-[80%] xs:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[90%] xl:w-[90%] 2xl:w-[90%] 3xl:w-full"></div>

        {/* This is the copyright section */}
        <div className="flex lg:flex-row flex-col justify-between navbarBottom font-inter mt-6 px-5 xs:px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-5 3xl:px-0">
          <h1 className="font-inter text-center">
            © Copyright 2025, All Rights Reserved
          </h1>
          <div className="flex lg:flex-row flex-col text-center xs:text-center sm:text-center md:text-center gap-0 xs:gap-0 sm:gap-0 md:gap-0 lg:gap-10 mt-5 xs:mt-5 sm:mt-5 md:mt-5 lg:mt-0 xl:mt-0 2xl:mt-0 3xl:mt-0">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
