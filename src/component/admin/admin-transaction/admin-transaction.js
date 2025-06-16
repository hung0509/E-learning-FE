import React, { useEffect, useState } from 'react';
import EditCoursePage from '../course-edittion/course-edition';
import Pagination from "../../pagination/pagination";
import { useCourse } from '../../../hook/useCourse';
// import CourseHeaderDto from '../../../dto/course-header-dto';
import BaseRequestDto from '../../../dto/base-request-dto';
import { useTransaction } from '../../../hook/useTransaction';
import TransactionRequest from '../../../dto/request/transaction-req';


const TransactionAdmin = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(new BaseRequestDto());
    const [currentPage, setCurrentPage] = useState(1);
    const [param, setParam] = useState(new TransactionRequest(null, null, "ALL"));
    const { handleGetAll } = useTransaction();


    useEffect(() => {
        const fetchData = async () => {
            const results = await handleGetAll(`?page=${currentPage - 1}&pageSize=8&${param.toQueryParams()}`);

            const page = BaseRequestDto.fromBaseRequestResponse(results);

            setData(results.result);
            setPage(page);
        }

        fetchData();
    }, [currentPage, param])


    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setParam((prevData) => {
            return new TransactionRequest(
                null, null,
                name === 'statusPayment' ? value : prevData.statusPayment,
            );
        });
    };

    return (
        <div className="course-admin row px-5">
            <div class="app-header d-flex align-items-center">
                <div class="d-flex py-2">
                    <a href="/admin">Bảng điều khiển</a>
                    <i class="bi bi-chevron-right fs-5 px-2"></i>
                    <a href="/admin/course">Lịch sử giao dịch</a>
                </div>
            </div>
            <div className="col-sm-12 col-xl-2 px-2">
                <div className="card p-3 my-3">
                    <p style={{ fontSize: '12px' }} className="fw-bold">Trạng thái:</p>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="ALL" name="statusPayment" onChange={e => handleChange(e)} checked={param.statusPayment === 'ALL'} />
                        <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: '12px' }}>
                            Tất cả
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="COM" name="statusPayment" onChange={e => handleChange(e)} checked={param.statusPayment === 'COM'} />
                        <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: '12px' }}>
                            Thành công
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="UNC" name="statusPayment" onChange={e => handleChange(e)} checked={param.statusPayment === 'UNC'} />
                        <label class="form-check-label" for="flexCheckChecked" style={{ fontSize: '12px' }}>
                            Thất bại
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-xl-10 py-3">
                <table className="table table-hover table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Mã thanh toán</th>
                            <th scope="col">Người dùng</th>
                            <th scope="col">Khóa học</th>
                            <th scope="col">Số tiền</th>
                            <th scope="col">Ngày thanh toán</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Phương thức</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <React.Fragment key={item.id} >
                                <tr className="clickable-row" style={{ fontSize: '14px' }}>
                                    <td>{index + 1}</td>
                                    <td>{item.paymentId}</td>
                                    <td>{item.fullName}</td>
                                    <td>{item.courseName}</td>
                                    <td>{item.balance}</td>
                                    <td>
                                        {new Date(item.paymentDate).toLocaleDateString('vi-VN', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </td>
                                    <td className={item.statusPayment  === 'COM' ? 'text-success' : 'text-danger'}>{item.statusPayment === 'COM' ? "Thành công" : "Thật bại"}</td>
                                    <td>{item.paymentMethod}</td>
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
        </div>)
}

export default TransactionAdmin;