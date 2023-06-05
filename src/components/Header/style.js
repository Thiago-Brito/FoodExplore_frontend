import styled from "styled-components";

export const Container = styled.header`
  padding-top: 6rem;
  padding-bottom: 2.4rem;
  svg {
    width: 4rem;
    height: auto;
  }
  nav {
    display: flex;

    justify-content: space-between;
    align-items: center;
    width: 376px;

    margin: 0 auto;
    button {
      border: none;
      background: none;
      svg {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }
  width: 100%;

  background-color: #00111a;
  @media (min-width: 1024px) {
    svg {
      width: 24px;
      height: 24px;
    }
    nav {
      width: 100%;
      display: flex;
      justify-content: space-around;
      gap: 32px;
      padding-left: 50px;
      padding-right: 50px;
    }
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  > svg {
    color: #065e7c;
    width: 3.4rem;
    height: 3.4rem;
  }
  h1 {
    white-space: nowrap;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 2.5rem;
  }
`;

export const Receipts = styled.div`
  cursor: pointer;
  position: relative;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.03);
    filter: brightness(0.9);
  }

  > div {
    position: absolute;
    top: -2px;
    right: -3px;
    padding: 2px 5.5px;
    background: #750310;
    border-radius: 99px;
  }
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.RED};

    padding: 12px 32px;
    gap: 8px;
    border-radius: 5px;
    > div {
      white-space: nowrap;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      position: static;
    }
  }
`;

export const Logout = styled.div`
  svg {
    cursor: pointer;
    width: 32px;
    height: 32px;
    transition: all 0.2s;
  }
  svg:hover {
    transform: scale(1.1);
  }
`;
export const Admin = styled.div`
  display: flex;
  align-items: center;

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.BLUE};
  }
  gap: 8px;

  @media (min-width: 1024px) {
    flex-direction: column;
    gap: 0;
    align-items: flex-end;
  }
`;

export const Menu = styled.div`
  width: 376px;

  margin: 0 auto;

  > button {
    margin: 0;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16.5459px;

    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

    svg {
      margin: 0;

      width: 22px;
      height: 22px;
    }
  }
`;
