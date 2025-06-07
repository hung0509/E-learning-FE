import { useEffect, useState } from "react";
import Pagination from "../../pagination/pagination";
import BaseRequestDto from "../../../dto/base-request-dto";
import { data, useParams } from "react-router-dom";
import { useLesson } from "../../../hook/useLesson";
import LessonDto from "../../../dto/lesson-dto";
import { useComment } from "../../../hook/useComment";
import CommentDto from "../../../dto/comment-dto";

const dataDefault = {
    id: 1,
    courseId: 10,
    lessonName: "Lập trình căn bản",
    urlLesson: "https://www.youtube.com/embed/cfbNtHNCMBo",
    description: "Yêu Em Dại Khờ là ca khúc pop ballad nhẹ nhàng, kể về câu chuyện tình yêu chân thành nhưng cũng có phần ngây thơ, dại khờ của người trẻ khi yêu. Giai điệu bắt tai, lời ca giản dị nhưng chứa đựng nhiều cảm xúc thật, giúp bài hát dễ dàng chạm đến trái tim người nghe và được nhiều bạn trẻ yêu thích.",
    lessonTime: 230,
    isActive: "Y"
}

const comments = [
    {
        id: 1,
        content: "Bài giảng rất dễ hiểu, cảm ơn thầy!",
        userId: 101,
        lessonId: 10,
        createdAt: "2025-06-07T08:30:00Z",
        updatedAt: "2025-06-07T08:35:00Z",
        isActive: "Y",
        firstName: "Nguyễn",
        lastName: "An",
        avatar: null
    },
    {
        id: 2,
        content: "Em chưa hiểu phần cuối bài, thầy giải thích lại giúp ạ.",
        userId: 102,
        lessonId: 10,
        createdAt: "2025-06-07T09:00:00Z",
        updatedAt: "2025-06-07T09:05:00Z",
        isActive: "Y",
        firstName: "Trần",
        lastName: "Bình",
        avatar: null
    },
    {
        id: 3,
        content: "Rất hay và dễ nhớ!",
        userId: 103,
        lessonId: 10,
        createdAt: "2025-06-07T10:15:00Z",
        updatedAt: "2025-06-07T10:15:00Z",
        isActive: "Y",
        firstName: "Lê",
        lastName: "Cường",
        avatar: null
    }
];

const LessonEdition = () => {
    const { lessonId } = useParams();
    const [data, setData] = useState(new LessonDto());
    const [comment, setComment] = useState(comments);
    const [page, setPage] = useState(new BaseRequestDto());
    const [currentPage, setCurrentPage] = useState(1);
    const { handleGetLesson, handleUpdate } = useLesson();
    const { handleGetAll, handleDeleteComment } = useComment()

    //Load Lesson
    useEffect((() => {
        const fetchData = async () => {
            const result = await handleGetLesson(lessonId);

            const lesson = LessonDto.fromJson(result);
            setData(lesson);
        }

        fetchData();
    }), [])
    //Load Comment

    useEffect(() => {
        const fetchComment = async () => {
            const result = await handleGetAll(`?lessonId=${lessonId}&page=${currentPage - 1}&pageSize=5`);
            const comments = result.result.map((item) => CommentDto.fromCommentDto(item));
            const page = BaseRequestDto.fromBaseRequestResponse(result);
            setComment(comments);
            setPage(page);
        };

        fetchComment();

    }, [currentPage])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    const formatDateToSharedPublicly = (dateString) => {
        const date = new Date(dateString);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        return `${month} ${year}`;
    };

    const handleSubmit = async () => {
        const result = await handleUpdate(lessonId, data);

        setData(result);
    }

    const handleHide = async (id) => {
        console.log(id);
        const idDelete = await handleDeleteComment(id);
        setComment((prev) => 
            prev.filter(item => item.id !== idDelete),
        );
    }

    return (<div className="row p-5">
        <h3 style={{ color: "#ff9307" }} className="p-3">Chỉnh sửa bài học</h3>
        <div className="col-md-6 mb-3">

            {/* Lesson Name */}
            <div className="mb-3 d-flex align-items-center">
                <label className="form-label fw-bold w-25 mb-0">Tên bài học:</label>
                <input
                    type="text"
                    className="form-control w-75"
                    name="lessonName"
                    id="lessonName"
                    placeholder="Enter lesson title"
                    value={data.lessonName}
                    onChange={handleInputChange}
                />
            </div>

            {/* Description */}
            <div className="mb-3 d-flex align-items-start">
                <label className="form-label fw-bold w-25 pt-2">Mô tả bài học:</label>
                <textarea
                    className="form-control w-75"
                    id="description"
                    name="description"
                    rows="4"
                    placeholder="Enter description"
                    value={data.description}
                    onChange={handleInputChange}
                ></textarea>
            </div>

            {/* Time */}
            <div className="mb-3 d-flex align-items-center">
                <label className="form-label fw-bold w-25 mb-0">Thời gian:</label>
                <input
                    type="text"
                    className="form-control w-75"
                    name="lessonTime"
                    id="lessonTime"
                    placeholder="Enter lesson time"
                    value={data.lessonTime}
                    readOnly
                />
            </div>

            <div className="mb-3 d-flex align-items-center">
                <label className="form-label fw-bold w-25 mb-0">Trạng thái hoạt động:</label>
                <select
                    name="isActive"
                    value={data.isActive}
                    onChange={handleInputChange}
                    className="form-select w-25"
                >
                    <option value="Y">Hoạt động</option>
                    <option value="N">Không hoạt động</option>
                </select>
            </div>

            <div className="d-flex justify-content-end mt-4">
                <div onClick={handleSubmit} type="submit" className="btn btn-outline-primary px-4">
                    Lưu thay đổi
                </div>
            </div>
        </div>

        <div className=" col-sm-12 col-xl-6">
            <div className=" text-center" >
                <iframe height="300" width={350} src={data.urlLesson}
                    title={data.lessonName}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    className="w-100 rounded"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>

        <div>
            {/* Lesson */}
            <h4 className="fs-5 fw-bold">Bình luận bài học</h4>
            <ul className="p-0">
                {comment.map((item, index) => (
                    <div class="d-flex" key={index}>
                        <div onClick={() => handleHide(item.id)}><i class="bi bi-dash-circle-dotted"></i></div>
                        <div class="d-flex flex-column comment-section w-100">
                            <div class="">
                                <div class="d-flex flex-row user-info">
                                    <img class="rounded-circle mx-3" src={item.avatar || "/image/user.png"} width="40" />
                                    <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">{item.firstName + " " + item.lastName}</span><span class="date text-black-50">{formatDateToSharedPublicly(item.createdAt)}</span></div>
                                </div>
                                <div class="mt-2">
                                    <p class="comment-text mx-5 px-4">{item.content}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </ul>

            <Pagination
                currentPage={currentPage}
                totalPages={page.totalPage}
                onPageChange={onPageChange}
            />

        </div>



    </div>)
}

export default LessonEdition;