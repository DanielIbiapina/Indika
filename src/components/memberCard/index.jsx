import React from "react";
import {
  Card,
  ProfileImage,
  Content,
  Name,
  Profession,
  Stats,
  Connections,
} from "./styles";
import { FaStar, FaUserFriends, FaThumbsUp } from "react-icons/fa";

const MemberCard = ({
  name,
  profession,
  rating,
  recommendations,
  mutualConnections,
  image,
}) => {
  return (
    <Card>
      <ProfileImage src={image} alt={name} />
      <Content>
        <Name>{name}</Name>
        <Profession>{profession}</Profession>

        <Stats>
          <div>
            <FaStar />
            <span>{rating}</span>
          </div>
          <div>
            <FaThumbsUp />
            <span>{recommendations} recomendações</span>
          </div>
        </Stats>

        <Connections>
          <FaUserFriends />
          <span>{mutualConnections} conexões em comum</span>
        </Connections>
      </Content>
    </Card>
  );
};

export default MemberCard;
