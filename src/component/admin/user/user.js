import React, { useState } from 'react';
import './user.css';
import Pagination from '../../pagination/pagination';
const data = [
    {
        userInfoId: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        gender: 'Female',
        address: '456 Maple Ave, Othertown, USA',
        phone: '0987654321',
        balance: 2000.00,
        avatar: 'https://i.pinimg.com/736x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg',
        dateOfBirth: '1980-01-01'
    },
    {
        userInfoId: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        gender: 'Female',
        email: 'jane.smith@example.com',
        address: '456 Maple Ave, Othertown, USA',
        phone: '0987654321',
        balance: 2000.00,
        avatar: 'https://i.pinimg.com/736x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg',
        dateOfBirth: '1980-01-01',
    }
];

const User = () => {
    const totalPages = 5;
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRow, setSelectedRow] = useState(null);

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
            <div className='d-flex align-items-center'>
                <label>Tìm kiếm: </label>
                <input style={{width: '50%', padding: '6px 16px', fontSize: '14px'}} className='mx-3 rounded border' type="text" name="search-user" id="search-user" />
            </div>

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
                    {data.map((item) => (
                        <React.Fragment key={item.id} >
                            <tr onClick={() => handleRowClick(item.userInfoId)} className="clickable-row" style={{ fontSize: '14px' }}>
                                <td>{item.userInfoId}</td>
                                <td><img src={item.avatar} alt="hình ảnh" /></td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.dateOfBirth}</td>
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
                                                    <div>{item.phone}</div>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <p style={{ fontSize: '14px' }} className="fw-bold">Địa chỉ: </p>
                                                    <div>{item.address}</div>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-xl-6 p-3" style={{ fontSize: '12px' }}>
                                                <div className='d-flex justify-content-between'>
                                                    <p style={{ fontSize: '14px' }} className="fw-bold">Giới tính: </p>
                                                    <div>{item.gender}</div>
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
                    totalPages={totalPages}
                    onPageChange={onPageChange}
            />
        </div>
    </div>);
}

export default User;