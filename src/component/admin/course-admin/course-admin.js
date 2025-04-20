import React, { useEffect, useState } from 'react';
import './course-admin.css';
import EditCoursePage from '../course-edittion/course-edition';
import Pagination from "../../pagination/pagination";
import { useCourse } from '../../../hook/useCourse';
import CourseHeaderDto from '../../../dto/course-header-dto';
import BaseRequestDto from '../../../dto/base-request-dto';
import CourseRequest from '../../../dto/request/course-request';
import { useCategory } from '../../../hook/useCategory';
import CategoryDto from '../../../dto/category-dto';

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

const CourseAdmin = () => {
    const [selectedRow, setSelectedRow] = useState(null);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(new BaseRequestDto());
    const [currentPage, setCurrentPage] = useState(1);
    const [param, setParam] = useState(new CourseRequest('0', "", "ALL", "ALL"));
    const [categories, setCategories] = useState([]);
    const { handleGetCourse } = useCourse();
    const { handleCategory } = useCategory();


    useEffect(() => {
        const fetchData  = async () => {
            const results = await handleGetCourse(`?page=${currentPage-1}&pageSize=1&${param.toQueryParams()}`);
            const resultCategory = await handleCategory();

            const courses = results.result.map((item) => CourseHeaderDto.fromCourseHeaderResponse(item));
            const categories = resultCategory.map((item) => CategoryDto.fromJson(item))
            const page = BaseRequestDto.fromBaseRequestResponse(results);

            setCategories(categories);
            setData(courses);
            setPage(page);
        }

        fetchData();
    }, [currentPage, param])

    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    const handleEditClick = (selectedRow) => {
        setSelectedRow(selectedRow);
        setEditModalOpen(true); // Mở modal
    };

    const closeModal = () => {
        setEditModalOpen(false); // Đóng modal
    };

    const handleRowClick = (id) => {
        setSelectedRow(selectedRow === id ? null : id);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(value);
    
        setParam((prevData) => {
          return new CourseRequest(
            name === 'categoryId' ? value : prevData.categoryId,
            name === 'courseName' ? value : prevData.courseName,
            name === 'courseStatus' ? value : prevData.courseStatus,
            name === 'level' ? value : prevData.level
          );
        });
      };

    return (
        <div className="course-admin row px-5">
            <div class="app-header d-flex align-items-center">
                <div class="d-flex py-2">
                    <a href="/admin">Home</a>
                    <i class="bi bi-chevron-right fs-5 px-2"></i>
                    <a href="/admin/course">Course</a>
                </div>
            </div>
            <div className="col-sm-12 col-xl-2 px-2">
                <div className="card p-3 my-3">
                    <div className='d-flex justify-content-between'>
                        <p style={{ fontSize: '12px' }} className="fw-bold">Tìm theo tên</p>
                        <span><i class="bi bi-search"></i></span>
                    </div>
                    <input 
                        value={param.courseName}
                        onChange={handleChange}
                        style={{ fontSize: '12px' }} 
                        type="text" 
                        name="courseName"
                        id="courseName" 
                        className="border-0 border-bottom p-1" 
                     />
                </div>

                <div className="card p-3 my-3">
                    <p style={{ fontSize: '12px' }} className="fw-bold">Tìm theo thể loại:</p>
                    <select style={{ fontSize: '12px' }} name="categoryId" id="categoryId" className="fw-normal rounded px-2" onChange={handleChange}>
                        <option className='px-2' style={{ fontSize: '12px' }}    value="0"  selected>Tất cả</option>
                        {categories.map((item) => (<option className='px-2' style={{ fontSize: '12px' }}  key={item.id} value={item.id}>{item.categoryName}</option>))}
                    </select>
                </div>

                <div className="card p-3 my-3">
                    <p style={{ fontSize: '12px' }} className="fw-bold">Trạng thái:</p>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="ALL" name="courseStatus" onChange={handleChange} checked={param.courseStatus === 'ALL'}/>
                        <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: '12px' }}>
                            Tất cả
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="COM" name="courseStatus"   onChange={handleChange} checked={param.courseStatus === 'COM'}/>
                        <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: '12px' }}>
                            Đã hoàn thành
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="UNC" name="courseStatus"   onChange={handleChange} checked={param.courseStatus === 'UNC'}/>
                        <label class="form-check-label" for="flexCheckChecked" style={{ fontSize: '12px' }}>
                            Chưa hoàn thành
                        </label>
                    </div>
                </div>

                <div className="card p-3 my-3" style={{ fontSize: '12px' }}>
                    <p className="fw-bold">Trình độ:</p>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="ALL" id="flexCheckDefault" name="level"  onChange={handleChange} checked={param.level === 'ALL'}/>
                        <label class="form-check-label" for="flexCheckDefault">
                            All Level
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="BEGINNER" id="flexCheckChecked" name="level" onChange={handleChange} checked={param.level === 'BEGINNER'}/>
                        <label class="form-check-label" for="flexCheckChecked">
                            Beginner
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="INTERMEDIATE" id="flexCheckChecked" name="level"  onChange={handleChange} checked={param.level === 'INTERMEDIATE'}/>
                        <label class="form-check-label" for="flexCheckChecked">
                            Intermediate
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="EXPERT" id="flexCheckChecked" name="level"  onChange={handleChange} checked={param.level === 'EXPERT'}/>
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
                        {data.map((item, index) => (
                            <React.Fragment key={item.id} >
                                <tr onClick={() => handleRowClick(item.id)} className="clickable-row" style={{ fontSize: '14px' }}>
                                    <td>{index + 1}</td>
                                    <td><img src={item.avatar} alt="hình ảnh" /></td>
                                    <td>{item.courseName}</td>
                                    <td>{item.priceEntered}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                                {selectedRow === item.id && (
                                    <tr>
                                        <td colSpan="5">
                                            <div className='row px-4'>
                                                <div style={{ fontSize: '12px' }} className="col-sm-12 col-xl-6 p-3">
                                                    <div className='d-flex justify-content-between'>
                                                        <p style={{ fontSize: '14px' }} className="fw-bold">Người hướng dẫn: </p>
                                                        <div>{item.fullName}</div>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <p style={{ fontSize: '14px' }} className="fw-bold">Trạng thái: </p>
                                                        <div>{item.courseStatus}</div>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <p style={{ fontSize: '14px' }} className="fw-bold">Chứng chỉ: </p>
                                                        <div>{item.certificate.certificateName}</div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12 col-xl-6 p-3" style={{ fontSize: '12px' }}>
                                                    <div className='d-flex justify-content-between'>
                                                        <p style={{ fontSize: '14px' }} className="fw-bold">Mã giảm giá: </p>
                                                        <div>{item?.discount?.discountCode || "Không có"}</div>
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
                                                <button onClick={() => handleEditClick(item)} type="button" className='btn btn-primary mx-2'>Chỉnh sửa</button>
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

                {isEditModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <button className="close-btn btn btn-outline-danger" onClick={closeModal}>×</button>
                            <EditCoursePage courseSelected={selectedRow} />
                        </div>
                    </div>
                )}
            </div>
        </div>)
}

export default CourseAdmin;