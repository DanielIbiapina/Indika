import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  overflow: hidden;
  min-width: 280px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 12px;
`;

export const CommunityImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 12px;
`;

export const Name = styled.h3`
  font-size: 16px;
  margin-bottom: 4px;
`;

export const Description = styled.p`
  font-size: 13px;
  margin-bottom: 12px;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.text.secondary};

    svg {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 14px;
    }
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  span {
    padding: 4px 8px;
    font-size: 11px;
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.colors.text.secondary};
    border-radius: 16px;
  }
`;
