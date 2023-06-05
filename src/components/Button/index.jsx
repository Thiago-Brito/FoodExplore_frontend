import { Container } from "./style";

export function Button({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}
