import React from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaPinterestP, FaUser, FaYoutube } from "react-icons/fa";

import Badge from "@mui/material/Badge";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./navbar.css";
import { MdAddCall, MdEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaAngleDown, FaAnglesDown } from "react-icons/fa6";
import { CiDiscount1, CiSearch } from "react-icons/ci";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="top-nav px-4 py-2 flex items-center  justify-between bg-lime-600 text-white">
        <div className="flex items-center">
          <Link className="flex items-center cursor-pointer text-white mr-2">
            <MdOutlineLocationOn className="mr-1" />
            noida sec 12 city{" "}
          </Link>{" "}
          |{" "}
          <Link className="flex items-center cursor-pointer text-white ml-2">
            <MdEmail className="mr-1" /> info@villagezon.com
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="text-white  cursor-pointer">
            {" "}
            <FaFacebookF className="mr-1" />
          </Link>{" "}
          |
          <Link className="text-white  cursor-pointer">
            {" "}
            <FaYoutube className="mx-1" />
          </Link>{" "}
          |
          <Link className="text-white  cursor-pointer">
            {" "}
            <IoLogoInstagram className="mx-1" />{" "}
          </Link>
          |
          <Link className="text-white  cursor-pointer">
            {" "}
            <FaPinterestP />
          </Link>
        </div>
      </div>
      <header>
        <nav>
          <div className="logo" onClick={() => navigate("/")}>
            <img src={Logo} alt="" />
          </div>
          <div className="all-cat-nav">
            <Link>
              {" "}
              <RiBarChartHorizontalLine /> <span>All Categories</span>{" "}
              <FaAngleDown />
            </Link>

            <ul className="all-cat-list">
              <li>
                <Link>Shop </Link>
              </li>
              <li>
                <Link>Shop </Link>
              </li>
              <li>
                <Link>Shop </Link>
              </li>
            </ul>
          </div>

          <div className="nav-input-search">
            <input type="text" name="" id="" placeholder="Search" />
            <button>
              Search <CiSearch />
            </button>
          </div>

          <ul className="nav-cart-sec">
            <div className="nav-account">
              <li
                className="color-gray cursor-pointer"
                onClick={() => navigate("/dashboard")}
              >
                <FaUser />
              </li>
              <li>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <FavoriteBorderIcon />
                  </StyledBadge>
                </IconButton>
              </li>
              <li className="cursor-pointer">
                {" "}
                <Badge badgeContent={8} color="primary">
                  <ShoppingCartIcon color="action" />
                </Badge>
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <div className="nav-bottom flex items-center  justify-between">
        <ul className="nav-list">
          <li>
            <Link>
              Home <FaAngleDown />
            </Link>
          </li>
          <li>
            <Link>
              Page <FaAngleDown />
            </Link>
          </li>
          <li>
            <Link>
              Shop <FaAngleDown />
            </Link>
          </li>
          <li>
            <Link>
              Vendor <FaAngleDown />
            </Link>
          </li>
          <li>
            <Link>
              Element <FaAngleDown />
            </Link>
          </li>
          <li>
            <Link to={"/blog"}>
              Blog <FaAngleDown />
            </Link>
          </li>
          <li>
            <Link to={"/contact-us"}>
              Contact <FaAngleDown />
            </Link>
          </li>
        </ul>
        <div className="right-dis">
          <p className="dis">
            <Link className="flex items-center">
              {" "}
              <CiDiscount1 /> Weekly Discount!
            </Link>
          </p>
          <div className="toll-sec">
            <Link>
              <span>
                <MdAddCall />
              </span>
              <p>
                <span>Toll Free Number</span>
                <span>+123456789000</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
