import { Container, Heart, Amount, Include, Quantity } from "./style";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { TfiPencil } from "react-icons/tfi";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function CardFood({
  image,
  title,
  price,
  description,
  favorite,
  id,
  handleDeleteFavorite,
  handleAddFavorite,
  handleAddRequest,
}) {
  const navigate = useNavigate("");
  const { user } = useAuth();
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const [quantity, setQuantity] = useState("01");
  function handlePlus() {
    setQuantity((prevState) =>
      String(parseInt(prevState) + 1).padStart(2, "0")
    );
  }
  function handleLess() {
    setQuantity((prevState) => {
      if (parseInt(prevState) - 1 <= 1) {
        return "01";
      } else {
        return String(parseInt(prevState) - 1).padStart(2, "0");
      }
    });
  }

  return (
    <Container>
      <Heart>
        {user.role == "admin" ? (
          <TfiPencil
            onClick={() => {
              navigate(`/edit/${id}`);
            }}
          />
        ) : favorite == true ? (
          <IoMdHeart
            style={{ color: "red" }}
            onClick={() => {
              handleDeleteFavorite(id);
            }}
          />
        ) : (
          <IoMdHeartEmpty
            onClick={() => {
              handleAddFavorite(id);
            }}
          />
        )}
      </Heart>
      <img src={image} alt={`imagem do prato${title} `} />
      <h4
        onClick={() => {
          navigate(`/preview/${id}`);
        }}
      >
        {title} <RiArrowRightSLine />{" "}
      </h4>
      {isDesktop ? <span>{description}</span> : ""}
      <p>R$ {price}</p>

      {user.role != "admin" && (
        <Quantity>
          <Amount>
            <AiOutlineMinus onClick={handleLess} />
            {quantity}
            <AiOutlinePlus onClick={handlePlus} />
          </Amount>
          <Include>
            <Button
              title={"incluir"}
              onClick={() => {
                handleAddRequest(id, quantity);

                setQuantity("01");
              }}
            />
          </Include>
        </Quantity>
      )}
    </Container>
  );
}
