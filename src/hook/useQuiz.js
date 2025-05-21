import { DashBoardService } from "../service/dashboard-service";
import { DocumentService } from "../service/document-service";
import { QuizService } from "../service/quiz-service";
import { showError, showSuccess } from "../service/toast";

export const useQuiz = () => {
    const handleAddQuiz = async (credential) => {
        try {
            const data = await QuizService.add(credential);
            if(data.code === 0){
                showSuccess("Tải bài tâp thành công!");
                return data.result;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    const handleDeleteQuiz = async (credential) => {
        try {
            const data = await QuizService.delete(credential);
            if(data.code === 0){
                showSuccess("Xóa bài tập thành công!");
                return data.result;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    return { handleAddQuiz, handleDeleteQuiz };
}