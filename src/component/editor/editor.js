import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";



export default function EditorApp() {
    const [htmlContent, setHtmlContent] = useState(null);

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
        ],
    };

    const handleImageInsert = () => {
        const images = document.querySelectorAll('.ql-editor img');
        images.forEach((img) => {
            img.style.maxWidth = '75%';  // Giới hạn kích thước ảnh tối đa là 100% chiều rộng container
            img.style.height = 'auto';    // Giữ tỷ lệ gốc của ảnh
        });
    };

    useEffect(() => {
        handleImageInsert(); // Kiểm tra lại ảnh khi render lại editor
    }, [htmlContent]);

    return (
        <div className="editor p-6 max-w-2xl mx-auto row w-100" style={{ borderBottom: 'none', minHeight: '200px' }}>
            <div>
                <div className="row w-75 px-5 pt-4">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Article title</h6>
                    </div>
                    <input type='text'
                        placeholder="Tiêu đề"
                        className="col-sm-9 rounded border-0 fs-4 p-2"
                    />
                </div>

                <div className="row w-75 px-5 pt-4">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Article description</h6>
                    </div>
                    <input type='text'
                        placeholder="Mô tả"
                        className="col-sm-9 rounded border-0 fs-4 p-2"
                    />
                </div>

                <div className="row w-75 px-5 pt-4">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Course Image</h6>
                    </div>
                    <input type='file'
                        name='avatar'
                        id='avartar'
                        class="col-sm-9 rounded text-secondary rounded p-2"
                    />
                </div>
            </div>

            <div className="col-12 col-lg-6 p-4 rounded shadow-md w-50">
                <ReactQuill
                    value={htmlContent}
                    onChange={setHtmlContent}
                    theme="snow"
                    modules={modules}
                    className="min-h-[150px]"
                    placeholder="Viết nội dung tại đây..."
                    style={{ height: "360px" }}
                />
            </div>

            <div className="col-12 col-lg-6 mt-6 rounded-lg mt-4 w-50 container-class"  >
                <div style={{ height: "400px" }} className="border" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>

            <div className="text-end">
                <div className="btn btn-secondary mt-3">Bỏ qua</div>
                <div style={{background: '#0d6efd', color: '#fff'}} className="btn btn-primary mt-3" >Hoàn thành</div>
            </div>
        </div>
    );
}
