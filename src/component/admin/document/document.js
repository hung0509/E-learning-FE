import { useState } from "react";
import LessonInfo from "../lesson-add/lesson-add";
import CourseDocAdd from "../course-doc/course-doc";
import { useDocument } from "../../../hook/useDocument";

const DocumentTab = ({ courses, addDocument, deleteDocument }) => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const {handleDeleteDoc} = useDocument();

    const closeModal = () => {
        setEditModalOpen(false); // Đóng modal
    };

    const handleRemoveLesson = async (id) => {
        const value = await handleDeleteDoc(id);

        deleteDocument(value);
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
                        <CourseDocAdd
                            closeModal={closeModal}
                            courseId={courses.id}
                            addDocument={addDocument}
                        />
                    </div>
                </div>
            )}

            {courses.documents.map((document, index) => (
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
                            {index}. {document.documentName}
                        </div>
                        <div>
                            {/* <iframe
                                src={document.documentUrl}
                                width="100%"
                                height="600px"
                            /> */}
                            <a href={document.documentUrl}>{document.documentName}</a>
                        </div>
                        <span style={{ fontSize: '12px' }}>
                            <span onClick={() => handleRemoveLesson(document.id)} className="mx-5" style={{ cursor: 'pointer' }}><i class="bi bi-trash-fill"></i></span>
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default DocumentTab;
