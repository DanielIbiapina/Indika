import React from "react";
import SearchBar from "../../components/searchBar";
import ServiceCard from "../../components/serviceCard";
import ServiceHighlight from "../../components/serviceHighlight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Container,
  Title,
  ServicesGrid,
  ServicesSection,
  SectionTitle,
  HighlightsGrid,
  SliderWrapper,
  LoginBanner,
  LoginButton,
} from "./styles";

const Home = () => {
  const isLoggedIn = false; // Isso viria do seu contexto de autenticação

  const categories = [
    { icon: "⚙️", title: "Assistência Técnica" },
    { icon: "🔨", title: "Reformas e Reparos" },
    { icon: "🥂", title: "Eventos" },
    { icon: "🏠", title: "Serviços Domésticos" },
    { icon: "📚", title: "Aulas" },
  ];

  const servicesData = {
    technicalAssistance: [
      {
        id: 1,
        title: "Conserto de Celular",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.8,
        price: "A partir de R$ 80",
        description: "Reparo de smartphones e tablets",
      },
      {
        id: 2,
        title: "Manutenção de Computadores",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.7,
        price: "A partir de R$ 120",
        description: "Formatação e manutenção de PCs",
      },
      {
        id: 3,
        title: "Assistência de Eletrodomésticos",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.6,
        price: "A partir de R$ 150",
        description: "Reparo de geladeiras, máquinas de lavar e outros",
      },
    ],

    repairs: [
      {
        id: 1,
        title: "Eletricista",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.8,
        price: "A partir de R$ 100",
        description: "Instalações e reparos elétricos",
      },
      {
        id: 2,
        title: "Marido de Aluguel",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.7,
        price: "A partir de R$ 80",
        description: "Reparos gerais e instalações",
      },
      {
        id: 3,
        title: "Pintor",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.9,
        price: "A partir de R$ 150",
        description: "Pintura residencial e comercial",
      },
    ],

    events: [
      {
        id: 1,
        title: "Fotógrafo",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.9,
        price: "A partir de R$ 200",
        description: "Fotografia profissional para eventos",
      },
      {
        id: 2,
        title: "Buffet",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.8,
        price: "A partir de R$ 50/pessoa",
        description: "Serviço completo de alimentação",
      },
      {
        id: 3,
        title: "Decoração",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.7,
        price: "A partir de R$ 500",
        description: "Decoração personalizada para festas",
      },
    ],

    housekeeping: [
      {
        id: 1,
        title: "Diarista",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.8,
        price: "A partir de R$ 150",
        description: "Limpeza residencial completa",
      },
      {
        id: 2,
        title: "Passadeira",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.6,
        price: "A partir de R$ 80",
        description: "Passar e organizar roupas",
      },
      {
        id: 3,
        title: "Jardineiro",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.7,
        price: "A partir de R$ 100",
        description: "Manutenção de jardins e áreas verdes",
      },
    ],

    classes: [
      {
        id: 1,
        title: "Professor de Inglês",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.9,
        price: "A partir de R$ 60/hora",
        description: "Aulas particulares de inglês",
      },
      {
        id: 2,
        title: "Professor de Matemática",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.8,
        price: "A partir de R$ 50/hora",
        description: "Reforço escolar de matemática",
      },
      {
        id: 3,
        title: "Personal Trainer",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        rating: 4.7,
        price: "A partir de R$ 80/hora",
        description: "Treino personalizado",
      },
    ],
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    variableWidth: true,
  };

  const categorySliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    variableWidth: true,
  };

  return (
    <Container>
      {!isLoggedIn && (
        <LoginBanner>
          <p>Entre para ter acesso a mais serviços e comunidades</p>
          <LoginButton>Entrar</LoginButton>
        </LoginBanner>
      )}

      <Title>Boas-vindas</Title>
      <SearchBar placeholder="O que você precisa?" />

      <SliderWrapper>
        <Slider {...categorySliderSettings}>
          {categories.map((category, index) => (
            <div key={index}>
              <ServiceCard icon={category.icon} title={category.title} />
            </div>
          ))}
        </Slider>
      </SliderWrapper>

      {Object.entries(servicesData).map(([category, services]) => (
        <ServicesSection key={category}>
          <SectionTitle>
            <h2>
              {categories[Object.keys(servicesData).indexOf(category)]?.title}
            </h2>
            <span>Ver tudo</span>
          </SectionTitle>
          <SliderWrapper>
            <Slider {...sliderSettings}>
              {services.map((service) => (
                <div key={service.id}>
                  <ServiceHighlight {...service} />
                </div>
              ))}
            </Slider>
          </SliderWrapper>
        </ServicesSection>
      ))}
    </Container>
  );
};

export default Home;
