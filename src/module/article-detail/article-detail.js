import { useEffect, useState } from "react";
import { useArticle } from "../../hook/useArticle";
import ArticleDto from "../../dto/request/article-req";

const ArticleDetail = ({ArticleSelected}) => {
    const [data, setData] = useState();
    const { handleGetArticleById } = useArticle();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await handleGetArticleById("?id=" + ArticleSelected);
                const article = ArticleDto.fromArticleUserResponse(result);

                setData(article);
            }catch(err){
                console.error("Error fetching articles:", err);
            }
        }

        fetchData();
    }, []);

    const getMonthDifference = (date1, date2) => {
        const year1 = date1.getFullYear();
        const year2 = date2.getFullYear();
        const month1 = date1.getMonth();
        const month2 = date2.getMonth();
    
        return (year1 - year2) * 12 + (month1 - month2);
    }

    return (
        <div className="article-detail container w-50 m-auto my-5">
            <h2>{data.title}</h2>

            <div className="d-flex my-5">
                <img 
                    src= {data.image === null 
                    ? 'https://th.bing.com/th/id/OIP.vg41yG82qw84ziz5nS-CWQHaHa?rs=1&pid=ImgDetMain' 
                    : data.image}
                    style={{borderRadius: '50%', width: '50px', height: '50px'}} 
                />

                <div className="mx-3">
                    <div className="fw-bold" style={{fontSize: '15px'}}>{data.fullName}</div>
                    <span className="text-secondary">{getMonthDifference(new Date(), data.publishedDate)} tháng trước</span>
                </div>
            </div>

            <div className="content-article">
                {data.content}
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