import { CircleDollarSign, StepForward } from "lucide-react";
import "../Style/about.css";
import MissionCard from "../components/MissionCard";
import Person3D from "../components/Person3D";

const About = () => {
  const missionCards = [
    {
      id: 1,
      img: "https://img.freepik.com/free-psd/3d-illustration-potted-plant_23-2149424542.jpg",
      title: "Reduce Stress",
      description:
        "We help you to reduce stress by planting more trees and make your life more beautiful",
    },
    {
      id: 2,
      img: " https://img.freepik.com/free-psd/3d-rendering-plant-icon_23-2151371064.jpg",
      title: "Prevent Endangered",
      description:
        "We help you to reduce stress by planting more trees and make your life more beautiful",
    },
    {
      id: 3,
      img: "https://img.freepik.com/premium-photo/3d-icon-potted-plant-3d-potted-plant-icon-plant-icon-3d-plant-design-icon-potted-plant-3d-p_1249303-649.jpg",
      title: "Better Environment",
      description:
        "We help you to reduce stress by planting more trees and make your life more beautiful",
    },
  ];

  const person3dCards = [
    {
      id: 1,
      name: "Chuon Sopheaktra",
      img: "https://static.vecteezy.com/system/resources/previews/024/387/852/non_2x/3d-male-character-sitting-on-a-sofa-and-working-on-a-laptop-with-thinking-pose-free-png.png",
      position: "CEO, Founder",
      description:
        "I am passionate and plan to make the world better place and make it more beautiful.",
    },
    {
      id: 2,
      name: "Ms. Sozano Jona",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/cute-girl-working-on-laptop-5601688-4709570.png?f=webp",
      position: "Manager, Co-Founder",
      description:
        "I am the manager and I am proud to present our product to the world.",
    },
  ];
  return (
    <div>
      <div className="about-main">
        <div className="about-main-left">
          <img
            src="https://preview.free3d.com/img/2017/03/2272887024560113476/cevn9zga.jpg"
            alt=""
          />
        </div>
        <div className="about-main-right">
          <p className="fs-2">About Us</p>
          <p className="text-muted">
            We are a team of passionate people whose goal is to impove
            everyone's through disruptive products We build great products to
            solve your business problems.We build great products to solve your
            business problems.
          </p>
          <p className="text-muted">
            We are a team of passionate people whose goal it's to impove
            everyone's through disruptive products. We build great products to
            solve your business problems.
          </p>
          <button className="btn btn-success">
            {" "}
            View Demo{" "}
            <span>
              <StepForward />
            </span>
          </button>
        </div>
      </div>
      <div className="mission">
        <p className="fs-2">Our Mission</p>
        <p className="text-muted">
          Our mission is to provide services to the community and provide
          services to the community members of the community that are interested
          in the world.
        </p>
        <p className="text-muted">
          We are interested in the services provided to the community that are
          interested in the services provided to the community.
        </p>
        <div className="mission-card">
          {missionCards.map((missionCard, index) => (
            <MissionCard
              key={index}
              img={missionCard.img}
              title={missionCard.title}
              description={missionCard.description}
            />
          ))}
        </div>
      </div>

      <div className="about-main">
        <div className="about-main-left">
          <img
            src="https://img.freepik.com/premium-vector/3d-group-team-with-check-mark-icon-vector-isolated-white-background-3d-team-teamwork-business-concept-cartoon-minimal-style-3d-teamwork-icon-vector-render-illustration_726846-5808.jpg"
            alt=""
          />
        </div>
        <div className="about-main-right">
          <p className="fs-2">Our Team</p>
          <p className="text-muted">
            We are a team of passionate people whose goal is to impove
            everyone's through disruptive products We build great products to
            solve your business problems.We build great products to solve your
            business problems.
          </p>
          <p className="text-success">
            Please make sure to support us in order to join hands to make the
            world better place.
          </p>

          <a href="https://pay.ababank.com/VV2SV55JoNfJAKT59" target="blank">
            <button className="btn btn-success">
              {" "}
              Support Us{" "}
              <span>
                <CircleDollarSign />
              </span>
            </button>
          </a>
        </div>
      </div>

      <div className="about-person">
        {person3dCards.map((person3dCard, index) => (
          <Person3D
            key={index}
            img={person3dCard.img}
            name={person3dCard.name}
            position={person3dCard.position}
            description={person3dCard.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
