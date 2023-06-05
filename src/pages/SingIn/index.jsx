import { Container, Logo, Form } from "./style";
import { BsHexagonFill } from "react-icons/bs";
import { Input } from "../../components/Input/Index";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SingIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");

  async function handleSignIn() {
    signIn({ email, password });
  }
  return (
    <Container>
      <Logo>
        <BsHexagonFill />
        <h1>Food explorer</h1>
      </Logo>

      <Form>
        <h2>Faça login</h2>
        <Input
          title={"Email"}
          id={"email"}
          placeholder={"Exemplo: exemplo@exemplo.com.br"}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          title={"Senha"}
          id={"senha"}
          placeholder={"No mínimo 6 caracteres"}
          type={"password"}
          onChange={(e) => setPassoword(e.target.value)}
        />

        <Button type="button" onClick={handleSignIn} title={"entrar"} />
        <Link to={"/register"}>Criar uma conta</Link>
      </Form>
    </Container>
  );
}
