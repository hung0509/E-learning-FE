import { useEffect, useState } from 'react';
import Article from '../../component/article/article';
import { useArticle } from '../../hook/useArticle';
import ArticleDto from '../../dto/request/article-req';

const Articles = () => {
      const [data, setData] = useState([]);
      const { handleGetAllArticle } = useArticle();

      useEffect(() => {
          const fetchData = async () => {
            try{
                 const result = await handleGetAllArticle("");
                 const articles = result.map((item) =>  ArticleDto.fromArticleResponse(item))
                
                 setData(articles);
            }catch(err){
                  console.error("Error fetching articles:", err);
            }
          }

          fetchData();
      }, []);

    return (<div className="container">
        <div class="row">
          <div class="col">
            <h1 class="display-4 font-weight-bolder">Bài viết nổi bật</h1>
          </div>
        </div>
        <div className="row px-5">

            {data.map((item) => (
                  <div class="col-md-3 mt-4">
                        <Article data={item.id}/>
                  </div>
            ))}

        </div>
      </div>
      );
}
export default Articles;