import { CommentService } from "../service/comment-service";
import { showError, showSuccess } from "../service/toast";

export const useComment = () => {
    const handlePostComment = async (credential) => {
        try {
            const data = await CommentService.postComment(credential);
            if(data.code !== 0){
                showError(data.message);
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    const handleGetAll = async (credential) => {
        try {
            const data = await CommentService.getAll(credential);
            return data;
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    const handleDeleteComment = async (credential) => {
        try {
            const data = await CommentService.delete(credential);
            showSuccess("Ẩn bình luận thành công");

            console.log(data);
            return data.result;
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    return { handlePostComment, handleGetAll, handleDeleteComment };
}