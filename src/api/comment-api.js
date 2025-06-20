import { API_ENDPOINTS, API_URL } from "../constant"
import { CODE } from "../constant/code";
import axiosInstance from "../interceptor/config"

export const CommentApi = {
    postComment: async (credential) => {
        try {
            const res = await axiosInstance.post(`${API_URL}${API_ENDPOINTS.COMMENT}`, credential);

            return res.data;
        } catch (err) {
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },

    getAll:  async (credential) => {
        try {
            const res = await axiosInstance.get(`${API_URL}${API_ENDPOINTS.COMMENT}${credential}`);

            return res.data;
        } catch (err) {
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },
    
     delete: async (credential) => {
        try {
            const res = await axiosInstance.delete(`${API_URL}${API_ENDPOINTS.COMMENT}/${credential}`);
            console.log(res.data);

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
