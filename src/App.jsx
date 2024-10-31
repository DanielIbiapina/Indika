import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/home";
import GlobalStyle from "./styles/globalStyles";
import { theme } from "./styles/theme";
import BottomNavigation from "./components/bottomMenu";
import Comunidades from "./pages/comunidades";
import Pedidos from "./pages/pedidos";
import Login from "./pages/login";
import Perfil from "./pages/perfil";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comunidades" element={<Comunidades />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
        <BottomNavigation />
      </Router>
    </ThemeProvider>
  );
}

export default App;
