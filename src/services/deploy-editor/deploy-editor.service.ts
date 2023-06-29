import { DeployEditorFormType } from "page/Contents"
import DeployEditorApi from "./deploy-editor.api"

const deployEditorApi = new DeployEditorApi()

const setNewDeploy = async (data: DeployEditorFormType): Promise<any> => {
    try {
        const result = await deployEditorApi.set(data)
        return Promise.resolve(result)
    } catch (e) {
        Promise.reject(e)
    }
}

export const DeployEditorService = {
    setNewDeploy
}