import SideBar from "../../components/SideBar";
import { Container } from "../styles";
import { Content, Title } from "./style";

export default function Sobre() {
  return (
    <Container>
      <SideBar />

      <Content>
        <Title> Missão </Title>
        <Title> Visão </Title>
        <Title> Equipe </Title>
        <Title> Contato </Title>
      </Content>
    </Container>
  );
}
