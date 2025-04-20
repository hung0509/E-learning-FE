import { useEffect, useState } from "react";
import { useArticle } from "../../hook/useArticle";

import { useParams } from "react-router-dom";
import dayjs from 'dayjs';
import "./article-detail.css";
import ArticleDto from "../../dto/article-dto";

const ArticleDetail = () => {
    const { articleId } = useParams();
    const [data, setData] = useState(new ArticleDto());
    const { handleGetArticleById } = useArticle();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await handleGetArticleById("?id=" + articleId);
                const article = ArticleDto.fromArticleUserResponse(result[0]);

                setData(article);
            }catch(err){
                console.error("Error fetching articles:", err);
            }
        }

        fetchData();  
    }, []);

    const compareDates = (fromDateStr, toDateStr) => {
        const fromDate = dayjs(fromDateStr);
        const toDate = dayjs(toDateStr);
      
        // Đảo ngược nếu fromDate > toDate
        let start = fromDate;
        let end = toDate;
        if (fromDate.isAfter(toDate)) {
          start = toDate;
          end = fromDate;
        }
      
        let years = end.diff(start, 'year');
        start = start.add(years, 'year');
      
        let months = end.diff(start, 'month');
        start = start.add(months, 'month');
      
        let days = end.diff(start, 'day');
      
        let result = [];
      
        if (years > 0) result.push(`${years} năm`);
        if (months > 0) result.push(`${months} tháng`);
        if (days > 0) result.push(`${days} ngày`);
      
        if (result.length === 0) return '0 ngày trước';
      
        return result.join(' ');
      }
    

    return (
        <div className="article-detail container w-50 m-auto my-5">
            <h2>{data.title}</h2>

            <div className="d-flex my-5">
                <img 
                    src= {data.avatar === null 
                    ? 'https://th.bing.com/th/id/OIP.vg41yG82qw84ziz5nS-CWQHaHa?rs=1&pid=ImgDetMain' 
                    : data.image}
                    style={{borderRadius: '50%', width: '50px', height: '50px'}} 
                />

                <div className="mx-3">
                    <div className="fw-bold" style={{fontSize: '15px'}}>{data.fullName}</div>
                    <span className="text-secondary">{compareDates(new Date(), data.publishedDate)}</span>
                </div>
            </div>

            <div className="content-article w-100">
                <div className="article-content" dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </div>

            {/* <div>   
                <h5 className="my-4">Bài đăng cùng tác giả</h5>
                <ul>
                    <li className="my-3"><a className="text-decoration-none text-dark" href="#">Mình đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày</a></li>
                    <li className="my-3"><a className="text-decoration-none text-dark" href="#">Mình đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày</a></li>
                    <li className="my-3"><a className="text-decoration-none text-dark" href="#">Mình đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày</a></li>
                </ul>
            </div> */}
        </div>
    );
}

export default ArticleDetail;