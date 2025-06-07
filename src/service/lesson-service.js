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
    },

    delete : async (credential) => {
        try{
            const data = await LessonApi.remove(credential);

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

    add : async (credential) => {
        try{
            const data = await LessonApi.add(credential);

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

    update : async (id, credential) => {
        try{
            const data = await LessonApi.update(id, credential);

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