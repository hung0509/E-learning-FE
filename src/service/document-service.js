import { DocumentApi } from "../api/document-api";
import { MESSAGES } from "../constant/message";

export const DocumentService = {
    add : async (credential) => {
        try{
            const data = await DocumentApi.add(credential);

            const {code, result} = data;

            if(code !== 0){
                return {
                    code: code,
                    message: MESSAGES.ERROR_UNKNOWN
                }
            }

            return {
                code: 0,
                result: result
            }
        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVER;
            return {
                code: false,
                message: message
            }
        }
    },

    delete : async (credential) => {
        try{
            const data = await DocumentApi.delete(credential);

            const {code, result} = data;

            if(code !== 0){
                return {
                    code: code,
                    message: MESSAGES.ERROR_UNKNOWN
                }
            }

            return {
                code: 0,
                result: result
            }
        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVER;
            return {
                code: false,
                message: message
            }
        }
    }
}