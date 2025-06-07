import React, { useEffect, useState } from 'react';
import './article-admin.css';
import BaseRequestDto from '../../../dto/base-request-dto';
import ArticleRequest from '../../../dto/request/article-req';
import { useArticle } from '../../../hook/useArticle';
import ArticleDto from '../../../dto/article-dto';
import Pagination from '../../pagination/pagination';
import ActionMenu from '../../action-menu/action-menu';
import { CODE, STATUS } from '../../../constant/code';

const authors = [
    {
        id: 1,
        name: "John Đặng"
    },
    {
        id: 2,
        name: "Tuấn Vũ Đặng"
    }
]

const ArticleAdmin = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(new BaseRequestDto());
    const [currentPage, setCurrentPage] = useState(1);
    const [param, setParam] = useState(new ArticleRequest("", [], "ALL"));
    const { handleGetAllArticle } = useArticle();
    const { handleUpdateArticle } = useArticle();

    useEffect(() => {
        const fetchData = async () => {
            const results = await handleGetAllArticle(`?page=${currentPage - 1}&pageSize=4&${param.toQueryParams()}`);

            const articles = results.result.map((item) => ArticleDto.fromArticleUserResponse(item));
            const page = BaseRequestDto.fromBaseRequestResponse(results);

            setData(articles);
            setPage(page);
        }

        fetchData();
    }, [currentPage, param]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(value);

        setParam((prevData) => {
            return new ArticleRequest(
                name === 'title' ? value : prevData.title,
                name === 'fullNames' ? value : prevData.fullNames,
                name === 'status' ? value : prevData.status,
            );
        });
    };

    const formatDate = (publishedDate) => {
        const date = new Date(publishedDate);

        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
        const year = date.getUTCFullYear();

        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }

    const approveArticle = async (id) => {
        console.log(id);

        const formData = new FormData();
        formData.append('id', id)
        formData.append('status', STATUS.APPROVE);

        await handleUpdateArticle(formData);
    }

    const rejectArticle = async (id) => {
        console.log(id);
        
        const formData = new FormData();
        formData.append('id', id)
        formData.append('status', STATUS.REJECT);

        await handleUpdateArticle(formData);
    }

    return (
        <div className="article-admin row px-5">
            <div class="app-header d-flex align-items-center">
                <div class="d-flex py-2">
                    <a href="">Home</a>
                    <i class="bi bi-chevron-right fs-5 px-2"></i>
                    <a href="">Article</a>
                </div>
            </div>
            <div className="col-sm-12 col-xl-2 px-2">
                <div className="card p-3 my-3">
                    <div className='d-flex justify-content-between'>
                        <p style={{ fontSize: '12px' }} className="fw-bold">Tìm theo tên</p>
                        <span><i class="bi bi-search"></i></span>
                    </div>
                    <input style={{ fontSize: '12px' }} type="text" name="title" id="title" onChange={handleChange} className="border-0 border-bottom p-1" />
                </div>

                <div className="card p-3 my-3" style={{ fontSize: '12px' }}>
                    <p className="fw-bold">Tác giả:</p>

                    {authors.map((item) => (
                        <div class="form-check" key={item.id}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                {item.name}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="card p-3 my-3">
                    <p style={{ fontSize: '12px' }} className="fw-bold">Trạng thái:</p>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="ALL" name="status" onChange={handleChange} checked={param.status === 'ALL'} />
                        <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: '12px' }}>
                            Tất cả
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="PENDING" name="status" onChange={handleChange} checked={param.status === 'PENDING'} />
                        <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: '12px' }}>
                            Đang chờ xử lý
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="APPROVE" name="status" onChange={handleChange} checked={param.status === 'APPROVE'} />
                        <label class="form-check-label" for="flexCheckChecked" style={{ fontSize: '12px' }}>
                            Phê duyệt
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="REJECT" name="status" onChange={handleChange} checked={param.status === 'REJECT'} />
                        <label class="form-check-label" for="flexCheckChecked" style={{ fontSize: '12px' }}>
                            Từ chối
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-xl-10 py-3">
                <table className="table table-hover table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th className='text-center' scope="col">#</th>
                            <th className='text-center' scope="col">Image</th>
                            <th className='text-center' scope="col">Name</th>
                            <th className='text-center' scope="col">Publish Date</th>
                            <th className='text-center' scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {data.map((item, index) => (
                            <React.Fragment key={item.id} >
                                <tr>
                                    <td>{index}</td>
                                    <td><img src={item.image} alt="hình ảnh" /></td>
                                    <td>{item.title}</td>
                                    <td>{formatDate(item.publishedDate)}</td>
                                    {item.status == STATUS.PENDING ? <td >
                                        {/* <div >
                                            <button type="button" className='mx-2 border-0'><i class="bi bi-three-dots-vertical"></i></button>
                                        </div> */}
                                        <ActionMenu
                                            itemId={item.id}
                                            onAccept={approveArticle}
                                            onReject={rejectArticle}
                                        />
                                    </td> : <td> <i class="btn btn-danger bi bi-slash-circle me-1"></i></td>}
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>

                <Pagination
                    currentPage={currentPage}
                    totalPages={page.totalPage}
                    onPageChange={onPageChange}
                />
            </div>
        </div>);
}

export default ArticleAdmin