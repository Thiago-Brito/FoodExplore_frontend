import { Header } from "../../components/Header";
import { Container, Main } from "./style";

import { BiError } from "react-icons/bi";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate("");
  return (
    <Container>
      <Header quantity={0} />

      <Main>
        <BiError />
        <h3>OPS: NÃO ENCONTRAMOS ESSA PAGINA</h3>

        <Button
          onClick={() => {
            navigate("/");
          }}
          title={"voltar ao inicio"}
        />
      </Main>
      <Footer />
    </Container>
  );
}
