import { ArrowRight } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="main">
      <div className="main-details">
        <p>
          We love helping you <br></br> to save the earth
        </p>
        <p>
          We are a team of passionate people whose goal is to impove everyone's
          through disruptive products <br></br> We build great products to solve
          your business problems.
        </p>
        <div className="main-btn">
          <button className="btn btn-success">Join Now</button>
          <button className="btn btn-danger">
            Learn More{" "}
            <span>
              <ArrowRight />
            </span>
          </button>
        </div>
      </div>

      <img
        src="https://img.freepik.com/premium-photo/collection-3d-realistic-icon-illustration-potted-plants-interior_979495-104304.jpg"
        alt=""
      />
    </div>
  );
};

export default Home;
