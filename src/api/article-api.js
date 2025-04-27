import { API_ENDPOINTS, API_URL } from "../constant"
import { CODE } from "../constant/code";
import axiosInstance from "../interceptor/config"

export const ArticleApi = {
    addArticle: async (credential) => {
        try {
            const res = await axiosInstance.post(`${API_URL}${API_ENDPOINTS.ARTICLE}`, credential);

            return res.data;
        } catch (err) {
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },

    getArtileById: async (param) => {
        try{
            const res = await axiosInstance.get(`${API_URL}${API_ENDPOINTS.ARTICLE}/user${param}`);

            return res.data;
        }catch(err){
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },

    getAllArticle: async (param) => {
        try{
            const res = await axiosInstance.get(`${API_URL}${API_ENDPOINTS.ARTICLE}${param}`);

            return res.data;
        }catch(err){
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },

    updateArticle: async (credential) => {
        try {
            const res = await axiosInstance.put(`${API_URL}${API_ENDPOINTS.ARTICLE}`, credential);

            return res.data;
        } catch (err) {
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },

}