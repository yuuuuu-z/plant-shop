import { ArrowRight, Check } from "lucide-react";
import React from "react";
import SomeSteps from "../components/SomeSteps";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  easing: "ease-in-out-expo",
});
const Home = () => {
  const steps = [
    {
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/plant-5293900-4432198.png",
      title: "Inoculate",
      description: "Inoculate the soil with beneficial bacteria.",
    },
    {
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/plant-6347424-5242126.png?f=webp",
      title: "Sowing Seeds",
      description: "Plant the seeds in the prepared soil.",
    },
    {
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/plants-pot-8746036-7053814.png?f=webp",
      title: "Punt the Pots",
      description: "Place the pots in their designated spots.",
    },
  ];

  return (
    <div className="container">
      <div className="main">
        <div className="main-details">
          <p data-aos="fade-up">
            We love helping you <br></br> to save the earth
          </p>
          <p data-aos="fade-up">
            We are a team of passionate people whose goal is to impove
            everyone's through disruptive products <br></br> We build great
            products to solve your business problems.
          </p>
          <div className="main-btn" data-aos="fade-down">
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

      <div className="step" data-aos="zoom-in">
        <h1>
          Steps to Start <span>Your Plan Off Right</span>
        </h1>
        <div className="more-step">
          {steps.map((step, index) => (
            <SomeSteps
              key={index}
              img={step.img}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>

      <div className="step-description" data-aos="fade-down">
        <div className="step-descriptipon-left">
          <img
            src="https://cgaxisimages.fra1.cdn.digitaloceanspaces.com/2019/03/cgaxis_models_111_25-00.jpg"
            alt=""
          />
        </div>
        <div className="step-descriptipon-right">
          <h1>
            Make Your <span>Garden Good Nutrition</span>{" "}
          </h1>
          <div className="step-descriptipon-right-2">
            <p>
              {" "}
              <span>
                <Check />
              </span>{" "}
              Improved plant growth and healthy. When you provide your garden
              with good nutrition you are given your plants the nutrition they
              need to grow strong and healthy. This can lead to impoved yields
              better disease ande more vibrant colors and flaoves your produce.
            </p>
            <p>
              {" "}
              <span>
                <Check />
              </span>{" "}
              Good nutrition can help impove the structure of your soil, which
              can lead to better water retension and drainage. This can help
              your plants grow better and can also help prevent erosoion and
              other soil problems.
            </p>
            <p>
              {" "}
              <span>
                <Check />
              </span>{" "}
              Improved soil fertility. Good nutrition can help improve the
              fertility of your soil, which can lead to better yields and
              healthier plants.
            </p>
          </div>
        </div>
      </div>

      <div className="grow" data-aos="fade-down">
        <div className="grow-left">
          <p className="fs-1">
            Come With Us <span>Grow Up Your Plant</span>
          </p>
          <p className="text-muted">
            We are a team of passionate people whose goal it's to impove
            everyone's through disruptive products. We build great products to
            solve your business problems.
          </p>

          <button className="btn btn-success">
            Discover More
            <span>
              <ArrowRight />
            </span>{" "}
          </button>
        </div>
        <div className="grow-right">
          <img
            src="https://a23d.co/cdn-cgi/imagedelivery/S4svCqSolndHzMne84t1OQ/A23DMOD033322A_Preview/productpage"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
