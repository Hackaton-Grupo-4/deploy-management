import {
  Container,
  Content,
  InputContainer,
  InputGroup,
  TextareaContainer,
  TextareaGroup,
  Title,
} from "./TextEditor.style";
import { useForm, SubmitHandler } from "react-hook-form";
import { DeployEditorFormType } from "./DeployEditorFormType";

export const PageTextEditor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeployEditorFormType>();
  const onSubmit: SubmitHandler<DeployEditorFormType> = (data) =>
    console.log(data);

  return (
    <Container>
      <Title>Incluir Deploy</Title>
      <Content onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputContainer>
            <label>Time</label>
            <input {...register("group", { required: true })} type="text" />
          </InputContainer>
          <InputContainer>
            <label>Aplicação</label>
            <input
              {...register("aplication", { required: true })}
              type="text"
            />
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <InputContainer>
            <label>Plataforma</label>
            <input {...register("platform", { required: true })} type="text" />
          </InputContainer>
          <InputContainer>
            <label>Versão</label>
            <input {...register("version", { required: true })} type="text" />
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <InputContainer>
            <label>Data</label>
            <input {...register("date", { required: true })} type="date" />
          </InputContainer>
          <InputContainer>
            <label>Status</label>
            <input {...register("status", { required: true })} type="text" />
          </InputContainer>
        </InputGroup>

        <TextareaGroup>
          <TextareaContainer>
            <label>Título</label>
            <input {...register("title", { required: true })} type="text" />
          </TextareaContainer>
          <TextareaContainer>
            <label>Síntese</label>
            <textarea {...register("synthesis", { required: true })} />
          </TextareaContainer>
          <TextareaContainer>
            <label>Descrição</label>
            <textarea {...register("description", { required: true })} />
          </TextareaContainer>
        </TextareaGroup>

        <button type="submit">Salvar</button>
      </Content>
    </Container>
  );
};
