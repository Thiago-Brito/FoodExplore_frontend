import { Container } from "./style";
import { TbUpload } from "react-icons/tb";
import { useEffect, useState } from "react";

export function Input({
  title,
  id,
  type,
  placeholder,
  textImage,
  pricevalue,
  onChangePrice,
  ...rest
}) {
  const [value, setValue] = useState(pricevalue !== null ? pricevalue : "");

  const handleChange = (event) => {
    const inputValue = event.target.value
      .replace(/[^\d]+/gi, "")
      .split("")
      .reverse()
      .join("");
    let result = "";
    const mask = "##.###.###,##".split("").reverse();

    for (let x = 0, y = 0; x < mask.length && y < inputValue.length; ) {
      if (mask[x] !== "#") {
        result += mask[x];
        x++;
      } else {
        result += inputValue[y];
        y++;
        x++;
      }
    }

    setValue(result.split("").reverse().join(""));
    onChangePrice(result.split("").reverse().join(""));
  };
  const displayValue = value ? `R$ ${value}` : "";

  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      {type == "file" ? (
        <>
          <label htmlFor={id}>
            <span>
              <TbUpload /> {textImage}
            </span>
            <input
              style={{ display: "none" }}
              type={type}
              id={id}
              placeholder={placeholder}
              {...rest}
            />
          </label>
        </>
      ) : id === "price" ? (
        <input
          type="text"
          value={displayValue}
          onChange={handleChange}
          placeholder="R$ 0.00"
        />
      ) : (
        <input type={type} id={id} placeholder={placeholder} {...rest} />
      )}
    </Container>
  );
}
