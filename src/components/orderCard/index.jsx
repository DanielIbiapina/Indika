import React from "react";
import {
  Card,
  ServiceInfo,
  ServiceImage,
  ServiceDetails,
  StatusBadge,
  ActionButton,
  Price,
  NextAction,
} from "./styles";

const OrderCard = ({
  serviceName,
  providerName,
  status,
  date,
  price,
  image,
  description,
  nextAction,
  rating,
}) => {
  const getStatusLabel = (status) => {
    const statusMap = {
      em_andamento: "Em andamento",
      agendado: "Agendado",
      concluido: "Concluído",
    };
    return statusMap[status] || status;
  };

  return (
    <Card>
      <ServiceInfo>
        <ServiceImage src={image} alt={serviceName} />
        <ServiceDetails>
          <h3>{serviceName}</h3>
          <p>{providerName}</p>
          <StatusBadge status={status}>{getStatusLabel(status)}</StatusBadge>
        </ServiceDetails>
      </ServiceInfo>

      <Price>{price}</Price>
      <p>{description}</p>

      {nextAction && <NextAction>{nextAction}</NextAction>}

      {status === "concluido" ? (
        <div>Avaliação: {rating} ⭐</div>
      ) : (
        <ActionButton>Ver detalhes</ActionButton>
      )}
    </Card>
  );
};

export default OrderCard;
