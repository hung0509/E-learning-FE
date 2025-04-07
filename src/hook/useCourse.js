import { CourseService } from "../service/course-service";
import { showError, showSuccess } from "../service/toast";

export const useCourse = () => {
    const handleAddSourse = async (credential) => {
        try{
            const data = await CourseService.addCourse(credential);

            if(data.code === 0){
                showSuccess("Khóa học " + data.result.courseName + " thêm thành công");
                window.location.href = '/admin/course';
            }else {
                showError(data.message);
            }
        }catch(err){
            showError(err.message);
            throw err;
        }
    }

    return { handleAddSourse };
}