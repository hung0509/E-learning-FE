import { CommentApi } from "../api/comment-api";
import { CODE } from "../constant/code";
import { MESSAGES } from "../constant/message";

export const CommentService = {
    postComment: async (credential) => {
        try {
            const data = await CommentApi.postComment(credential);

            const { code } = data;

            if (code !== 0) {
                return {
                    code: code,
                    message: MESSAGES.ERROR_UNKNOWN
                }
            }

            return {
                code: 0
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
            const data = await CommentApi.getAll(credential);

            const { code, result, currentPage, pageSize, totalPages, totalItems } = data;

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