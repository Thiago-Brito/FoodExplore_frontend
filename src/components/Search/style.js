import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.DARK_BLUE};
  gap: 4px;

  border-radius: 10px;
  justify-content: center;
  > input {
    height: 56px;
    width: 25rem; /* Defina a largura desejada para o input */

    padding: 12px 14px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
    }
  }

  > svg {
    margin-left: 16px;
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
  }
`;
