import styled from "styled-components";

export const Container = styled.div`
  width: 316px;
  margin: 0 auto;
  height: 100vh;

  @media (min-width: 1024px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    gap: 15rem;
    margin: auto;
    margin-top: -5rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 15rem;
  svg {
    color: #065e7c;
    width: 4rem;
    height: 4rem;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 3.7rem;
    line-height: 4.4rem;
  }
  @media (min-width: 1024px) {
    margin-top: -1rem;
  }
`;

export const Form = styled.form`
  margin-top: 7rem;
  display: grid;
  gap: 3rem;
  > a {
    margin: 0 auto;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  h2 {
    display: none;
  }
  @media (min-width: 1024px) {
    width: 43rem;
    background: #001119;
    border-radius: 16px;
    padding: 64px;
    h2 {
      margin: 0 auto;
      display: block;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;
    }
  }
`;
