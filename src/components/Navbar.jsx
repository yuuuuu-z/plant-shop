import { Globe, Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "about",
    },
    {
      label: "Product",
      path: "product",
    },
    {
      label: "Service",
      path: "service",
    },
    {},
  ];

  const changeLanguage = () => {
    alert("Change language ot torn kert te kom joj");
  };
  const [isOpen, setIsOpen] = useState();
  const showMenu = () => {
    const navDetails = document.querySelector(".nav-details");
    if (
      navDetails.style.display === "none" ||
      navDetails.style.display === ""
    ) {
      navDetails.style.display = "flex";
    } else {
      navDetails.style.display = "none";
    }
  };
  return (
    <>
      <nav className="navbar">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/flower-plant-6624897-5522944.png?f=webp"
          alt=""
        />
        <button onClick={showMenu} className="btn btn-success menu-icon">
          <Menu size={"30px"} />
        </button>
        <ul className="nav-details">
          {links.map((link) => (
            <li key={link.label}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="nav-btn">
          <Globe size={"30px"} onClick={changeLanguage} />
          <button className="btn btn-success">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
