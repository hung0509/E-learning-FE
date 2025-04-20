import { CODE } from "../constant/code";
import { AccountService } from "../service/account-service";
import { showError, showSuccess } from "../service/toast";

export const useAccount = () => {
    const register = async (credentials) => {
        try {
            const data = await AccountService.register(credentials);
            if (data.code === 0) {
                showSuccess(data.message);
                window.location.href = '/sign-in';
            } else {
                showError(data.message);
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    };

    const registerCourse = async (credentials) => {
        try {
            const data = await AccountService.registerCourse(credentials);
            console.log(data);
            if (data.code === CODE.SUCCESS) {
                showSuccess("Đăng ký khóa học thành công!");
            } else {
                showError(data.message);
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    return { register, registerCourse };
}