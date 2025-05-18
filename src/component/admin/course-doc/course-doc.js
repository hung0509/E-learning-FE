import { useState } from "react";
import LessonDto from "../../../dto/lesson-dto";

const CourseDocAdd = ({closeModal}) => {
    const [lesson, setLesson] = useState(new LessonDto());
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLesson({ ...lesson, [name]: value });
    };

    const handleSubmit = (e) => {

    };
    return (
        <form >
            <div className="mb-3">
                <label className="form-label fw-bold">Tên tài liệu</label>
                <input
                    type="text"
                    name="course_name"
                    value={lesson.lessonName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Nhập tên khóa học"
                />
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">File</label>
                    <input
                        type="file"
                        name="price_entered"
                        value={lesson.urlLesson}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Nhập giá gốc"
                    />
                </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
                <div className="btn btn-danger" onClick={closeModal}> Hủy bỏ</div>
                <div onClick={handleSubmit} type="submit" className="btn btn-outline-primary px-4">
                    Lưu thay đổi
                </div>
            </div>
        </form>
    )
}

export default CourseDocAdd;