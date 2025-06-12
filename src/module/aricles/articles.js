import { useEffect, useState } from 'react';
import { useArticle } from '../../hook/useArticle';

import { useNavigate } from 'react-router-dom';
import ArticleDto from '../../dto/article-dto';
import Article2 from '../../component/article/article2';
import BaseRequestDto from '../../dto/base-request-dto';
import Pagination from '../../component/pagination/pagination';

const Articles = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(new BaseRequestDto());
  const [currentPage, setCurrentPage] = useState(1);
  const { handleGetAllArticle } = useArticle();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await handleGetAllArticle(`?page=${currentPage - 1}&pageSize=6`);
        const articles = result.result.map((item) => ArticleDto.fromArticleResponse(item))
        const page = BaseRequestDto.fromBaseRequestResponse(result);

        setData(articles);
        setPage(page)
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    }

    fetchData();
  }, [currentPage]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  }

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
       <Pagination
          currentPage={currentPage}
          totalPages={page.totalPage}
          onPageChange={onPageChange}
        />
    </div>
  </div>
  );
}
export default Articles;