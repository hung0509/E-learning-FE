import { LessonService } from "../service/lesson-service";
import { showError, showSuccess } from "../service/toast";

export const useLesson = () => {
    const handleGetLesson = async (credential) => {
        try {
            const data = await LessonService.getLessonById(credential);
            if(data.code === 0){
                return data.result;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    const handleDeleteLesson = async (credential) => {
        try {
            const data = await LessonService.delete(credential);
            if(data.code === 0){
                return data.result;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    const handleAddLesson = async (credential) => {
        try {
            const data = await LessonService.add(credential);
            if(data.code === 0){
                return data.result;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    const handleUpdate = async (id, credential) => {
        try {
            const data = await LessonService.update(id, credential);
            if(data.code === 0){
                showSuccess("Cập nhật thành công")
                return data.result;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    return { handleGetLesson, handleDeleteLesson, handleAddLesson, handleUpdate };
}