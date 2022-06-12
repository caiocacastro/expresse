import styled from "styled-components";
import { colors } from "../../model/style";

export const Container = styled.div`
  background: ${colors.secondary};
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

type TopProps = {
  selected?: boolean;
};
export const TabButton = styled.div(({ selected }: TopProps) => ({
  padding: "20px 30px",
  background: selected
    ? `linear-gradient(180deg, ${colors.secondary}, ${colors.primary})`
    : "inherit",
  color: selected ? colors.secondary : "inherit",
  cursor: "pointer",
  userSelect: "none",
}));

export const BottomSpacer = styled.div`
  background: linear-gradient(
    90deg,
    ${colors.secondary},
    ${colors.primary} 20%,
    ${colors.primary} 80%,
    ${colors.secondary}
  );
  height: 2px;
`;
