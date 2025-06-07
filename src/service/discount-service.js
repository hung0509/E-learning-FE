import { DashBoardApi } from "../api/dashboard-api";
import { DiscountApi } from "../api/discount-api";
import { CODE } from "../constant/code";
import { MESSAGES } from "../constant/message";

export const DiscountService = {
    getAll: async (credential) => {
        try {
            const data = await DiscountApi.getAll(credential);

            const { code, result, currentPage, totalItems, totalPages, pageSize } = data;

            if (code !== 0) {
                return {
                    code: code,
                    message: MESSAGES.ERROR_UNKNOWN
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
        } catch (err) {
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVER;
            return {
                code: false,
                message: message
            }
        }
    },

    create: async (credential) => {
        try {
            const data = await DiscountApi.create(credential);

            const { code, result} = data;

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
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVER;
            return {
                code: false,
                message: message
            }
        }
    },

    update: async (credential) => {
        try {
            const data = await DiscountApi.update(credential);

            const { code, result} = data;

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
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVER;
            return {
                code: false,
                message: message
            }
        }
    }
}