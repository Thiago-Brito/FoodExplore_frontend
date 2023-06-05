import { Container } from "./style";

export function Search({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  );
}
