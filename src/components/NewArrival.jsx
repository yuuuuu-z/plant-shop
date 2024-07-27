import "../Style/newarrivals.css";
import "animate.css";

const NewArrival = ({ id, name, price, img }) => {
  return (
    <div className=" arrival">
      <div className="arrival-left">
        <p className="fs-4 text-muted">New Arrivals</p>
        <p className="fs-2">{name}</p>
        <p>From</p>
        <p className="fs-4 text-success ">{price}</p>
      </div>
      <div className="arrival-right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default NewArrival;
