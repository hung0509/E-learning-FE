import { TransactionApi } from "../api/transaction-api";
import { CODE } from "../constant/code";
import { MESSAGES } from "../constant/message";

export const TransactionService = {
    payment: async (credential) => {
        try {
            const data = await TransactionApi.payment(credential);

            const { code, result } = data;

            if (code !== 0) {
                return {
                    code: code,
                    message: MESSAGES.ERROR_UNKNOWN
                }
            }

            return {
                code: 0,
                result: result
            }
        } catch (err) {
            const message = err.response?.data?.message || MESSAGES.ERROR_SERVER;
            return {
                code: false,
                message: message
            }
        }
    },

    getAll: async (credential) => {
        try {
            const data = await TransactionApi.getAll(credential);

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
    }
}