import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  text-transform: capitalize;
  padding: 8px 32px;
  background: ${({ theme }) => theme.COLORS.RED};
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  display: grid;

  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;
