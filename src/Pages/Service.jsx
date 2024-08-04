import { ArrowRight, Key } from "lucide-react";
import React from "react";
import NewArrival from "../components/NewArrival";
import ServiceProvice from "../components/ServiceProvice";

const Service = () => {
  const newArrivalCards = [
    {
      id: 1,
      name: "House Plants",
      price: "$ 19.00",
      img: "https://www.freepnglogos.com/uploads/plant-png/plant-png-plants-png-transparent-images-png-only-27.png",
    },
    {
      id: 2,
      name: "Pothos Neon",
      price: "$ 39.00",
      img: "https://www.freepnglogos.com/uploads/plant-png/plant-png-plants-png-transparent-images-png-only-27.png",
    },
  ];

  const serviceProviceCards = [
    {
      id: 1,
      img: "https://static.vecteezy.com/system/resources/previews/035/995/462/original/ai-generated-human-hand-holding-plant-seeds-3d-design-suitable-for-environment-and-design-elements-png.png",
      title: "Planting Enforcement",
      description:
        "We help you to make your garden more beautiful and healthy. ",
    },
    {
      id: 2,
      img: "https://static.vecteezy.com/system/resources/previews/027/146/831/non_2x/watercolor-young-green-plant-growing-ai-generative-png.png",
      title: "Better Environment",
      description:
        "We help you to make your garden more beautiful and healthy. ",
    },
    {
      id: 3,
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/rainy-day-7812664-6267519.png",
      title: "Nature Enforcement",
      description:
        "We help you to make your garden more beautiful and healthy. ",
    },
    {
      id: 4,
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/sowing-seeds-5697538-4754339.png",
      title: "Preservation Plants",
      description:
        "We help you to make your garden more beautiful and healthy. ",
    },
  ];

  return (
    <div className="container">
      <div className="grow" data-aos="fade-down">
        <div className="grow-left">
          <p className="fs-1">
            We Take Care Of Your <br />
            <span>Beautiful Garden</span>
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
            src="https://img-new.cgtrader.com/items/2634017/392cc61b1c/large/houseplants-in-a-white-pot-for-the-interior-721-3d-model-max-obj-fbx.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="service-arrival" data-aos="zoom-in">
        {newArrivalCards.map((arrCard, index) => (
          <NewArrival
            key={index}
            img={arrCard.img}
            name={arrCard.name}
            price={arrCard.price}
          />
        ))}
      </div>

      <div className="service-provice" data-aos="fade-down">
        <h1 className="text-success">Service We Provice</h1>
        <div className="for-provice">
          {serviceProviceCards.map((arrCard, index) => {
            return (
              <ServiceProvice
                key={index}
                img={arrCard.img}
                title={arrCard.title}
                description={arrCard.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
