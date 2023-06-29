import { Container } from "./styled";

export const Input: FC<Input> = () => {
  return (
    <Contianer>
      <label></label>
      <input {...register("group")} />
    </Contianer>
  );
};
