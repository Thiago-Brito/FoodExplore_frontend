import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : "#76797B"};
  color: gray;

  border: ${({ theme, isNew }) => (isNew ? `1px dashed gray` : "none")};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 12px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  .button-add {
    color: #9d9db0;
  }

  > input {
    width: 100%;
    padding: 8px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    background: transparent;

    border: none;

    &placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
    }
  }
`;
