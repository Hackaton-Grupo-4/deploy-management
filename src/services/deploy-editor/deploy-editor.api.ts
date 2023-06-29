import api, { errorHandling } from '../http'
import { AxiosResponse } from 'axios'
import { DeployEditorFormType } from 'page/Contents/TextEditor/DeployEditorFormType'

class DeployEditorApi {
  private readonly BASE_ENDPOINT = '/post'

  set(params: DeployEditorFormType): Promise<any> {
    return api.post<null, AxiosResponse<any>>(
        `${this.BASE_ENDPOINT}`,
        params
      )
        .then((response) => response.data)
        .catch(errorHandling)
  }
}

export default DeployEditorApi