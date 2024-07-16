import { Globe } from "lucide-react";
import React from "react";
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
  return (
    <>
      <nav className="navbar">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/flower-plant-6624897-5522944.png?f=webp"
          alt=""
        />
        <ul className="nav-details">
          {links.map((link) => (
            <li key={link.label}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="nav-btn">
          <Globe onClick={changeLanguage} />
          <button className="btn btn-success">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
