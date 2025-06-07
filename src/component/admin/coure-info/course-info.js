import { useEffect, useState } from "react";
import { Level } from "../../../constant/code";
import { useDiscount } from "../../../hook/useDiscount";
import DiscountDto from "../../../dto/discount-dto";

const CourseInfoTab = ({ courses }) => {
  const initialCourse = {
    courseName: courses.courseName,
    level: courses.level,
    certificateName: courses.certificate?.certificateName || "",
    discountCode: courses.discount?.discountCode || "",
    description: courses.description,
    priceEntered: courses.priceEntered,
    isActive: courses.isActive,
  };

  const [course, setCourse] = useState(initialCourse);
  const [showDiscountList, setShowDiscountList] = useState(false);
  const [availableDiscountCodes, setAvailableDiscountCodes] = useState([]);
  const { handleGetAll } = useDiscount();
  useEffect(() => {
    const fetchData = async () => {
      const result = await handleGetAll(`?isActive=Y&expiredDate=${new Date().toISOString().split("T")[0]}`);
      const discounts = result.result.map(item => DiscountDto.fromJson(item)); // đây là 1 array các DiscountDto
      const discountCodes = discounts.map(discount => discount.discountCode);
      setAvailableDiscountCodes(discountCodes);
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {

  };

  const handleDiscountClick = (code) => {
    setCourse({ ...course, discountCode: code });
    setShowDiscountList(false);
  };
  return (
    <form >
      <div className="mb-3">
        <label className="form-label fw-bold">Tên khóa học</label>
        <input
          type="text"
          name="courseName"
          value={course.courseName}
          onChange={handleChange}
          className="form-control"
          placeholder="Nhập tên khóa học"
        />
      </div>
      <div className="mb-3">
        <label className="form-label fw-bold">Mô tả</label>
        <textarea
          name="description"
          value={course.description}
          onChange={handleChange}
          className="form-control"
          placeholder="Nhập mô tả khóa học"
          rows="4"
        ></textarea>
      </div>

      {/* Prices */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-bold">Giá gốc</label>
          <input
            type="number"
            name="priceEntered"
            value={course.priceEntered}
            onChange={handleChange}
            className="form-control"
            placeholder="Nhập giá gốc"
          />
        </div>

        <div className="col-md-6 mb-3 position-relative">
          <label className="form-label fw-bold">Discount</label>
          <input
            type="text"
            name="discountCode"
            value={course.discountCode}
            onChange={handleChange}
            onFocus={() => setShowDiscountList(true)}
            onBlur={() => setTimeout(() => setShowDiscountList(false), 200)}
            className="form-control"
            placeholder="Nhập code"
          />
          {showDiscountList && (
            <ul className="list-group position-absolute w-100 z-3" style={{ top: "100%", maxHeight: "150px", overflowY: "auto" }}>
              {availableDiscountCodes
                .filter((c) =>
                  c.toLowerCase().includes(course.discountCode.toLowerCase())
                )
                .map((code, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-action"
                    onClick={() => handleDiscountClick(code)}
                    style={{ cursor: "pointer" }}
                  >
                    {code}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>

      {/* Active, Certificate, Level */}
      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label fw-bold">Trạng thái</label>
          <select
            name="isActive"
            value={course.isActive}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Y">Hoạt động</option>
            <option value="N">Không hoạt động</option>
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label fw-bold">Certificate</label>
          <input
            type="text"
            name="certificateName"
            value={course.certificateName}
            onChange={handleChange}
            className="form-control"
            placeholder="Nhập tên chứng chỉ"
          />
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label fw-bold">Level</label>
          <select
            name="level"
            value={course.level}
            onChange={handleChange}
            className="form-select"
          >
            <option value="EXPERT">Chuyên gia</option >
            <option value="INTERMEDIATE">Trung cấp</option >
            <option value="EXPERT">Người bắt đầu</ option >
          </select>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-4">
        <div onClick={handleSubmit} type="submit" className="btn btn-outline-primary px-4">
          Lưu thay đổi
        </div>
      </div>
    </form>
  )
}

export default CourseInfoTab;