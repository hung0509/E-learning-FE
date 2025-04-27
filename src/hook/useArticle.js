import { useNavigate } from "react-router-dom";
import { ArticleService } from "../service/article-service";
import { showError, showSuccess } from "../service/toast";

export const useArticle = () => {
    const navigate = useNavigate();

    const handleAddArticle = async (credential) => {
        try{
            const data = await ArticleService.addArticle(credential);

            if(data.code === 0){
                showSuccess("Bài viết " + data.result.title + " thêm thành công");
                window.location.href = '/';
            }else {
                showError(data.message);
            }
        }catch(err){
            showError(err.message);
            throw err;
        }
    }

    const handleGetAllArticle = async (param) => {
        try{
            const data = await ArticleService.getAllArticle(param);

            if(data.code === 0){
                return data;
            }else {
                console.error(data.message);
            }
        }catch(err){
            showError(err.message);
            throw err;
        }
    }

    const handleGetArticleById = async (param) => {
        try{
            const data = await ArticleService.getArticleById(param);

            if(data.code === 0){
                return data.result;
            }else {
                console.error(data.message);
            }
        }catch(err){
            showError(err.message);
            throw err;
        }
    }

    const handleUpdateArticle = async (credential) => {
        try{
            const data = await ArticleService.updateArticle(credential);

            if(data.code === 0){
                navigate('/admin/article');
            }else {
                showError(data.message);
            }
        }catch(err){
            showError(err.message);
            throw err;
        }
    }

    return { handleAddArticle, handleGetAllArticle, handleGetArticleById, handleUpdateArticle };
}