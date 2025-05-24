import { API_ENDPOINTS, API_URL } from "../constant"
import { CODE } from "../constant/code";
import axiosInstance from "../interceptor/config"

export const AccountApi = {
    register: async (credential) => {
        try {
            const res = await axiosInstance.post(`${API_URL}${API_ENDPOINTS.REGISTER}`, credential);

            return res.data;
        } catch (err) {
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },

    registerCourse: async (credential) => {
        try {
            const res = await axiosInstance.post(`${API_URL}${API_ENDPOINTS.REGISTER_COURSE}`, credential);

            return res.data;
        } catch (err) {
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },

    update: async (credential) => {
        try {
            const res = await axiosInstance.post(`${API_URL}${API_ENDPOINTS.ACCOUNT}`, credential);

            return res.data;
        } catch (err) {
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },

    resetPassword: async (credential) => {
        try {
            const res = await axiosInstance.post(`${API_URL}${API_ENDPOINTS.RESET_PASSWORD}`, credential);

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