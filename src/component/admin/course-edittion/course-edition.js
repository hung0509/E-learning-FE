import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";

const EditCoursePage = ({courseSelected}) => {
  const [course, setCourse] = useState(courseSelected);
  const [message, setMessage] = useState("");

  // Tải thông tin khóa học từ API khi component mount
//   useEffect(() => {
//     axios
//       .get(`/api/courses/${courseId}`)
//       .then((response) => {
//         setCourse(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching course data:", error);
//         setLoading(false);
//       });
//   }, [courseId]);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // axios
    //   .put(`/api/courses/${courseId}`, course)
    //   .then((response) => {
    //     setMessage("Cập nhật khóa học thành công!");
    //   })
    //   .catch((error) => {
    //     console.error("Error updating course:", error);
    //   });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="">
          <h2 className="text-center text-muted">Chỉnh sửa khóa học</h2>
        </div>
        <div className="card-body">
          {message && (
            <div className="alert alert-success" role="alert">
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            {/* Course Name & Description */}
            <div className="mb-3">
              <label className="form-label fw-bold">Tên khóa học</label>
              <input
                type="text"
                name="course_name"
                value={course.name || ""}
                onChange={handleChange}
                className="form-control"
                placeholder="Nhập tên khóa học"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Mô tả</label>
              <textarea
                name="description"
                value={""}
                onChange={handleChange}
                className="form-control"
                placeholder="Nhập mô tả khóa học"
                rows="4"
              ></textarea>
            </div>

            {/* Avatar & Trailer */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Avatar</label>
                <input
                  type="text"
                  name="avatar"
                  value={course.avatar || ""}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Link hình ảnh đại diện"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Trailer</label>
                <input
                  type="text"
                  name="trailer"
                  value={""}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Link video trailer"
                />
              </div>
            </div>

            {/* Prices */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Giá gốc</label>
                <input
                  type="number"
                  name="price_entered"
                  value={course.price || 0}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Nhập giá gốc"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Giá sau giảm</label>
                <input
                  type="number"
                  name="price_after_reduce"
                  value={ 0}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Nhập giá sau giảm"
                />
              </div>
            </div>

            {/* Duration, Quantity & Discount */}
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label fw-bold">
                  Thời lượng (phút)
                </label>
                <input
                  type="number"
                  name="course_duration"
                  value={course.courseDuration || 0}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Nhập thời lượng"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label fw-bold">Số lượng bài học</label>
                <input
                  type="number"
                  name="quatity"
                  value={course.quantity || 0}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Nhập số lượng bài học"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label fw-bold">Discount Id</label>
                <input
                  type="number"
                  name="discount_id"
                  value={course.discountCode || ""}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Nhập Discount Id (nếu có)"
                />
              </div>
            </div>

            {/* Active, Certificate, Level */}
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label fw-bold">Trạng thái</label>
                <select
                  name="is_active"
                  value={""}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Y">Hoạt động</option>
                  <option value="N">Không hoạt động</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label fw-bold">Certificate Id</label>
                <input
                  type="number"
                  name="certificate_id"
                  value={course.certificateName || ""}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Nhập Certificate Id (nếu có)"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label fw-bold">Level</label>
                <input
                  type="text"
                  name="level"
                  value={course.level || ""}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Ví dụ: begin, pro"
                />
              </div>
            </div>

            {/* Created & Updated */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Ngày tạo</label>
                <input
                  type="date"
                  name="created_at"
                  value={""}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Ngày cập nhật</label>
                <input
                  type="date"
                  name="updated_at"
                  value={""}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-outline-primary px-4">
                Lưu thay đổi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCoursePage;
