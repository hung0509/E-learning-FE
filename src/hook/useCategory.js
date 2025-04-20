import { CategoryService } from "../service/category-service";
import { showError } from "../service/toast";

export const useCategory = () => {
    const handleCategory = async () => {
        try {
            const data = await CategoryService.getCategories();
            if(data.code === 0){
                return data.result;
            }
        } catch (err) {
            showError(err.message);
            throw err;
        }
    }

    return { handleCategory };
}