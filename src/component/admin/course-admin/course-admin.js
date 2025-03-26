import React, { useState } from 'react';
import './course-admin.css';
const category = [
    {
        id: 1,
        category_name: "Cấu trúc dữ liệu và giải thuật"
    },
    {
        id: 2,
        category_name: "Lập trình căn bản"
    },
    {
        id: 3,
        category_name: "Font-end(FE)"
    },
    {
        id: 4,
        category_name: "Back-end(BE)"
    }
]

const data = [
    {
        "id": 1,
        "avatar": "https://th.bing.com/th/id/OIP.hn8_Yb7--UaVl6bfh9Wc-AHaDh?rs=1&pid=ImgDetMain",
        "name": "ReactJS for Beginners",
        "price": 80,
        "quantity": 25,
        "instructorName": "John Doe",
        "status": "Đã hoàn thành",
        "certificateName": "ReactJS Beginner Certificate",
        "discountCode": "REACT10",
        "level": "Người mới",
        "courseDuration": 300
    },
    {
        "id": 2,
        "avatar": "https://th.bing.com/th/id/OIP.lwp_9tyZoywvzRmE5HPVKgHaEC?w=626&h=342&rs=1&pid=ImgDetMain",
        "name": "Advanced Node.js",
        "price": 120,
        "quantity": 30,
        "instructorName": "Jane Smith",
        "status": "Chưa hoàn thành",
        "certificateName": "Node.js Pro Certificate",
        "discountCode": "NODE20",
        "level": "Chuyên gia",
        "courseDuration": 400
    }
]


const CourseAdmin = () => {
    const [selectedRow, setSelectedRow] = useState(null);

    const handleRowClick = (id) => {
        setSelectedRow(selectedRow === id ? null : id);
    };

    return (
        <div className="course-admin row px-5">
            <div class="app-header d-flex align-items-center">
                <div class="d-flex py-2">
                    <a href="">Home</a>
                    <i class="bi bi-chevron-right fs-5 px-2"></i>
                    <a href="">Course</a>
                </div>
            </div>
            <div className="col-sm-12 col-xl-2 px-2">
                <div className="card p-3 my-3">
                    <div className='d-flex justify-content-between'>
                        <p style={{ fontSize: '12px' }} className="fw-bold">Tìm theo tên</p>
                        <span><i class="bi bi-search"></i></span>
                    </div>
                    <input style={{ fontSize: '12px' }} type="text" name="name-course" id="name-course" className="border-0 border-bottom p-1" />
                </div>

                <div className="card p-3 my-3">
                    <p style={{ fontSize: '12px' }} className="fw-bold">Tìm theo thể loại:</p>
                    <select id="category" name="category" style={{ fontSize: '12px' }} className="fw-normal rounded px-2">
                        {category.map((item) => (<option className='px-2' style={{ fontSize: '12px' }} key={item.id} value={item.id}>{item.category_name}</option>))}
                    </select>
                </div>

                <div className="card p-3 my-3">
                    <p style={{ fontSize: '12px' }} className="fw-bold">Trạng thái:</p>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="ALL" name="flexRadioStat" />
                        <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: '12px' }}>
                            Tất cả
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="COM" name="flexRadioStat" />
                        <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: '12px' }}>
                            Đã hoàn thành
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="UNC" name="flexRadioStat" />
                        <label class="form-check-label" for="flexCheckChecked" style={{ fontSize: '12px' }}>
                            Chưa hoàn thành
                        </label>
                    </div>
                </div>

                <div className="card p-3 my-3" style={{ fontSize: '12px' }}>
                    <p className="fw-bold">Trình độ:</p>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            All Level
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Beginner
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Intermediate
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Expert
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-xl-10 py-3">
                <div className='btn float-right add-course'> Thêm khóa học</div>

                <table className="table table-hover table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Avater</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Số lượng bài</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <React.Fragment key={item.id} >
                                <tr onClick={() => handleRowClick(item.id)} className="clickable-row" style={{ fontSize: '14px' }}>
                                    <td>{item.id}</td>
                                    <td><img src={item.avatar} alt="hình ảnh" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                                {selectedRow === item.id && (
                                    <tr>
                                        <td colSpan="5">
                                            <div className='row px-4'>
                                                <div style={{ fontSize: '12px' }} className="col-sm-12 col-xl-6 p-3">
                                                    <div className='d-flex justify-content-between'>
                                                        <p style={{ fontSize: '14px' }} className="fw-bold">Người hướng dẫn: </p>
                                                        <div>{item.instructorName}</div>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <p style={{ fontSize: '14px' }} className="fw-bold">Trạng thái: </p>
                                                        <div>{item.status}</div>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <p style={{ fontSize: '14px' }} className="fw-bold">Chứng chỉ: </p>
                                                        <div>{item.certificateName}</div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12 col-xl-6 p-3" style={{ fontSize: '12px' }}>
                                                    <div className='d-flex justify-content-between'>
                                                        <p style={{ fontSize: '14px' }} className="fw-bold">Mã giảm giá: </p>
                                                        <div>{item.discountCode}</div>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <p style={{ fontSize: '14px' }} className="fw-bold">Trình độ: </p>
                                                        <div>{item.level}</div>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <p style={{ fontSize: '14px' }} className="fw-bold">Thời gian học: </p>
                                                        <div>{item.courseDuration} (phút)</div>
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
            </div>
        </div>)
}

export default CourseAdmin;