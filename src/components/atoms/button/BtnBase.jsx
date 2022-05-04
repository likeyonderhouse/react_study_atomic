import styled from "styled-components";

// export const BtnPrimary = (props) => {
//   const { children } = props;
//   return <SButton>{children}</SButton>;
// };

export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
