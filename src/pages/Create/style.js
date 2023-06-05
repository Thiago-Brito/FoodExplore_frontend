import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 37rem;
  margin: 0 auto;
  flex: 1 0 auto;

  a {
    display: flex;
    align-items: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16.5459px;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

    svg {
      width: 22px;
      height: 22px;
    }
  }
  margin-top: 1rem;
  @media (min-width: 1024px) {
    width: 100%;

    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const Form = styled.form`
  margin-top: 3rem;
  display: grid;
  gap: 3rem;
  > h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }
  label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    text-transform: initial;
    color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
  }
  textarea {
    margin-top: 1rem;
    width: 100%;
    background: ${({ theme }) => theme.COLORS.DARK_BLUE};
    border-radius: 8px;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_GREY};

    padding: 9px 14px 0px;
    height: 17rem;
    resize: none;
  }
`;

export const Select = styled.div`
  display: grid;
  gap: 1rem;

  > select {
    width: 100%;
    padding: 12px 14px;
    background: ${({ theme }) => theme.COLORS.DARK_BLUE};

    border-radius: 8px;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_GREY};

    height: 48px;
  }
`;

export const Ingredients = styled.div`
  margin-top: 1rem;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.DARK_BLUE};
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_GREY};

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px 14px 1px;
  height: max-content;
`;

export const ThreeColl = styled.div`
  display: grid;
  gap: 3rem;
  @media (min-width: 1024px) {
    display: grid;
    gap: 3rem;
    grid-template-columns: 0.5fr 1fr 0.7fr;
  }
`;
export const TwoColl = styled.div`
  display: grid;
  gap: 3rem;
  @media (min-width: 1024px) {
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr 0.3fr;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  > button {
    width: 100%;

    padding: 12px 32px;
    background: #ab4d55;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
  }
  > button:hover {
    background-color: #b0454e;
  }
  @media (min-width: 1024px) {
    justify-content: flex-end;
    > button {
      margin-bottom: 70px;
      width: 19rem;
    }
  }
`;
