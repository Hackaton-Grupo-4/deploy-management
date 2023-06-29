import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Editor } from 'react-draft-wysiwyg'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import {
  Button,
  Container,
  Content,
  InputContainer,
  InputGroup,
  TextareaContainer,
  TextareaGroup,
  Title,
} from "./TextEditor.style"
import { DeployEditorFormType } from "./DeployEditorFormType"
import { DeployEditorService } from "services/deploy-editor/deploy-editor.service"
import { usePageContext } from "context"
import { ChosePageEnum } from "interfaces"

export const PageTextEditor = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DeployEditorFormType>({mode: 'onChange'})
  const { setChosenPage } = usePageContext()
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state)
  }

  const onSubmit: SubmitHandler<DeployEditorFormType> = async (data) => {
    const contentState = editorState.getCurrentContent()
    const rawContent = convertToRaw(contentState)
    const newContentState = convertFromRaw(rawContent)
    const htmlContent = stateToHTML(newContentState)
    data.description = htmlContent
    const postClassificationId = data.postClassificationId[0].toString() as string
    data.postClassificationId = [Number(postClassificationId)]
    data.applicationId =  1
    data.platformId = 1
    data.userId = 1
    await DeployEditorService.setNewDeploy(data).then(() => {
      alert('Deploy adicionado com sucesso')
      setChosenPage(ChosePageEnum.HISTORIC)
    }).catch((e) => console.error('Erro ao salvar um novo deploy'))
  }

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
            <input {...register("postDate", { required: true })} type="date" />
          </InputContainer>
          <InputContainer>
            <label>Status</label>
            <input {...register("status", { required: true })} type="text" />
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <InputContainer>
            <label>Título</label>
            <input {...register("title", { required: true })} type="text" />
          </InputContainer>
          <InputContainer>
            <label>Tipo de Deploy</label>
            <select {...register("postClassificationId", { required: true })}>
              <option value="1">feature</option>
              <option value="2">melhoria</option>
              <option value="3">ajuste</option>
            </select>
          </InputContainer>
        </InputGroup>

        <TextareaGroup>
          <TextareaContainer>
            <label>Síntese</label>
            <textarea {...register("syntax", { required: true })} />
          </TextareaContainer>
          <TextareaContainer>
            <label>Descrição</label>
            <Editor
              editorState={editorState}
              onEditorStateChange={handleEditorChange}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
            />
          </TextareaContainer>
        </TextareaGroup>
        
        <Button type="submit">Salvar</Button>
      </Content>
    </Container>
  )
}
