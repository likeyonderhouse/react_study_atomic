import styled from "styled-components";
import { BaseButton } from "./BtnBase";

export const BtnSecondary = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
