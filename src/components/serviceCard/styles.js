import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 4px 8px;
  width: 80px;
  height: 100px;
  justify-content: center;
`;

export const Icon = styled.div`
  font-size: 24px;
  margin-bottom: 4px;
`;

export const Title = styled.span`
  font-size: 11px;
  text-align: center;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
