import { LessonApi } from "../api/lesson-api";
import { MESSAGES } from "../constant/message";

export const LessonService = {
    getLessonById : async (credential) => {
        try{
            const data = await LessonApi.getLessonById(credential);

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