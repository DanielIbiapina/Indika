import React, { useState } from "react";
import SearchBar from "../../components/searchBar";
import { IoAdd, IoFilter, IoPersonCircle } from "react-icons/io5";
import OrderCard from "../../components/orderCard";
import {
  Container,
  Header,
  Title,
  Section,
  TabsContainer,
  Tab,
  OrdersGrid,
  FilterButton,
  HeaderActions,
  LoginPrompt,
  LoginButton,
  PromptText,
  IllustrationWrapper,
} from "./styles";

const Pedidos = () => {
  const [activeTab, setActiveTab] = useState("active");
  const isLoggedIn = false; // Isso viria do seu contexto de autenticação

  const mockActiveOrders = [
    {
      id: 1,
      serviceName: "Conserto de Notebook",
      providerName: "Carlos Silva",
      status: "em_andamento",
      date: "2024-03-20",
      price: "R$ 150,00",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
      description: "Troca de tela e limpeza geral",
      nextAction: "Aguardando confirmação do prestador",
    },
    {
      id: 2,
      serviceName: "Limpeza Residencial",
      providerName: "Maria Santos",
      status: "agendado",
      date: "2024-03-22",
      price: "R$ 180,00",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
      description: "Limpeza completa - 3 quartos",
      nextAction: "Agendado para 22/03 às 09:00",
    },
  ];

  const mockCompletedOrders = [
    {
      id: 3,
      serviceName: "Pintura de Parede",
      providerName: "João Pinturas",
      status: "concluido",
      date: "2024-03-15",
      price: "R$ 800,00",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
      description: "Pintura sala e corredor",
      rating: 4.8,
    },
    // ... mais pedidos concluídos
  ];

  if (!isLoggedIn) {
    return (
      <Container>
        <LoginPrompt>
          <IllustrationWrapper>
            <IoPersonCircle size={80} color="#0066ff" />
          </IllustrationWrapper>
          <PromptText>
            <h2>Faça login para ver seus pedidos</h2>
            <p>Acompanhe seus serviços e mantenha contato com os prestadores</p>
          </PromptText>
          <LoginButton>Entrar ou criar conta</LoginButton>
        </LoginPrompt>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Seus Pedidos</Title>
        <HeaderActions>
          <FilterButton>
            <IoFilter /> Filtrar
          </FilterButton>
          <SearchBar placeholder="Buscar pedidos..." />
        </HeaderActions>
      </Header>

      <TabsContainer>
        <Tab
          active={activeTab === "active"}
          onClick={() => setActiveTab("active")}
        >
          Em Andamento
        </Tab>
        <Tab
          active={activeTab === "completed"}
          onClick={() => setActiveTab("completed")}
        >
          Concluídos
        </Tab>
      </TabsContainer>

      <Section>
        <OrdersGrid>
          {activeTab === "active"
            ? mockActiveOrders.map((order) => (
                <OrderCard key={order.id} {...order} />
              ))
            : mockCompletedOrders.map((order) => (
                <OrderCard key={order.id} {...order} />
              ))}
        </OrdersGrid>
      </Section>
    </Container>
  );
};

export default Pedidos;
