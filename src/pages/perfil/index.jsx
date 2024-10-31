import React from "react";
import {
  IoPersonCircle,
  IoSettings,
  IoChatbubble,
  IoStar,
  IoLogOut,
} from "react-icons/io5";
import {
  Container,
  ProfileHeader,
  Avatar,
  UserInfo,
  MenuSection,
  MenuItem,
  Divider,
  Stats,
  StatItem,
} from "./styles";

const Profile = () => {
  const user = {
    name: "João Silva",
    email: "joao.silva@email.com",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
    stats: {
      orders: 12,
      communities: 3,
      rating: 4.8,
    },
  };

  return (
    <Container>
      <ProfileHeader>
        <Avatar src={user.avatar} alt={user.name} />
        <UserInfo>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </UserInfo>
      </ProfileHeader>

      <Stats>
        <StatItem>
          <strong>{user.stats.orders}</strong>
          <span>Pedidos</span>
        </StatItem>
        <StatItem>
          <strong>{user.stats.communities}</strong>
          <span>Comunidades</span>
        </StatItem>
        <StatItem>
          <strong>{user.stats.rating}</strong>
          <span>Avaliação</span>
        </StatItem>
      </Stats>

      <MenuSection>
        <MenuItem>
          <IoPersonCircle />
          Editar Perfil
        </MenuItem>

        <MenuItem>
          <IoChatbubble />
          Minhas Avaliações
        </MenuItem>

        <MenuItem>
          <IoStar />
          Favoritos
        </MenuItem>

        <MenuItem>
          <IoSettings />
          Configurações
        </MenuItem>

        <Divider />

        <MenuItem className="logout">
          <IoLogOut />
          Sair
        </MenuItem>
      </MenuSection>
    </Container>
  );
};

export default Profile;
