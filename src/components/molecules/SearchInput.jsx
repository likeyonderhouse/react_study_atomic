import styled from "styled-components";

import { BtnSecondary } from "../atoms/button/BtnSecondary";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SButtonContainer>
      <Input placeholder={"検索内容を入力"} />
      <SButtonWrapper>
        <BtnSecondary>検索</BtnSecondary>
      </SButtonWrapper>
    </SButtonContainer>
  );
};

const SButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
