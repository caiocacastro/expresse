import { useNavigate, BrowserRouterProps } from "react-router-dom";
import UserAvatar from "./UserAvatar";

import { Container, Content, TabButton, BottomSpacer } from "./styles";
import { connect } from "react-redux";
import { RootState } from "../../store";

const mapStateToProps = ({
  session: {
    user: { loggedUser },
  },
}: RootState) => ({ loggedUser });

type State = {} & ReturnType<typeof mapStateToProps>;

function Topbar(props: State) {
  const navigate = useNavigate();

  const onNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Container>
        <Content>
          <TabButton onClick={() => onNavClick("/")}>Inicio</TabButton>
          <TabButton onClick={() => onNavClick("/textos")}>Textos</TabButton>
          <TabButton onClick={() => onNavClick("/servicos")}>
            Serviços
          </TabButton>
          <TabButton onClick={() => onNavClick("/sobre")}>Sobre</TabButton>
        </Content>
        <UserAvatar user={props.loggedUser} />
      </Container>
      <BottomSpacer />
    </>
  );
}

export default connect(mapStateToProps, {})(Topbar);
