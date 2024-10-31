import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
  min-height: 100vh;
  width: 100vw;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  background-color: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;

export const StatItem = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  strong {
    display: block;
    font-size: 24px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 4px;
  }

  span {
    font-size: 14px;
    color: #666;
  }
`;

export const MenuSection = styled.div`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 16px;
  border: none;
  background-color: transparent;
  color: #1a1a1a;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  svg {
    font-size: 24px;
    color: #666;
  }

  &:hover {
    background-color: #f5f5f5;
  }

  &.logout {
    color: #dc3545;

    svg {
      color: #dc3545;
    }
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #eee;
  margin: 8px 0;
`;
