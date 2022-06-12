import {
  useNavigate,
  BrowserRouterProps,
  useResolvedPath,
  useLocation,
} from "react-router-dom";
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
  const navPath = useLocation();

  const onNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Container>
        <Content style={{ userSelect: "none" }}>
          <TabButton
            onClick={() => onNavClick("/")}
            selected={navPath.pathname === "/" ? true : false}
          >
            Inicio
          </TabButton>
          <TabButton
            onClick={() => onNavClick("/textos")}
            selected={navPath.pathname === "/textos" ? true : false}
          >
            Textos
          </TabButton>
          <TabButton
            onClick={() => onNavClick("/servicos")}
            selected={navPath.pathname === "/servicos" ? true : false}
          >
            Serviços
          </TabButton>
          <TabButton
            onClick={() => onNavClick("/sobre")}
            selected={navPath.pathname === "/sobre" ? true : false}
          >
            Sobre
          </TabButton>
        </Content>
        <UserAvatar user={props.loggedUser} />
      </Container>
      <BottomSpacer />
    </>
  );
}

export default connect(mapStateToProps, {})(Topbar);
