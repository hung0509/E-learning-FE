import { ArticleService } from "../service/article-service";
import { showError, showSuccess } from "../service/toast";

export const useArticle = () => {
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

    return { handleAddArticle };
}