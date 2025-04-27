import { CourseApi } from "../api/course-api";
import { CODE } from "../constant/code";
import { MESSAGES } from "../constant/message"

export const CourseService = {
    addCourse: async (credential) => {
        try{
            const data = await CourseApi.addCourse(credential);

            const {code, result} = data;
            if(code !== 0){
                return {
                    code: code,
                    message: "Thông tin khóa học chưa đúng"
                }
            }

            return {
                code: CODE.SUCCESS,
                result: result
            }

        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            console.error(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    },

    getCourses: async (credential) => {
        try{
            const data = await CourseApi.getCourses(credential);

            const {code, result, currentPage, pageSize, totalPages, totalItems} = data;

            if(code !== 0){
                return {
                    code: code,
                    result: null
                }
            }

            return {
                code: CODE.SUCCESS,
                result: result,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                totalItems: totalItems
            }
        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            console.error(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    },

    getDetailCourse: async (credential) => {
        try{
            const data = await CourseApi.getDetailCourse(credential);

            const {code, message, result} = data;

            if(code !== 0){
                return {
                    code: code,
                    result: null,
                    message: message
                }
            }

            return {
                code: CODE.SUCCESS,
                result: result
            }
        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            console.error(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    },

    getCourseSpecial: async () => {
        try{
            const data = await CourseApi.getCourseSpecial();

            const {code, message, result} = data;

            if(code !== 0){
                return {
                    code: code,
                    result: null,
                    message: message
                }
            }

            return {
                code: CODE.SUCCESS,
                result: result
            }
        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            console.error(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    }
}