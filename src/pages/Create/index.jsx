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

export function Create() {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Default");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [fileText, setFileText] = useState("");

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
  async function handleCreateFood() {
    try {
      if (
        title == "" ||
        category == "Default" ||
        price == "" ||
        description == "" ||
        tags.length == 0
      ) {
        alert("Preencha todos os campos");
        return;
      }
      if (avatarFile == null) {
        alert("Preencha todos os campos");
        return;
      }

      const response = await api.post("/foods", {
        title,
        category,
        description,
        price,
        tags,
      });
      const food_id = response.data.food_id;
      const fileUploadForm = new FormData();
      fileUploadForm.append("avatar", avatarFile);
      await api.patch(`/foods/avatar/${food_id}`, fileUploadForm);

      alert("Prato criado com sucesso");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possilvel criar o novo prato");
      }
    }
  }

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

        <Form>
          {isDesktop ? <h2>Adicionar prato</h2> : <h2>Novo Prato</h2>}
          <ThreeColl>
            <Input
              title={"Imagem do Prato"}
              id={"image"}
              placeholder={"Exemplo: Selecione imagem"}
              type={"file"}
              textImage={avatarFile ? fileText : "Selecione imagem"}
              onChange={handleChangeAvatar}
            />
            <Input
              title={"Nome"}
              id={"name"}
              placeholder={"Ex.: Salada Ceasar"}
              type={"name"}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Select>
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                onChange={(e) => setCategory(e.target.value)}
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
              type={"text"}
              onChangePrice={(value) => setPrice(value)}
            />
          </TwoColl>
          <div>
            <label htmlFor="descrption">Descrição</label>
            <textarea
              id="descrption"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <Buttons>
            <button type="button" onClick={handleCreateFood}>
              Salvar alterações
            </button>
          </Buttons>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
