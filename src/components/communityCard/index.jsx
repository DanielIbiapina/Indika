import React from "react";
import {
  Card,
  CommunityImage,
  Content,
  Name,
  Description,
  Stats,
  Categories,
} from "./styles";
import { FaUsers } from "react-icons/fa";

const CommunityCard = ({ name, members, image, description, categories }) => {
  return (
    <Card>
      <CommunityImage src={image} alt={name} />
      <Content>
        <Name>{name}</Name>
        <Description>{description}</Description>

        <Stats>
          <span>
            <FaUsers />
            {members} membros
          </span>
        </Stats>

        <Categories>
          {categories.slice(0, 3).map((category, index) => (
            <span key={index}>{category}</span>
          ))}
        </Categories>
      </Content>
    </Card>
  );
};

export default CommunityCard;
