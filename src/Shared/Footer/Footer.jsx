import Container from "../../components/Container/Container";
import footerLogo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container width="1560px">
      <footer className="mb-[38px]">
        <div className="flex flex-row justify-between font-poppins items-center">
          {/* This is the logo Section */}
          <Link to={"/"}>
            <img src={footerLogo} alt="" />
          </Link>
          {/* This is the Navigation Section */}
          <nav>
            <ul className="flex space-x-[55px]">
              <li>
                <NavLink to="/" className={"navClass"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={"navClass"}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={"navClass"}>
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={"navClass"}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* This is the social icons section */}
          <div className="flex flex-row gap-[34px]">
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
        <div className="bg-[#201F22] h-[1px] opacity-[0.31] my-8"></div>
        {/* This is the copyright section */}
        <div className="flex flex-row justify-between navbarBottom font-inter">
          <h1 className="font-inter">© Copyright 2025, All Rights Reserved</h1>
          <div className="flex flex-row gap-10">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
