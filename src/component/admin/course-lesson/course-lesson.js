import { useState } from "react";
import LessonInfo from "../lesson-add/lesson-add";
import { useLesson } from "../../../hook/useLesson";

const CourseLessonTab = ({ course, addLesson, deleteLesson }) => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const { handleDeleteLesson } = useLesson();

    const closeModal = () => {
        setEditModalOpen(false); // Đóng modal
    };

    function pad(num) {
        return num.toString().padStart(2, '0');
    }

    function formatDuration(seconds) {
        const totalSeconds = Math.floor(seconds);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
    }

    const handleRemoveLesson = async (id) => {
        const value = await handleDeleteLesson(id);
        deleteLesson(value);
    }

    const handleEditClick = () => {
        setEditModalOpen(true); // Mở modal
    };

    const handleEditLesson =(id) =>{
        window.location.href = "/admin/lesson/" + id;
    }


    return (
        <ul className="list-unstyled course-lesson">
            <div className="d-flex justify-content-between">
                <h4 className="fs-5 fw-bold ">Nội dung khóa học</h4>
                <div onClick={() => handleEditClick()} className="btn btn-outline-primary" style={{ float: 'inline-end' }}>Thêm bài học</div>
            </div>

            {isEditModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content w-25">
                        {/* <button className="close-btn btn btn-outline-danger" onClick={closeModal}>×</button> */}
                            <LessonInfo 
                               courseId={course.id}
                                closeModal={closeModal}
                                addLesson={addLesson}
                            />
                    </div>
                </div>
            )}

            {course.lessons.map((lesson, index) => (
                <li
                    key={lesson.id}
                    className="py-3 px-3"
                    style={{
                        fontWeight: '500'
                    }}
                >
                    <div
                        className="text-decoration-none link-dark opacity-75 d-flex justify-content-between pr-5"
                        style={{ width: '100%' }}
                    >
                        <div>
                            <i className="bi bi-play-circle p-3"></i>
                            {index}. {lesson.lessonName}
                        </div>
                        <span style={{ fontSize: '12px' }}>
                            <i className="bi bi-clock px-2"></i>
                            {formatDuration(lesson.lessonTime)}
                            <span onClick={() => handleEditLesson(lesson.id)}  style={{ cursor: 'pointer', marginLeft: '5rem', marginRight: '1rem' }}><i class="bi bi-pencil-square"></i></span>
                            <span onClick={handleRemoveLesson} className="mx-2" style={{ cursor: 'pointer' }}><i class="bi bi-trash-fill"></i></span>
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CourseLessonTab;
