import { UserInfoApi } from "../api/user-info-api";
import { CODE } from "../constant/code";
import { MESSAGES } from "../constant/message"

export const UserInfoService = {
    getMyInfo: async () => {
        try{
            const data = await UserInfoApi.myInfo();

            const {code, result} = data;
            if(code !== 0){
                return {
                    code: code,
                    message: MESSAGES.ERROR_SERVER
                }
            }

            return {
                code: CODE.SUCCESS,
                result: result
            }

        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            console.error(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    },

    update: async (credential) => {
        try{
            const data = await UserInfoApi.update(credential);

            const {code, result} = data;
            if(code !== 0){
                return {
                    code: code,
                    message: MESSAGES.ERROR_SERVER
                }
            }

            return {
                code: CODE.SUCCESS,
                result: result
            }

        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            console.error(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    },

    updateV2: async (credential) => {
        try{
            const data = await UserInfoApi.updateV2(credential);

            const {code, result} = data;
            if(code !== 0){
                return {
                    code: code,
                    message: MESSAGES.ERROR_SERVER
                }
            }

            return {
                code: CODE.SUCCESS,
                result: result
            }

        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            console.error(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    },

    getAllUser:  async (credential) => {
        try{
            const data = await UserInfoApi.getAll(credential);

            const {code, result,currentPage, pageSize, totalItems, totalPages} = data;
            
            if(code !== 0){
                return {
                    code: code,
                    message: MESSAGES.ERROR_SERVER
                }
            }

            return {
                code: CODE.SUCCESS,
                result: result,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                totalItems: totalItems
            }

        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            console.error(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    },

    learnLesson: async (credential) => {
        try{
            const data = await UserInfoApi.learnLesson(credential);

            const {code, result} = data;
            if(code !== 0){
                return {
                    code: code,
                    message: MESSAGES.ERROR_SERVER
                }
            }

            return {
                code: CODE.SUCCESS,
                result: result
            }

        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            console.error(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    },

     getSpecial:  async (credential) => {
        try{
            const data = await UserInfoApi.getSpecial(credential);

            const {code, result,currentPage, pageSize, totalItems, totalPages} = data;
            
            if(code !== 0){
                return {
                    code: code,
                    message: MESSAGES.ERROR_SERVER
                }
            }

            return {
                code: CODE.SUCCESS,
                result: result,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                totalItems: totalItems
            }

        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            console.error(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    },
}