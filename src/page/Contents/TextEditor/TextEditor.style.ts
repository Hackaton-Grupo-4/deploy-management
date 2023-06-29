import styled from "styled-components";

export const Title = styled.h3`
  font-size: 30px;
  color: #1f4e8d;
`;

export const Container = styled.div`
  padding: 0 150px 0 60px;
  font-size: 14px;

  @media (max-width: 992px) {
    padding: 0 50px 0 100px;
  }

  input,
  textarea {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    height: 35px;
    border: 1px solid #e1e4e8;
    padding: 0 10px;
    outline: none;
    resize: none;
  }

  textarea {
    height: 100px;
    padding: 10px;
  }

  label {
    font-size: 12px;
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex: column;
  width: 100%;
  margin-bottom: 30px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 45%;

  + div {
    margin-left: 10%;
  }
`;

export const TextareaGroup = styled.div`
  display: inline-block;
  width: 100%;
`;

export const TextareaContainer = styled.div`
  margin-bottom: 30px;
`;
