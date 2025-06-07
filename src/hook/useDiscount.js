import { DashBoardService } from "../service/dashboard-service";
import { DiscountService } from "../service/discount-service";
import { showError } from "../service/toast";

export const useDiscount = () => {
    const handleGetAll = async (credential) => {
        try {
            const data = await DiscountService.getAll(credential);
            if(data.code === 0){
                return data;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    const handleAddDiscount = async (credential) => {
        try {
            const data = await DiscountService.create(credential);
            if(data.code === 0){
                return data.result;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

     const handleUpdateDiscount = async (credential) => {
        try {
            const data = await DiscountService.update(credential);
            if(data.code === 0){
                return data.result;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }
    return { handleGetAll, handleAddDiscount, handleUpdateDiscount };
}