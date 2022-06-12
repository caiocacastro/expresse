import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import { colors } from "../model/style";
import Home from "./Home";
import Servicos from "./Servicos";
import Sobre from "./Sobre";
import Textos from "./Textos";

const Container = styled.div`
  color: ${colors.primary};
  background-color: ${colors.secondary};
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/textos" element={<Textos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
