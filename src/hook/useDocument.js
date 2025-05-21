import { DashBoardService } from "../service/dashboard-service";
import { DocumentService } from "../service/document-service";
import { showError, showSuccess } from "../service/toast";

export const useDocument = () => {
    const handleAddDocument = async (credential) => {
        try {
            const data = await DocumentService.add(credential);
            if(data.code === 0){
                showSuccess("Tải tài liệu thành công!");
                return data.result;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    const handleDeleteDoc = async (credential) => {
        try {
            const data = await DocumentService.delete(credential);
            if(data.code === 0){
                showSuccess("Xóa tài liệu thành công!");
                return data.result;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    return { handleAddDocument, handleDeleteDoc };
}