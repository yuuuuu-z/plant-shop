import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

const Person3D = ({ id, img, name, position, description }) => {
  return (
    <div className="person-3d">
      <div className="person-3d-left">
        <img src={img} alt="" />
      </div>
      <div className="person-3d-right">
        <h3>{name}</h3>
        <p
          className="text-success"
          style={{ borderBottom: "solid", paddingBottom: "1rem" }}
        >
          {position}{" "}
        </p>
        <p className="text-muted">{description}</p>
        <p
          className="text-success"
          style={{ borderBottom: "solid", paddingBottom: "1rem" }}
        >
          Follow Me
        </p>
        <div className="person-3d-contact">
          <span>
            <Twitter />
          </span>

          <span>
            <a
              href="https://web.facebook.com/sopheak.tra.35977897"
              target="blank"
            >
              <Facebook />
            </a>
          </span>
          <span>
            <Instagram />
          </span>
          <span>
            <Youtube size={"30"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Person3D;
