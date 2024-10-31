import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
  max-width: 100vw;
  overflow-x: hidden;
  padding-bottom: 60px;
  min-height: 100vh;
  width: 100vw;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  padding: 4px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Tab = styled.button`
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => (props.active ? "#0066ff" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#666")};

  &:hover {
    background-color: ${(props) => (props.active ? "#0052cc" : "#f0f0f0")};
  }
`;

export const Section = styled.section`
  margin-bottom: 32px;
`;

export const OrdersGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }

  svg {
    font-size: 18px;
  }
`;
