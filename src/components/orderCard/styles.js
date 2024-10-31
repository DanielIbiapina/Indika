import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ServiceInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const ServiceImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ServiceDetails = styled.div`
  flex: 1;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }
`;

export const StatusBadge = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;

  ${({ status }) => {
    switch (status) {
      case "em_andamento":
        return `
          background-color: #fff3dc;
          color: #b25e09;
        `;
      case "agendado":
        return `
          background-color: #e3f5ff;
          color: #0066ff;
        `;
      case "concluido":
        return `
          background-color: #e6f4ea;
          color: #1e8e3e;
        `;
      default:
        return `
          background-color: #f5f5f5;
          color: #666;
        `;
    }
  }}
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const NextAction = styled.div`
  font-size: 13px;
  color: #666;
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const ActionButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0052cc;
  }
`;
