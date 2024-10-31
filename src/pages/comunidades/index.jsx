import React from "react";
import SearchBar from "../../components/searchBar";
import CommunityCard from "../../components/communityCard";
import MemberCard from "../../components/memberCard";
import { IoAdd } from "react-icons/io5";
import Slider from "react-slick";
import {
  Container,
  Header,
  Title,
  Section,
  SectionTitle,
  SliderWrapper,
  ProvidersGrid,
  sliderSettings,
  AddButton,
} from "./styles";

const Comunidades = () => {
  const mockCommunities = [
    {
      id: 1,
      name: "Moradores Vila Mariana",
      members: 1250,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
      description: "Comunidade de moradores compartilhando serviços confiáveis",
      categories: ["Reformas", "Limpeza", "Educação"],
    },
    // ... mais comunidades
  ];

  const suggestedCommunities = [
    {
      id: 3,
      name: "Moradores Pinheiros",
      members: 980,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
      description: "Comunidade ativa de moradores do bairro de Pinheiros",
      categories: ["Serviços", "Eventos", "Segurança"],
    },
    {
      id: 4,
      name: "Condomínio Jardins",
      members: 450,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
      description: "Grupo exclusivo para moradores do Condomínio Jardins",
      categories: ["Manutenção", "Lazer", "Avisos"],
    },
    {
      id: 5,
      name: "Profissionais TI SP",
      members: 2300,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
      description: "Rede de profissionais de tecnologia em São Paulo",
      categories: ["Tecnologia", "Networking", "Eventos"],
    },
  ];

  const recommendedProviders = [
    {
      id: 1,
      name: "João Silva",
      profession: "Eletricista",
      rating: 4.8,
      recommendations: 45,
      mutualConnections: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
    },
    // ... mais prestadores
  ];

  return (
    <Container>
      <Header>
        <Title>Suas Comunidades</Title>
        <SearchBar placeholder="Buscar comunidades..." />
      </Header>

      <AddButton>
        <IoAdd /> Criar nova comunidade
      </AddButton>

      <Section>
        <SectionTitle>
          <h2>Comunidades que você participa</h2>
          <span>Ver todas</span>
        </SectionTitle>
        <SliderWrapper>
          <Slider {...sliderSettings}>
            {mockCommunities.map((community) => (
              <CommunityCard key={community.id} {...community} />
            ))}
          </Slider>
        </SliderWrapper>
      </Section>

      {/*<Section>
        <SectionTitle>
          <h2>Prestadores recomendados pela sua rede</h2>
          <span>Ver todos</span>
        </SectionTitle>
        <ProvidersGrid>
          {recommendedProviders.map((provider) => (
            <MemberCard key={provider.id} {...provider} />
          ))}
        </ProvidersGrid>
      </Section>*/}

      <Section>
        <SectionTitle>
          <h2>Comunidades sugeridas</h2>
          <span>Ver mais</span>
        </SectionTitle>
        <SliderWrapper>
          <Slider {...sliderSettings}>
            {suggestedCommunities.map((community) => (
              <CommunityCard key={community.id} {...community} />
            ))}
          </Slider>
        </SliderWrapper>
      </Section>
    </Container>
  );
};

export default Comunidades;
