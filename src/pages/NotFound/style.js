import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  width: 37rem;
  margin: 0 auto;
  flex: 1 0 auto;
  svg {
    width: 200px;
    height: 200px;
    color: ${({ theme }) => theme.COLORS.RED};

    margin-bottom: 50px;
  }
  margin-top: 100px;
  text-align: center;
  align-items: center;
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

    margin-bottom: 1rem;
  }
`;
