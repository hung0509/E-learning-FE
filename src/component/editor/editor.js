import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";
import ArticleDto from "../../dto/article-dto";
import { useArticle } from "../../hook/useArticle";

export default function EditorApp() {
    const userId = localStorage.getItem("userId");
    const [htmlContent, setHtmlContent] = useState(null);
    const [data, setData] = useState(new ArticleDto());
    const {handleAddArticle} = useArticle();

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
        console.log(htmlContent);
    }, [htmlContent]);

    const handleSubmit = async () => {
        const formData = new FormData();

        htmlContent.replaceAll(/<img(.*?)>/g, '<img$1 />')
        formData.append('instructorId', userId); // Temporary instructorId
        formData.append('content', htmlContent);
        formData.append('description', data.description);
        formData.append('title', data.title);
        formData.append('image', data.image)

        await handleAddArticle(formData);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    
    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        console.log(file);
        if (file) {
            // Cập nhật vào data thay vì setFiles
            setData((prevData) => ({
                ...prevData,
                [fieldName]: file, // Cập nhật file vào đúng trường trong data
            }));
        }
    };

    return (
        <div className="editor p-6 max-w-2xl mx-auto row w-100" style={{ borderBottom: 'none', minHeight: '200px' }}>
            <div>
                <div className="row w-75 px-5 pt-4">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Article title</h6>
                    </div>
                    <input 
                        value={data.title}
                        onChange={handleInputChange}
                        name='title'
                        id='title'
                        type='text'
                        placeholder="Tiêu đề"
                        className="col-sm-9 rounded border-0 fs-6 p-2"
                    />
                </div>

                <div className="row w-75 px-5 pt-4">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Article description</h6>
                    </div>
                    <input 
                        value={data.description}
                        onChange={handleInputChange}
                        name='description'
                        id='description'
                        type='text'
                        placeholder="Mô tả"
                        className="col-sm-9 rounded border-0 fs-6 p-2"
                    />
                </div>

                <div className="row w-75 px-5 pt-4">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Artcle Image</h6>
                    </div>
                    <input 
                        onChange={(e) => handleFileChange(e, 'image')}
                        type='file'
                        name='image'
                        id='image'
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
                <div style={{ height: "400px", overflow: 'scroll'}} className="border p-3" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>

            <div className="text-end">
                <div className="btn btn-secondary mt-3">Bỏ qua</div>
                <div onClick={handleSubmit} style={{background: '#0d6efd', color: '#fff'}} className="btn btn-primary mt-3" >Hoàn thành</div>
            </div>
        </div>
    );
}
