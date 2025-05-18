// import React, { useState, useEffect } from "react";
// import { useCourse } from "../../../hook/useCourse";
// // import axios from "axios";


// const EditCoursePage = ({courseSelected}) => {
//   const [course, setCourse] = useState(courseSelected);
//   const [message, setMessage] = useState("");
//   const { handleGetDetailCourse } = useCourse();

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await handleGetDetailCourse();
//     }
//   }, []);


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCourse({ ...course, [name]: value });
//   };

//   const handleSubmit = (e) => {

//   };

//   return (
//     <div className="container mt-5">
//       <div className="card">
//         <div className="">
//           <h2 className="text-center text-muted">Chỉnh sửa khóa học</h2>
//         </div>
//         <div className="card-body">
//           {message && (
//             <div className="alert alert-success" role="alert">
//               {message}
//             </div>
//           )}
//           <form >
//             {/* Course Name & Description */}
//             <div className="mb-3">
//               <label className="form-label fw-bold">Tên khóa học</label>
//               <input
//                 type="text"
//                 name="course_name"
//                 value={course.name || ""}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Nhập tên khóa học"
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label fw-bold">Mô tả</label>
//               <textarea
//                 name="description"
//                 value={""}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Nhập mô tả khóa học"
//                 rows="4"
//               ></textarea>
//             </div>

//             {/* Avatar & Trailer */}
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Avatar</label>
//                 <input
//                   type="text"
//                   name="avatar"
//                   value={course.avatar || ""}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Link hình ảnh đại diện"
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Trailer</label>
//                 <input
//                   type="text"
//                   name="trailer"
//                   value={""}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Link video trailer"
//                 />
//               </div>
//             </div>

//             {/* Prices */}
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Giá gốc</label>
//                 <input
//                   type="number"
//                   name="price_entered"
//                   value={course.price || 0}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Nhập giá gốc"
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Giá sau giảm</label>
//                 <input
//                   type="number"
//                   name="price_after_reduce"
//                   value={ 0}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Nhập giá sau giảm"
//                 />
//               </div>
//             </div>

//             {/* Duration, Quantity & Discount */}
//             <div className="row">
//               <div className="col-md-4 mb-3">
//                 <label className="form-label fw-bold">
//                   Thời lượng (phút)
//                 </label>
//                 <input
//                   type="number"
//                   name="course_duration"
//                   value={course.courseDuration || 0}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Nhập thời lượng"
//                 />
//               </div>
//               <div className="col-md-4 mb-3">
//                 <label className="form-label fw-bold">Số lượng bài học</label>
//                 <input
//                   type="number"
//                   name="quatity"
//                   value={course.quantity || 0}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Nhập số lượng bài học"
//                 />
//               </div>
//               <div className="col-md-4 mb-3">
//                 <label className="form-label fw-bold">Discount Id</label>
//                 <input
//                   type="number"
//                   name="discount_id"
//                   value={course.discountCode || ""}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Nhập Discount Id (nếu có)"
//                 />
//               </div>
//             </div>

//             {/* Active, Certificate, Level */}
//             <div className="row">
//               <div className="col-md-4 mb-3">
//                 <label className="form-label fw-bold">Trạng thái</label>
//                 <select
//                   name="is_active"
//                   value={""}
//                   onChange={handleChange}
//                   className="form-select"
//                 >
//                   <option value="Y">Hoạt động</option>
//                   <option value="N">Không hoạt động</option>
//                 </select>
//               </div>
//               <div className="col-md-4 mb-3">
//                 <label className="form-label fw-bold">Certificate Id</label>
//                 <input
//                   type="number"
//                   name="certificate_id"
//                   value={course.certificateName || ""}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Nhập Certificate Id (nếu có)"
//                 />
//               </div>
//               <div className="col-md-4 mb-3">
//                 <label className="form-label fw-bold">Level</label>
//                 <input
//                   type="text"
//                   name="level"
//                   value={course.level || ""}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Ví dụ: begin, pro"
//                 />
//               </div>
//             </div>

//             {/* Created & Updated */}
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Ngày tạo</label>
//                 <input
//                   type="date"
//                   name="created_at"
//                   value={""}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Ngày cập nhật</label>
//                 <input
//                   type="date"
//                   name="updated_at"
//                   value={""}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//             </div>

//             <div className="d-flex justify-content-end mt-4">
//               <button onClick={handleSubmit} type="submit" className="btn btn-outline-primary px-4">
//                 Lưu thay đổi
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditCoursePage;

import { useState } from "react";
import CourseInfoTab from "../coure-info/course-info";
import CourseLessonTab from "../course-lesson/course-lesson";
import AddWritingTestForm from "../course-quiz/course-quiz";
import CourseDoc from "../course-doc/course-doc";
import DocumentTab from "../document/document";

const sampleCourseData = {
  name: "Khóa học ReactJS từ cơ bản đến nâng cao",
  description: "Khóa học này giúp bạn học ReactJS từng bước, có ví dụ thực tế và bài tập.",
  avatar: "https://example.com/images/react-course-avatar.jpg",
  trailer: "https://youtube.com/trailer-react-course",
  price: 1500000,          // Giá gốc
  price_after_reduce: 1200000, // Giá sau giảm
  courseDuration: 480,     // Thời lượng (phút)
  quantity: 30,            // Số lượng bài học
  discount_id: 101,        // Discount Id
  is_active: "Y",          // Trạng thái hoạt động
  certificate_id: 5,       // Certificate Id
  level: "beginner",       // Level
  created_at: "2025-05-01",// Ngày tạo (định dạng ISO yyyy-mm-dd)
  updated_at: "2025-05-15", // Ngày cập nhật
  lessons: [
    {
      id: 1,
      lessonName: "Introduction to React",
      lessonTime: 300, // 5 minutes
    },
    {
      id: 2,
      lessonName: "JSX and Components",
      lessonTime: 750, // 12 minutes 30 seconds
    },
    {
      id: 3,
      lessonName: "State and Props",
      lessonTime: 1800, // 30 minutes
    },
    {
      id: 4,
      lessonName: "React Hooks Overview",
      lessonTime: 2400, // 40 minutes
    },
  ],
  documents: [
    {
      id: 1,
      documentName: "Lập trình tin học"
    },
    {
      id: 2,
      documentName: "Lập trình nâng cao"
    }
  ],
  quizs: [
    {
      id: 1,
      title: "Bài kiểm tra 1"
    }  ,
    {
      id: 2,
      title: "Bài kiểm tra 2"
    }  
  ]
};


const EditCoursePage = () => {
  const [activeTab, setActiveTab] = useState(0); // 0,1,2,3 tương ứng 4 tab
  const [course, setCourse] = useState(sampleCourseData);

  return (
    <div className="col-lg-12">
      <ul className="nav nav-tabs border-bottom">
        <li className="nav-item" onClick={() => setActiveTab(0)}>
          <a
            style={{ fontWeight: "600" }}
            className={`nav-link ${activeTab === 0 ? "active" : ""}`}
            href="#"
          >
            <i className="bi bi-book-fill px-2"></i>Mô tả khóa học
          </a>
        </li>
        <li className="nav-item" onClick={() => setActiveTab(1)}>
          <a
            style={{ fontWeight: "600" }}
            className={`nav-link ${activeTab === 1 ? "active" : ""}`}
            href="#"
          >
            <i className="bi bi-file-earmark-text px-2"></i>Các bài học
          </a>
        </li>
        <li className="nav-item" onClick={() => setActiveTab(2)}>
          <a
            style={{ fontWeight: "600" }}
            className={`nav-link ${activeTab === 2 ? "active" : ""}`}
            href="#"
          >
            <i className="bi bi-people-fill px-2"></i>Kiểm tra
          </a>
        </li>
        <li className="nav-item" onClick={() => setActiveTab(3)}>
          <a
            style={{ fontWeight: "600" }}
            className={`nav-link ${activeTab === 3 ? "active" : ""}`}
            href="#"
          >
            <i className="bi bi-gear-fill px-2"></i>Tài liệu
          </a>
        </li>
      </ul>

      <div className="row px-5 py-5">
        {
          activeTab === 0 &&
          <div>
            <CourseInfoTab courses={course}/>
          </div>
        }
        {activeTab === 1 && 
          <div>
            <CourseLessonTab lessons={course.lessons} />
          </div>
        }
        {activeTab === 2 && 
          <div>
              <AddWritingTestForm courses={course}/>
          </div>
        }
        {activeTab === 3 && 
          <div>
              <DocumentTab courses={course}/>
          </div>
        }
      </div>
    </div>
  );
};

export default EditCoursePage;