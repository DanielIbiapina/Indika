import styled from "styled-components";

export const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(1px);
`;

export const NavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px;
  color: ${(props) => (props.active ? props.theme.colors.primary : "#666666")};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const NavText = styled.span`
  font-size: 12px;
  margin-top: 4px;
`;
