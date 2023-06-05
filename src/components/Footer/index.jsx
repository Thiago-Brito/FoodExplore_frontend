import { Container, Logo, Content } from "./style";

import { BsHexagonFill } from "react-icons/bs";

export function Footer() {
  return (
    <Container>
      <Content>
        <Logo>
          <BsHexagonFill />
          <h1>Food explorer</h1>
        </Logo>
        <span>© 2023 - Todos os direitos reservados.</span>
      </Content>
    </Container>
  );
}
