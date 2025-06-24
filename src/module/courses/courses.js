import React, { useEffect, useState } from 'react';
import './courses.css'; // Make sure to create and import a CSS file for the styles
import Course from '../../component/course/course';
import { useCourse } from '../../hook/useCourse';
import CourseHeaderDto from '../../dto/course-header-dto';
import { useNavigate } from 'react-router-dom';
import BaseRequestDto from '../../dto/base-request-dto';
import Pagination from '../../component/pagination/pagination';
import { STATUS } from '../../constant/code';
import { useSearchParams } from "react-router-dom";


const Courses = () => {
  const [searchParams] = useSearchParams();
  const { handleGetCourse } = useCourse();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(new BaseRequestDto());
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const keyword = searchParams.get("name"); // lấy giá trị của ?keyword=...
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("data");
        let s = "";
        if(keyword !== null){
           s =  `?page=${currentPage - 1}&pageSize=6&courseName=${keyword}`;
        }else{
           s =  `?page=${currentPage - 1}&pageSize=6`
        }

        const result = await handleGetCourse(s);
       
        const courses = result.result.map((item) => CourseHeaderDto.fromCourseHeaderResponse(item));
        const page = BaseRequestDto.fromBaseRequestResponse(result);

        setData(courses);
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

  const handleClickCourse = (id) => {
    navigate(`/course-des/${id}`);
  }

  return (
    <section className="courses wrapper border">
      {/* <div className="container w-100 text-center mt-1">
         <img height="400px" className='w-100 rounded' src="https://www.motionworship.com/wp-content/uploads/ColorFlowWelcomeHD-768x432.jpg" alt="" />
      </div> */}

      <div className="container px-5">
        <div class="row py-5">
          <div class="col">
            <h1 class="display-4 font-weight-bolder fs-4 fw-bold">Khóa học nổi bật</h1>
          </div>
        </div>
        <div className="row px-5">
          {data.map((item) => (
            <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center" onClick={() => handleClickCourse(item.id)}>
              <Course data={item} />
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={page.totalPage}
          onPageChange={onPageChange}
        />
      </div>

    </section>
  );
};

export default Courses;
