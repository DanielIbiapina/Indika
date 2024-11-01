import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
  max-width: 100vw;
  overflow-x: hidden;
  padding-bottom: 60px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 16px 0;
`;

export const ServicesGrid = styled.div`
  padding: 4px 0;
`;

export const ServicesSection = styled.section`
  margin-top: 24px;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 0 4px;

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
  }

  span {
    font-size: 13px;
    color: #0066ff;
  }
`;

export const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

export const SliderWrapper = styled.div`
  margin: 0 -16px;
  padding: 0 16px;

  .slick-track {
    display: flex !important;
    margin-left: 0;
  }

  .slick-slide {
    height: inherit !important;

    & > div {
      height: 100%;
    }
  }

  /* Garante que todos os slides tenham a mesma altura */
  .slick-list {
    padding: 4px 0;
  }
`;

export const LoginBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #fff;
  border-radius: 12px;
  margin: 16px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  p {
    font-size: 14px;
    color: #666;
  }
`;

export const LoginButton = styled.button`
  background-color: transparent;
  color: #0066ff;
  border: 1px solid #0066ff;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f0f7ff;
  }
`;
