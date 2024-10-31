import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
  max-width: 100vw;
  overflow-x: hidden;
  padding-bottom: 60px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 16px 0;
`;

export const Section = styled.section`
  margin-bottom: 48px;
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

export const AddButton = styled.button`
  width: 100%;
  background-color: #fff;
  color: #0066ff;
  border: 1px dashed #0066ff;
  border-radius: 12px;
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  margin: 16px 0 32px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #f0f7ff;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 102, 255, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    width: auto;
    padding: 16px 32px;
  }
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

  .slick-list {
    padding: 4px 0;
  }
`;

export const ProvidersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
  }
`;

// Configurações do slider que podem ser exportadas para uso no componente
export const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
  variableWidth: true,
};
