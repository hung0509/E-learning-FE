import { showError, showSuccess } from "../service/toast";
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

    const handleUpdate = async (credential) => {
        try {
            const data = await UserInfoService.update(credential);
            if(data.code === 0){
                showSuccess("Cập nhật thông tin người dùng thành công");
                return data.result;
            }
        } catch (err) {
           showError("Cập nhật thông tin người dùng thất bại!");
           console.log("Have one issue", err);
           throw err;
        }
    }

    const handleUpdateV2 = async (credential) => {
        try {
            const data = await UserInfoService.updateV2(credential);
            if(data.code === 0){
                showSuccess("Cập nhật thông tin người dùng thành công");
                window.location.href="/my-info";
            }
        } catch (err) {
           showError("Cập nhật thông tin người dùng thất bại!");
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

     const handleGetSpecial = async () => {
        try {
            const data = await UserInfoService.getSpecial();
            if(data.code === 0){
                return data;
            }
        } catch (err) {
           console.log("Have one issue", err);
           throw err;
        }
    }

     const handleLearning = async (credential) => {
        try {
            const data = await UserInfoService.learnLesson(credential);
            if(data.code === 0){
                console.log("Hoàn thành bài học")
            }
        } catch (err) {
           console.log("Have one issue", err);
           throw err;
        }
    }

    return { handleMyInfo, handleGetAll, handleUpdate, handleLearning, handleGetSpecial, handleUpdateV2 };
}