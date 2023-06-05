import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 3rem;
  padding-top: 3rem;
  padding-bottom: 2.4rem;
  flex-shrink: 0;

  svg {
    width: 4rem;
    height: auto;
  }

  width: 100%;

  background-color: #00111a;
  span {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  @media (min-width: 1024px) {
    span {
      font-size: 14px;
    }
  }
  margin-bottom: 0;
`;
export const Content = styled.div`
  display: flex;

  width: 376px;
  align-items: center;

  margin: 0 auto;
  justify-content: space-around;

  @media (min-width: 1024px) {
    width: 100%;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY};

    width: 2.2rem;
    height: 2.2rem;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 15.2616px;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 24px;
    }
    > svg {
      width: 3rem;
      height: 3rem;
    }
  }
`;
