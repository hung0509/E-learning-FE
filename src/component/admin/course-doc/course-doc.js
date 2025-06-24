import { useState } from "react";
import LessonDto from "../../../dto/lesson-dto";
import { useDocument } from "../../../hook/useDocument";
import DocumentDto from "../../../dto/document-dto";

const CourseDocAdd = ({closeModal, courseId, addDocument}) => {
    const [document, setDocument] = useState(new DocumentDto());
    const { handleAddDocument } = useDocument();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDocument({ ...document, [name]: value });
    };

    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        if (file) {
            file.preview = URL.createObjectURL(file);

            // Cập nhật vào data thay vì setFiles
            setDocument((prevData) => ({
                ...prevData,
                [fieldName]: file, // Cập nhật file vào đúng trường trong data
            }));
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
    
        formData.append('courseId', courseId); // Temporary instructorId
        formData.append('documentName', document.documentName);
        formData.append('documentUrl', document.documentUrl);

        const data = await handleAddDocument(formData);

        addDocument(data);
        closeModal();
    };

    return (
        <form >
            <div className="mb-3">
                <label className="form-label fw-bold">Tên tài liệu</label>
                <input
                    type="text"
                    name="documentName"
                    value={document.documentName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Nhập tên tài liệu"
                />
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">File</label>
                    <input
                        type="file"
                        name="documentUrl"
                        onChange={(e) => handleFileChange(e, 'documentUrl')}
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