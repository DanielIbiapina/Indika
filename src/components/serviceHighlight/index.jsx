import React from "react";
import { FiStar } from "react-icons/fi";
import {
  Card,
  ServiceImage,
  ServiceInfo,
  Title,
  Rating,
  Price,
  Description,
} from "./styles";

const ServiceHighlight = ({ image, title, rating, price, description }) => {
  return (
    <Card>
      <ServiceImage src={image} alt={title} />
      <ServiceInfo>
        <Title>{title}</Title>
        <Rating>
          <FiStar /> {rating}
        </Rating>
        <Price>{price}</Price>
        <Description>{description}</Description>
      </ServiceInfo>
    </Card>
  );
};

export default ServiceHighlight;
