import React, { useEffect, useState } from 'react';
import './user.css';
import Pagination from '../../pagination/pagination';
import BaseRequestDto from '../../../dto/base-request-dto';
import { useUserInfo } from '../../../hook/useUserInfo';
import UserInfoDto from '../../../dto/user-info-dto';

const User = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(new BaseRequestDto());
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRow, setSelectedRow] = useState(null);
    const { handleGetAll } = useUserInfo();

    useEffect(() => {
        const fetchData = async () => {
            const results = await handleGetAll(`?page=${currentPage - 1}&pageSize=1`);

            const users = results.result.map((item) => UserInfoDto.fromUserInfoResponse(item));
            const page = BaseRequestDto.fromBaseRequestResponse(results);

            setData(users);
            setPage(page);
        }

        fetchData();
    }, [currentPage])

    const handleRowClick = (id) => {
        setSelectedRow(selectedRow === id ? null : id);
    };

    const onPageChange = (page) => {
        setCurrentPage(page);
    }


    return (<div className='user-admin'>
        <div class="app-header d-flex align-items-center px-5">
            <div class="d-flex py-2">
                <a href="">Home</a>
                <i class="bi bi-chevron-right fs-5 px-2"></i>
                <a href="">User</a>
            </div>
        </div>
        <div className="col-sm-12 col-xl-10 py-3 mx-5">
            {/* <div className='d-flex align-items-center'>
                <label>Tìm kiếm: </label>
                <input style={{width: '50%', padding: '6px 16px', fontSize: '14px'}} className='mx-3 rounded border' type="text" name="search-user" id="search-user" />
            </div> */}

            <table className="table table-hover table-bordered my-3">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Avater</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <React.Fragment key={item.id} >
                            <tr onClick={() => handleRowClick(item.userInfoId)} className="clickable-row" style={{ fontSize: '14px' }}>
                                <td>{index}</td>
                                <td><img src={item.avatar || "https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg"} alt="hình ảnh" /></td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{new Date(item.dateOfBirth).toLocaleDateString('vi-VN', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}</td>
                            </tr>
                            {selectedRow === item.userInfoId && (
                                <tr>
                                    <td colSpan="5">
                                        <div className='row px-4'>
                                            <div style={{ fontSize: '12px' }} className="col-sm-12 col-xl-6 p-3">
                                                <div className='d-flex justify-content-between'>
                                                    <p style={{ fontSize: '14px' }} className="fw-bold">Email: </p>
                                                    <div>{item.email}</div>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <p style={{ fontSize: '14px' }} className="fw-bold">Số điện thoại: </p>
                                                    <div>{item.phone || "Chưa có thông tin"}</div>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <p style={{ fontSize: '14px' }} className="fw-bold">Địa chỉ: </p>
                                                    <div>{item.address || "Chưa có thông tin"}</div>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-xl-6 p-3" style={{ fontSize: '12px' }}>
                                                <div className='d-flex justify-content-between'>
                                                    <p style={{ fontSize: '14px' }} className="fw-bold">Giới tính: </p>
                                                    <div>{item.gender || "Chưa có thông tin"}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mx-4' style={{ float: 'inline-end' }}>
                                            <button type="button" className='btn btn-primary mx-2'>Chỉnh sửa</button>
                                            <button type="button" className='btn btn-danger mx-2'>Xóa</button>
                                        </div>
                                    </td>
                                </tr>
                            )}
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

export default User;