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
