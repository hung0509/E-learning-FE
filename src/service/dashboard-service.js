import { DashBoardApi } from "../api/dashboard-api";
import { MESSAGES } from "../constant/message";

export const DashBoardService = {
    analytic : async (credential) => {
        try{
            const data = await DashBoardApi.analytics(credential);

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