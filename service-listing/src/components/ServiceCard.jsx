/* eslint-disable react/prop-types */
import "./ServiceCard.css";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default ServiceCard;
