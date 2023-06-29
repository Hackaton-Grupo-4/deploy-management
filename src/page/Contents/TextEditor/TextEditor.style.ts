import styled from "styled-components";

export const Title = styled.h3`
  font-size: 30px;
  color: #1f4e8d;
`;

export const Container = styled.div`
  padding-left: 150px;
  font-size: 14px;

  @media (max-width: 992px) {
    padding-left: 100px;
  }

  input,
  textarea, select {
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

  .demo-wrapper {
    border: 1px solid #e1e4e8;
    padding: 2px;
    border-radius: 2px;
    background: #fff;
  }
  
  .demo-editor {
    min-height: 200px;
    padding: 10px;
  }
`;

export const Content = styled.form`
  width: 100%;
  display: inline-block;
  overflow: scroll;
  height: calc(100vh - 170px);
  padding-right: 120px;
  box-sizing: border-box;
  position: realtive;

  @media (max-width: 992px) {
    padding-right: 30px;
  }
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


export const Button = styled.button`
  appearance: none;
  border: none;
  background: rgba(18, 45, 82, 0.95);
  color: rgb(243, 245, 249);
  cursor: pointer;
  display: inline-block;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  position: absolute;
  right: 100px;
  bottom: 20px;

  @media (max-width: 992px) {
    right: 30px;
  }
`