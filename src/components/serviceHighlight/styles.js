import styled from "styled-components";

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  width: 160px;
  height: 280px;
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const ServiceInfo = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 13px;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0;
  height: 40px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #ffb800;
  font-size: 12px;

  svg {
    width: 12px;
    height: 12px;
    fill: currentColor;
  }
`;

export const Price = styled.div`
  font-size: 12px;
  color: #0066ff;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 11px;
  color: #666;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
