import styled from "styled-components";
import { colors } from "../../model/style";

type SideProps = {
  show?: boolean;
};
export const Container = styled.div<SideProps>`
  display: flex;
  position: absolute;
  left: 0;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  height: 80%;
  margin-left: -250px;
  transition: ease all 0.2s;
  border-radius: 0 8px 8px 0;
  border: 4px solid ${colors.primary};
  border-left-width: 0px;
  padding: 10px 20px;
  background-color: ${colors.primary};
  color: ${colors.secondary};

  :hover {
    margin-left: 0px;
  }
`;
