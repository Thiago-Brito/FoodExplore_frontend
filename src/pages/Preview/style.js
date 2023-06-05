import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  a {
    width: 37rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16.5459px;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

    margin-top: 2rem;
    svg {
      width: 22px;
      height: 22px;
    }
  }
  @media (min-width: 1024px) {
    a {
      width: 100%;

      padding-left: 100px;
    }
  }
`;

export const Content = styled.div`
  width: 37rem;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  flex: 1 0 auto;

  img {
    margin-top: 1.6rem;
    height: 264px;
    width: 264px;
    border-radius: 50%;
  }
  h3 {
    margin-top: 10px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }
  p {
    margin-top: 10px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }
  margin-top: 1rem;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;

    text-align: left;
    gap: 4rem;
    padding-left: 50px;
    padding-right: 50px;

    margin: 0 auto;
    img {
      width: 390px;
      height: 390px;
    }
    p {
      margin: 0;

      font-size: 20px;
    }
    h3 {
      margin: 0;

      font-size: 40px;
    }
    section {
      max-width: 60rem;
    }
  }
`;
export const Tags = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
  margin-top: 2rem;

  div {
    background: #192227;
    border-radius: 5px;
    width: max-content;
    padding: 4px 10px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 0rem;
  }
`;

export const Amount = styled.div`
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

  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

export const Include = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.RED};
  border-radius: 5px;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  border: none;
  gap: 10px;
  cursor: pointer;
  justify-content: center;

  > p {
    margin: 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }

  > img {
    margin: 0;
    width: 24px;
    height: 24px;
  }
  transition: filter 0.2s;
  transition: transform 0.2s;

  &:hover {
    filter: brightness(0.9);
    transform: scale(1.01);
  }

  @media (min-width: 1024px) {
    width: max-content;
    > p {
      white-space: nowrap;
      font-size: 16px;
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 4.8rem;
  gap: 2rem;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin: 0;
    gap: 1.5rem;
    margin-top: 3rem;
  }
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  z-index: 2000;

  > div {
    position: relative;
    text-align: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    box-shadow: 12px 13px 13px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 37rem;
    margin: 0 auto;
    padding: 50px;
    padding-top: 4rem;
    margin-top: 10px;
    margin-bottom: 1rem;
    padding-bottom: 3rem;
    max-height: 600px; /* Defina a altura máxima desejada */
    overflow-y: auto;
    overflow-x: hidden;

    a {
      position: absolute;
      top: 1rem;
      left: 4rem;
      display: flex;
      align-items: center;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

      svg {
        width: 12px;
        height: 12px;
      }
    }
    table {
      width: 100%;
      border-collapse: collapse;
      align-items: center;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

      margin-bottom: 2rem;
      tbody {
        tr:last-child {
          border-top: 2px solid #192227;
        }
        td {
          span {
            display: flex;
            gap: 0.2rem;
            button {
              margin: 0;
              padding: 0;
              background: none;
              border: none;
              svg {
                color: red;
                height: 21px;
              }
            }
          }
        }
      }

      td {
        padding: 1.5rem;
      }
    }
  }
  @media (min-width: 1024px) {
    > div {
      width: 50rem;
      a {
        top: 0rem;
        left: -4em;
      }
    }
  }
`;
