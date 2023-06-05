import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  flex: 1 0 auto;
`;

export const Flavor = styled.div`
  width: 376px;
  margin: 0 auto;
  position: relative;
  align-items: left;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  border-radius: 2.91696px;
  display: flex;
  h2 {
    padding-top: 3.6rem;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;

    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;

    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }
  margin-top: 44px;
  img {
    position: absolute;
    bottom: 0;
    left: -30px;
    animation: entry 1.5s ease-out forwards;
  }
  div {
    margin-left: 15rem;
    padding-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    width: 100rem;
    position: relative;
    margin-top: 16rem;
    img {
      width: 65rem;
      height: 412px;
      left: -80px;
      bottom: -15px;
    }
    h2 {
      white-space: nowrap;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 3rem;
      line-height: 140%;
    }
    div {
      padding: 88px;
      margin-left: 46rem;
    }
    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
    }
  }
  @media (min-width: 1224px) {
    width: 1120px;
    position: relative;
    margin-top: 16rem;
    img {
      width: 65rem;
      height: 412px;
      left: -80px;
      bottom: -15px;
    }
    h2 {
      white-space: nowrap;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 140%;
    }
    div {
      padding: 88px;
      margin-left: 50rem;
    }
    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
    }
  }

  @keyframes entry {
    0% {
      opacity: 0;
      transform: translateX(-120px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Foods = styled.div`
  width: 376px;
  margin: 0 auto;
  margin-top: 6rem;
  overflow: hidden;
  animation: entry 1.5s ease-out forwards;

  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

    margin-bottom: 2.4rem;
  }
  div {
  }
  @media (min-width: 1024px) {
    width: 100rem;
    div {
      height: max-content;
    }
  }
  @keyframes entry {
    0% {
      opacity: 0;
      transform: translateX(-368px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Prev = styled.div`
  position: absolute;
  cursor: pointer;
  top: 40%;

  z-index: 100;
  svg {
    width: 40px;
    height: 40px;
  }
`;
export const Next = styled.div`
  cursor: pointer;
  position: absolute;
  top: 40%;
  right: 0;
  z-index: 100;
  svg {
    width: 40px;
    height: 40px;
  }
`;
export const Menu = styled.div`
  width: 37rem;
  margin: 0 auto;
  margin-top: 3.6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    span {
      p {
        cursor: pointer;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

        border-bottom: 1px solid #192227;
        padding-bottom: 1rem;
      }
    }
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
  @media (min-width: 1224px) {
    > div {
      width: 50rem;
    }
  }
`;
