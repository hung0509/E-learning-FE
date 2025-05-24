import { jwtDecode } from "jwt-decode";
import { AccountApi } from "../api/account-api"
import { CODE } from "../constant/code";
import { MESSAGES } from "../constant/message";

export const AccountService = {
    register: async (credential) => {
        try {
            const data = AccountApi.register(credential);

            const { code, result } = data;

            if (code !== 0) {
                return {
                    code: code,
                    message: "Thông tin nhập liệu chưa chính xác!",
                };
            }

            return {
                code: 0,
                result: result,
                message: "Vui lòng kiểm tra email để kích hoạt tài khoản!"
            }
        } catch (err) {
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            return {
                code: false,
                message,
            };
        }
    },

    registerCourse: async (credential) => {
        try {
            const data = await AccountApi.registerCourse(credential);
            console.log(data);

            const { code, result } = data;
            if (code !== 0) {
                return {
                    code: code,
                    message: MESSAGES.ERROR_UNKNOWN
                }
            }

            return {
                code: CODE.SUCCESS,
                result: result,
                message: "Đăng ký thành công khóa học!"
            }
        } catch (err) {
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            return {
                code: false,
                message,
            };
        }
    },

    update: async (credential) => {
        try {
            const data = await AccountApi.update(credential);
            console.log(data);

            const { code, result } = data;
            if (code !== 0) {
                return {
                    code: code,
                    message: MESSAGES.ERROR_UNKNOWN
                }
            }

            return {
                code: CODE.SUCCESS,
                result: result,
                message: "Cập nhật tài khoản thành công"
            }
        } catch (err) {
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            return {
                code: false,
                message,
            };
        }
    },

    resetPassword: async (credential) => {
        try {
            const data = await AccountApi.resetPassword(credential);
            console.log(data);

            const { code, result } = data;
            if (code !== 0) {
                return {
                    code: code,
                    message: MESSAGES.ERROR_UNKNOWN
                }
            }

            return {
                code: CODE.SUCCESS,
                result: result,
            }
        } catch (err) {
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
            return {
                code: false,
                message,
            };
        }
    },

    getFirstRoleFromToken : () => {
        const token = localStorage.getItem('token');
        if (!token) return null;

        try {
            const decoded = jwtDecode(token);
            const scope = decoded.scope;

            if (typeof scope === 'string') {
                const roles = scope.trim().split(/\s+/);
                return roles.length > 0 ? roles[0] : null;
            }

            return null;
        } catch (error) {
            console.error('Invalid token:', error);
            return null;
        }
    }
}