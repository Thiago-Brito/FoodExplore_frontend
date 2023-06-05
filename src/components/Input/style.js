import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  > label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    text-transform: initial;
    color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
  }
  > input {
    width: 100%;
    padding: 12px 14px;
    background: ${({ theme }) => theme.COLORS.DARK_BLUE};
    border-radius: 8px;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 48px;
  }
  span {
    cursor: pointer;
    width: 100%;
    padding: 12px 14px;
    background: ${({ theme }) => theme.COLORS.DARK_BLUE};

    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    padding-right: 3rem;
    gap: 0.8rem;
    height: 48px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  @media (min-width: 1024px) {
  }
`;
