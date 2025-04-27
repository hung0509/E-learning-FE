import { LessonService } from "../service/lesson-service";
import { showError } from "../service/toast";

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

    return { handleGetLesson };
}