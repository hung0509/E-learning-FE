import axiosInstance from '../interceptor/config';
import { API_URL, API_ENDPOINTS } from '../constant';
import { CODE } from '../constant/code';

export const authenticationApi = {
    login : async (credential) => {
    try{
        const res = await axiosInstance.post(`${API_URL}${API_ENDPOINTS.AUTH}`, credential);
        return res.data;
    }catch(err) {
        console.error("API Error:", err.response?.data?.message || err.message);
        return {
          code: false,
          message: err.response?.data?.message || "Lỗi không xác định",
        };
    }
    },

    logout: async (credential) => {
        try{
            const res = await axiosInstance.post(`${API_URL}${API_ENDPOINTS.LOG_OUT}`, credential);
            return res.data;
        }catch(err) {
            console.error("API Error:", err.response?.data?.message || err.message);
            return {
              code: CODE.FAIL,
              message: err.response?.data?.message || "Lỗi không xác định",
            };
        }
    }
}

