import styled from "styled-components";
import { colors } from "../../model/style";

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  margin-left: 200px;
`;

type TitleProps = {
  title?: string;
};
export const Title = styled.span<TitleProps>`
  font-size: 40px;
  color: ${colors.primary};

  ::before {
    content: "°";
  }
`;
