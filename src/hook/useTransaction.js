import { DashBoardService } from "../service/dashboard-service";
import { showError } from "../service/toast";
import { TransactionService } from "../service/transaction-service";

export const useTransaction = () => {
    const handlePayment = async (credential) => {
        try {
            const data = await TransactionService.payment(credential);
            if(data.code === 0){
                  window.location.href = data.result;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    const handleGetAll = async (credential) => {
        try {
            const data = await TransactionService.getAll(credential);
            if(data.code === 0){
                  return data;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    return { handlePayment, handleGetAll };
}