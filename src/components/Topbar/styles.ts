import { borderBottom } from "@mui/system";
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
  cursor: "pointer",
  padding: "20px 30px",
  background: selected
    ? `linear-gradient(180deg, ${colors.secondary}, ${colors.primary})`
    : `inherit`,
  color: selected ? colors.secondary : "inherit",
  fontWeight: selected ? "bold" : "normal",
}));

export const BottomSpacer = styled.div`
  background: linear-gradient(
    90deg,
    ${colors.primary},
    ${colors.primary} 80%,
    ${colors.secondary}
  );
  height: 2px;
`;
