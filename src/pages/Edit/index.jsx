import { Header } from "../../components/Header";
import {
  Container,
  Content,
  Form,
  Select,
  Ingredients,
  ThreeColl,
  TwoColl,
  Buttons,
} from "./style";
import { Input } from "../../components/Input/Index";
import { Tag } from "../../components/Tag";

import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import { Footer } from "../../components/Footer";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { api } from "../../Services/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Edit() {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const [avatarFile, setAvatarFile] = useState(null);
  const [fileText, setFileText] = useState("");
  const [food, setFood] = useState([]);
  const parms = useParams();

  function handleAddTag() {
    if (newTag != "") {
      if (!tags.some((tag) => tag.toLowerCase() === newTag.toLowerCase())) {
        setTags((prevState) => [...prevState, newTag]);
        setNewTag("");
      }
    }
  }
  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }
  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);
    setFileText(file.name);
  }
  async function handleUpdateFood() {
    try {
      if (
        food.title == "" ||
        food.category == "Default" ||
        food.price == "" ||
        food.description == "" ||
        tags.length == 0
      ) {
        alert("Preencha todos os campos");
        return;
      }
      await api.put(`/foods/${parms.id}`, {
        title: food.title,
        category: food.category,
        description: food.description,
        price: food.price,
        tags,
      });
      if (avatarFile !== null) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);
        await api.patch(`/foods/avatar/${parms.id}`, fileUploadForm);
      }
      alert("Prato modificado com sucesso");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possilvel atualizar o prato");
      }
    }
  }
  async function handledDeleteFood() {
    try {
      if (confirm("Você realmente quer excluir esse prato?")) {
        await api.delete(`/foods/${parms.id}`);
        alert("Prato excluido com sucesso");
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possilvel excluir o prato");
      }
    }
  }

  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await api.get(`/foods/${parms.id}`);
        setFood(response.data);
        setTags(response.data.tags.map((tag) => tag.name));
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
      <Header />
      <Content>
        <a
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoIosArrowBack />
          Voltar
        </a>

        {Object.keys(food).length !== 0 && (
          <Form>
            {isDesktop ? <h2>Editar prato</h2> : <h2>Novo Prato</h2>}
            <ThreeColl>
              <Input
                title={"Imagem do Prato"}
                id={"image"}
                placeholder={"Exemplo: Selecione imagem"}
                type={"file"}
                textImage={avatarFile ? fileText : food.avatar}
                onChange={handleChangeAvatar}
              />
              <Input
                title={"Nome"}
                id={"name"}
                placeholder={"Ex.: Salada Ceasar"}
                type={"name"}
                onChange={(e) => setFood({ ...food, title: e.target.value })}
                value={food.title}
              />
              <Select>
                <label htmlFor="category">Categoria</label>
                <select
                  id="category"
                  onChange={(e) =>
                    setFood({ ...food, category: e.target.value })
                  }
                  value={food.category}
                >
                  <option value="Default">Escolha a Categoria</option>
                  <option value="refeições">Refeições</option>
                  <option value="sobremesas">Sobremesas</option>
                  <option value="bebidas">Bebidas</option>
                </select>
              </Select>
            </ThreeColl>
            <TwoColl>
              <div>
                <label htmlFor="ingredients">Ingredientes</label>
                <Ingredients>
                  {tags.map((tag, index) => {
                    return (
                      <Tag
                        key={String(index)}
                        value={tag}
                        onClick={() => handleRemoveTag(tag)}
                      />
                    );
                  })}
                  <Tag
                    isNew
                    id={"ingredients"}
                    placeholder="Adicionar"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onClick={handleAddTag}
                  />
                </Ingredients>
              </div>
              <Input
                title={"Preço"}
                id={"price"}
                placeholder={"R$ 00,00"}
                onChangePrice={(e) => setFood({ ...food, price: e })}
                pricevalue={food.price}
              />
            </TwoColl>
            <div>
              <label htmlFor="descrption">Descrição</label>
              <textarea
                id="descrption"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) =>
                  setFood({ ...food, description: e.target.value })
                }
                value={food.description}
              ></textarea>
            </div>
            <Buttons>
              <button type="button" onClick={handledDeleteFood}>
                Excluir prato
              </button>
              <button type="button" onClick={handleUpdateFood}>
                Salvar alterações
              </button>
            </Buttons>
          </Form>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
