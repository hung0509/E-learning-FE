import { DashBoardService } from "../service/dashboard-service";
import { showError } from "../service/toast";

export const useDashBoard = () => {
    const handleAnalytic = async (credential) => {
        try {
            const data = await DashBoardService.analytic(credential);
            if(data.code === 0){
                return data.result;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    return { handleAnalytic };
}