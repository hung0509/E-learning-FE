import { useState } from "react";
import LessonInfo from "../lesson-add/lesson-add";
import CourseDocAdd from "../course-doc/course-doc";

const DocumentTab = ({ courses }) => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);

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

    const handleRemoveLesson = () => {

    }

    const handleEditClick = () => {
        setEditModalOpen(true); // Mở modal
    };

    return (
        <ul className="list-unstyled course-lesson">
            <div className="d-flex justify-content-between">
                <h4 className="fs-5 fw-bold ">Nội dung tài liệu</h4>
                <div onClick={() => handleEditClick()} className="btn btn-outline-primary" style={{ float: 'inline-end' }}>Thêm tài liệu bài học</div>
            </div>

            {isEditModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content w-25">
                        {/* <button className="close-btn btn btn-outline-danger" onClick={closeModal}>×</button> */}
                            <CourseDocAdd closeModal={closeModal}/>
                    </div>
                </div>
            )}

            {courses.documents.map((document) => (
                <li
                    key={document.id}
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
                            {document.id}. {document.documentName}
                        </div>
                        <span style={{ fontSize: '12px' }}>
                            <span onClick={handleRemoveLesson} className="mx-5" style={{ cursor: 'pointer' }}><i class="bi bi-trash-fill"></i></span>
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default DocumentTab;
