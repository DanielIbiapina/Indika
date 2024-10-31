import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: 12px;
  display: flex;
  gap: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Name = styled.h3`
  font-size: 16px;
  margin-bottom: 2px;
`;

export const Profession = styled.p`
  font-size: 13px;
  margin-bottom: 8px;
`;

export const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 8px;

  div {
    gap: 4px;

    svg {
      font-size: 12px;
    }

    span {
      font-size: 13px;
    }
  }
`;

export const Connections = styled.div`
  gap: 4px;

  svg {
    font-size: 12px;
  }

  span {
    font-size: 13px;
  }
`;
