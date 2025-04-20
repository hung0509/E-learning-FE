import { UserInfoService } from "../service/user-info-service";

export const useUserInfo = () => {
    const handleMyInfo = async () => {
        try {
            const data = await UserInfoService.getMyInfo();
            if(data.code === 0){
                return data.result;
            }
        } catch (err) {
           console.log("Have one issue", err);
           throw err;
        }
    }

    const handleGetAll = async (credential) => {
        try {
            const data = await UserInfoService.getAllUser(credential);
            if(data.code === 0){
                return data;
            }
        } catch (err) {
           console.log("Have one issue", err);
           throw err;
        }
    }

    return { handleMyInfo, handleGetAll };
}