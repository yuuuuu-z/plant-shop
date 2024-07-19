import React from "react";

const LanguageDropDown = () => {
  return (
    <div>
      <ul className="changeLan">
        <div className="more-lan">
          <li>ខ្មែរ </li>
          <span className="flag">
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/228/918/original/cambodia-3d-flag-vector.jpg"
              alt=""
            />
          </span>{" "}
        </div>
        <div className="more-lan">
          <li>English</li>
          <span className="flag">
            <img
              src="https://cdn.pixabay.com/photo/2017/01/07/16/55/usa-1960922_640.jpg"
              alt=""
            />
          </span>{" "}
        </div>
      </ul>
    </div>
  );
};

export default LanguageDropDown;
