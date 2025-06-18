import { useState } from "react";
import LessonDto from "../../../dto/lesson-dto";
import { useLesson } from "../../../hook/useLesson";

const LessonInfo = ({ courseId, closeModal, addLesson }) => {
    const [lesson, setLesson] = useState(new LessonDto());
    const { handleAddLesson } = useLesson();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLesson({ ...lesson, [name]: value });
    };

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        setLesson((prev) => ({
            ...prev,
            urlLesson: file, // Đây chính là File object cần dùng cho createObjectURL
        }));
    };


  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append('courseId', courseId);
    formData.append('lessonName', lesson.lessonName || '');
    formData.append('description', lesson.description || '');
    formData.append('urlLesson', lesson.urlLesson); // Gửi video file

    const getVideoDuration = () => {
        return new Promise((resolve, reject) => {
            if (!(lesson.urlLesson instanceof File)) {
                reject(new Error('Video file không hợp lệ'));
                return;
            }

            const videoElement = document.createElement('video');
            videoElement.preload = 'metadata';

            const objectUrl = URL.createObjectURL(lesson.urlLesson);
            videoElement.src = objectUrl;

            videoElement.onloadedmetadata = () => {
                URL.revokeObjectURL(objectUrl);
                const duration = Math.floor(videoElement.duration);
                formData.append('lessonTime', duration);
                resolve();
            };

            videoElement.onerror = () => {
                URL.revokeObjectURL(objectUrl);
                reject(new Error('Không thể đọc metadata từ video'));
            };
        });
    };

    try {
        await getVideoDuration();
        const value = await handleAddLesson(formData);

        console.log(value);

        addLesson(value);
        closeModal(); // Optionally đóng modal
    } catch (err) {
        console.error('Error handling submit:', err);
    }
};



    return (
        <form >
            <div className="mb-3">
                <label className="form-label fw-bold">Tên bài học</label>
                <input
                    type="text"
                    name="lessonName"
                    value={lesson.lessonName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Nhập tên bài học"
                />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Mô tả</label>
                <textarea
                    name="description"
                    value={lesson.description}
                    onChange={(e) => handleChange(e)}
                    className="form-control"
                    placeholder="Nhập mô tả khóa học"
                    rows="4"
                ></textarea>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Video</label>
                    <input
                        type="file"
                        name="video"
                        onChange={handleChangeFile}
                        className="form-control"
                        placeholder="Nhập tệp"
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

export default LessonInfo;