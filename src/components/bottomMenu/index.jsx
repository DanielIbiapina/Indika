import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BottomNav, NavItem, NavText } from "./styles";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <BottomNav>
      <NavItem active={location.pathname === "/"} onClick={() => navigate("/")}>
        <AiOutlineHome size={24} />
        <NavText>Início</NavText>
      </NavItem>

      <NavItem
        active={location.pathname === "/comunidades"}
        onClick={() => navigate("/comunidades")}
      >
        <HiOutlineUserGroup size={24} />
        <NavText>Comunidades</NavText>
      </NavItem>

      <NavItem
        active={location.pathname === "/pedidos"}
        onClick={() => navigate("/pedidos")}
      >
        <BsHandbag size={22} />
        <NavText>Pedidos</NavText>
      </NavItem>

      <NavItem
        active={location.pathname === "/entrar"}
        onClick={() => navigate("/entrar")}
      >
        <RiUserLine size={24} />
        <NavText>Entrar</NavText>
      </NavItem>
    </BottomNav>
  );
};

export default BottomNavigation;
