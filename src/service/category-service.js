import { CategoryApi } from "../api/category-api";
import { MESSAGES } from "../constant/message";

export const CategoryService = {
    getCategories : async () => {
        try{
            const data = await CategoryApi.getAllCategory();

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