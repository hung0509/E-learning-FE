import { API_ENDPOINTS, API_URL } from "../constant"
import { CODE } from "../constant/code";
import axiosInstance from "../interceptor/config"

export const UserInfoApi = {
    myInfo : async () => {
        try {
            const res = await axiosInstance.get(`${API_URL}${API_ENDPOINTS.MY_INFO}`);

            return res.data;
        } catch (err) {
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },

    update : async (credential) => {
        try {
            const res = await axiosInstance.post(`${API_URL}${API_ENDPOINTS.USER_INFO_UPDATE}`, credential);

            return res.data;
        } catch (err) {
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },

    updateV2 : async (credential) => {
        try {
            const res = await axiosInstance.post(`${API_URL}${API_ENDPOINTS.USER_INFO_UPDATE2}`, credential);

            return res.data;
        } catch (err) {
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },

    getAll: async (credential) => {
        try {
            const res = await axiosInstance.get(`${API_URL}${API_ENDPOINTS.USERS}${credential}`);

            return res.data;
        } catch (err) {
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },

    learnLesson: async (credential) => {
        try {
            const res = await axiosInstance.post(`${API_URL}${API_ENDPOINTS.LEARN}`,credential);

            return res.data;
        } catch (err) {
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
                code: CODE.FAIL,
                message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    },

    getSpecial: async () => {
        try {
            const res = await axiosInstance.get(`${API_URL}${API_ENDPOINTS.USERS_SPECIAL}`);

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
