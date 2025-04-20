import { CODE } from "../constant/code";
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

    const handleGetCourse = async (credential) => {
        try{
            const data = await CourseService.getCourses(credential);

            if(data.code === 0){
                return data;
            }
        }catch(err){
            throw err;
        }
    }

    const handleGetDetailCourse = async (credential) => {
        try{
            const data = await CourseService.getDetailCourse(credential);

            if(data.code === CODE.SUCCESS){
                return data.result;
            }
        }catch(err){
            throw err;
        }
    }

    return { handleAddSourse, handleGetCourse, handleGetDetailCourse };
}