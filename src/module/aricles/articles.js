import { useEffect, useState } from 'react';
import { useArticle } from '../../hook/useArticle';

import { useNavigate } from 'react-router-dom';
import ArticleDto from '../../dto/article-dto';
import Article2 from '../../component/article/article2';

const Articles = () => {
  const [data, setData] = useState([]);
  const { handleGetAllArticle } = useArticle();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await handleGetAllArticle("");
        const articles = result.result.map((item) => ArticleDto.fromArticleResponse(item))

        setData(articles);
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    }

    fetchData();
  }, []);

  const handleClickArticle = (id) => {
    navigate(`/article-detail/${id}`);
  }

  return (<div className="p-5">
    <div class="row">
      <div class="col">
        <div class="display-4 fs-4 fw-bold">Bài viết nổi bật</div>
      </div>
    </div>
    <div className="row px-5">
      {data.map((item) => (
        <div class="col-md-6 mt-4" onClick={() => handleClickArticle(item.id)}>
          <Article2 data={item} />
        </div>
      ))}

    </div>
  </div>
  );
}
export default Articles;