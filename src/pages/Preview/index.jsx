import { Header } from "../../components/Header";
import {
  Container,
  Content,
  Tags,
  Amount,
  Include,
  Quantity,
  Modal,
} from "./style";

import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { Footer } from "../../components/Footer";
import { useMediaQuery } from "react-responsive";

import { api } from "../../Services/api";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import receipt from "../../assets/receipt.svg";
import { useAuth } from "../../hooks/auth";
import { Button } from "../../components/Button";

export function Preview() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const parms = useParams();

  const [food, setFood] = useState([]);
  const [tags, setTags] = useState([]);
  const [requestFoods, setRequestFoods] = useState([]);
  const [requestCount, setRequestCount] = useState(0);
  const [modal, setModal] = useState(false);

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const [quantity, setQuantity] = useState("01");

  async function handleAddRequest(id, quantity) {
    try {
      await api.post("/request", { food_id: id, quantity });
      setRequestCount((prevCount) => prevCount + 1);
      alert("Pedido enviado para sacola");
      setQuantity("01");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("erro");
      }
    }
  }
  async function handleRemoveOneRequest(id) {
    try {
      await api.delete(`/request/${id}`);
      setRequestCount((prevCount) => prevCount + 1);
      alert("Pedido removido com sucesso");
      setModal(false);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("erro");
      }
    }
  }
  async function handleDeleteRequest() {
    try {
      await api.delete("request");
      setRequestCount((prevCount) => prevCount + 1);
      alert("Compra realizada com sucesso");
      setModal(false);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("erro");
      }
    }
  }

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
  useEffect(() => {
    async function fetchRequest() {
      try {
        const response = await api.get("/request");
        setRequestFoods(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("erro");
        }
      }
    }
    fetchRequest();
  }, [requestCount]);

  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await api.get(`/foods/${parms.id}`);
        setFood(response.data);
        setTags(response.data.tags.map((tag) => tag.name));
        const request = await api.get("/request");
        setRequestFoods(request.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("error");
        }
      }
    }
    fetchFood();
  }, []);

  return (
    <Container>
      <Header
        quantity={requestFoods ? requestFoods.length : 0}
        handleOpenModal={() => {
          setModal(true);
        }}
      />
      <a
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoIosArrowBack />
        Voltar
      </a>

      {Object.keys(food).length !== 0 && (
        <Content>
          <img
            src={`${api.defaults.baseURL}/files/${food.avatar}`}
            alt={`imagem do prato ${food.title}`}
          />
          <section>
            <h3>{food.title}</h3>
            <p>{food.description}</p>
            <Tags>
              {tags && tags.map((tag, index) => <div key={index}>{tag}</div>)}
            </Tags>
            <Quantity
              onClick={
                user.role === "admin"
                  ? () => {
                      navigate(`/edit/${food.id}`);
                    }
                  : null
              }
            >
              {user.role !== "admin" ? (
                <Amount>
                  <AiOutlineMinus onClick={handleLess} />
                  {quantity}
                  <AiOutlinePlus onClick={handlePlus} />
                </Amount>
              ) : (
                ""
              )}

              <Include>
                {user.role !== "admin" ? (
                  <>
                    {isDesktop ? (
                      ""
                    ) : (
                      <img src={receipt} alt="imagem do carrinho" />
                    )}

                    <p
                      onClick={() => {
                        handleAddRequest(parms.id, quantity);
                      }}
                    >
                      {isDesktop ? "incluir" : "pedir"} ∙ R$ {food.price}
                    </p>
                  </>
                ) : (
                  <>
                    <p>Editar prato</p>
                  </>
                )}
              </Include>
            </Quantity>
          </section>
          {modal && (
            <Modal>
              <div>
                <a
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  <IoIosArrowBack />
                  Voltar as compras
                </a>
                <table>
                  <thead>
                    <tr>
                      <th>Quantidade</th>
                      <th>Prato</th>
                      <th>V. Unidade</th>
                      <th>V. Item</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requestFoods.map((request, index) => (
                      <tr key={index}>
                        <td>
                          <span>
                            <button
                              onClick={() => {
                                handleRemoveOneRequest(request.id);
                              }}
                            >
                              <AiOutlineClose />
                            </button>
                            {request.quantity}
                          </span>
                        </td>
                        <td>{request.title}</td>
                        <td>{request.price}</td>
                        <td>
                          {(
                            (request.price + "").replace(",", ".") *
                            request.quantity
                          ).toFixed(2)}
                        </td>
                      </tr>
                    ))}

                    <tr>
                      <td></td>
                      <td>Total</td>
                      <td>R$</td>
                      <td>
                        {requestFoods
                          .reduce(
                            (total, request) =>
                              total +
                              (request.price + "").replace(",", ".") *
                                request.quantity,
                            0
                          )
                          .toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Button
                  title={"Concluir a compra"}
                  onClick={() => {
                    handleDeleteRequest();
                  }}
                />
              </div>
            </Modal>
          )}
        </Content>
      )}
      <Footer />
    </Container>
  );
}
