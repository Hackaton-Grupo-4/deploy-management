import { Container } from "./TextEditor.style";
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
      <h3>Incluir Deploy</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("group")} />
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
};
