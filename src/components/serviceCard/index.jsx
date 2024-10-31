import React from "react";
import { Card, Icon, Title } from "./styles";

const ServiceCard = ({ icon, title }) => {
  return (
    <Card>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </Card>
  );
};

export default ServiceCard;
