import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./style";

export function Tag({ isNew, id, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" id={id} value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
