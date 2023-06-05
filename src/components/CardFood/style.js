import styled from "styled-components";

export const Container = styled.div`
  cursor: grab;
  background: #00070a;
  padding-top: 2.4rem;
  border: 1px solid #000204;
  border-radius: 8px;
  width: 21rem;
  min-height: 29rem;
  align-items: center;
  text-align: center;
  position: relative;
  display: grid;
  align-content: center;
  img {
    border: 50%;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  h4 {
    display: flex;
    align-items: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    text-align: center;

    /* Light/Light 300 */

    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

    justify-content: center;
    margin-left: 13px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  h4:hover {
    transform: scale(1.1);
  }

  p {
    margin-top: 1.2rem;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    /* identical to box height, or 16px */

    text-align: center;

    /* Tints/Cake 200 */

    color: ${({ theme }) => theme.COLORS.BLUE};
  }
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;

    text-align: center;

    color: #c4c4cc;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
    width: 25rem;
    > span {
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      display: -webkit-box;
      -webkit-line-clamp: 2; // Quantidade de linhas
      -webkit-box-orient: vertical;
    }

    img {
      width: 176px;
      height: 176px;
      background: no-repeat center;
      background-size: cover;
      border-radius: 50%;
    }

    p {
      font-size: 3rem;
    }
    min-height: 384px;
    max-height: 384px;
  }
`;

export const Heart = styled.div`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
  svg {
    width: 24px;
    height: 22px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Amount = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  svg {
    cursor: pointer;
    width: 24px;
    height: 22px;
  }
  svg:hover {
    transform: scale(1.1);
  }
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  /* Light/Light 300 */

  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

export const Include = styled.div`
  button {
    cursor: pointer;
    max-width: 162px;

    margin: 0 auto;
    margin-top: 26px;
    margin-bottom: 36px;
  }
  @media (min-width: 1024px) {
    button {
      margin: 0 auto;
      max-width: 9rem;
    }
  }
`;

export const Quantity = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.6rem;
    margin-bottom: 3rem;
    gap: 1.5rem;
  }
`;
