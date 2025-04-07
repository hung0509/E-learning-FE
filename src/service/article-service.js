import { ArticleApi } from "../api/article-api";
import { CODE } from "../constant/code";
import { MESSAGES } from "../constant/message"

export const ArticleService = {
    addArticle: async (credential) => {
        try{
            const data = await ArticleApi.addArticle(credential);

            const {code, result} = data;
            if(code !== 0){
                return {
                    code: code,
                    message: "Thông tin bài viết chưa hợp lệ"
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

    getAllArticle: async (param) => {
        try{
            const data = await ArticleApi.getAllArticle(param);

            const {code, result} = data;
            if(code !== 0){
                return {
                    code: code,
                    message: MESSAGES.ERROR_UNKNOWN
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

    getArticleById: async (param) => {
        try{
            const data = await ArticleApi.getArtileById(param);

            const {code, result} = data;
            if(code !== 0){
                return {
                    code: code,
                    message: MESSAGES.ERROR_UNKNOWN
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
    }

}