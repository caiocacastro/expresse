import styled from "styled-components";
import { colors } from "../../../model/style";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 30px;
  transition: ease all 0.1s;
  user-select: none;
  cursor: pointer;

  :hover {
    color: ${colors.secondary};
    background: linear-gradient(180deg, ${colors.secondary}, ${colors.primary});
  }
`;

export const Username = styled.div`
  padding: 0 20px 0 8px;
`;
