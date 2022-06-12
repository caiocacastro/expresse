import { AccountCircle } from "@mui/icons-material";
import { Container, Username } from "./styles";
import { User } from "../../../model/user";

type State = {
  user: User | undefined;
};

export default function UserAvatar(props: State) {
  const { user } = props;

  return (
    <Container>
      {user ? (
        <>
          <AccountCircle />
          <Username>{user.name}</Username>
        </>
      ) : (
        <>Faça um Login </>
      )}
    </Container>
  );
}
