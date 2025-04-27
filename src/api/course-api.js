import { API_ENDPOINTS, API_URL } from "../constant";
import { CODE } from "../constant/code";
import { MESSAGES } from "../constant/message"
import axiosInstance from "../interceptor/config";

export const CourseApi = {
    addCourse: async (credential) => {
        try{
            const res = await axiosInstance.post(`${API_URL}${API_ENDPOINTS.COURSE}`, credential);

            return res.data;
        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_UNKNOWN;
            console.log(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    },

    getCourses: async (credential) => {
        try{
            const res = await axiosInstance.get(`${API_URL}${API_ENDPOINTS.COURSE}${credential}`, );

            return res.data;
        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_UNKNOWN;
            console.log(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    },

    getDetailCourse: async (credential) => {
        try{
            const res = await axiosInstance.get(`${API_URL}${API_ENDPOINTS.COURSE_DETAIL}${credential}`, );

            return res.data;
        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_UNKNOWN;
            console.log(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    },

    getCourseSpecial: async () => {
        try{
            const res = await axiosInstance.get(`${API_URL}${API_ENDPOINTS.COURSE_SPECIAL}`);

            return res.data;
        }catch(err){
            const message = err.response?.data?.message || MESSAGES.ERROR_UNKNOWN;
            console.log(message);
            return {
                code: CODE.FAIL,
                message: message
            }
        }
    }

}