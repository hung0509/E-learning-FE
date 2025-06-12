import { unstable_HistoryRouter, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import Lesson from "../../component/lesson/lesson";
import './learning.css';
import { useEffect, useState } from "react";
import { useLesson } from "../../hook/useLesson";
import LessonDto from "../../dto/lesson-dto";
import { useCourse } from "../../hook/useCourse";
import CourseDetailDto from "../../dto/course-detail-dto";
import SockJsClient from 'react-stomp';
import { useComment } from "../../hook/useComment";
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import CommentDto from "../../dto/comment-dto";
import BaseRequestDto from "../../dto/base-request-dto";
import Pagination from "../../component/pagination/pagination";


const Learning = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userId = localStorage.getItem("userId");
    const [searchParams] = useSearchParams();
    const courseId = searchParams.get("courseId");
    const lessonId = searchParams.get("lessonId");
    const [page, setPage] = useState(new BaseRequestDto());
    const [currentPage, setCurrentPage] = useState(1);
    const [course, setCourse] = useState(new CourseDetailDto());
    const { handleGetDetailCourse } = useCourse();
    const [selectedLesson, setSelectedLesson] = useState(new LessonDto());
    const [comment, setComment] = useState([]);
    const [message, setMessage] = useState("");
    const { handlePostComment, handleGetAll } = useComment();

    useEffect(() => {
        const fetchCourse = async () => {
            const result = await handleGetDetailCourse(`?courseId=${courseId}&userId=${userId}`);
            const courseData = CourseDetailDto.fromCourseDetailResponse(result);

            courseData.lessons.forEach(item => {
                if (item.id == lessonId) {
                    const lesson = LessonDto.fromJson(item);
                    setSelectedLesson(lesson);
                }
            })
            setCourse(courseData);
        };

        fetchCourse();
    }, []);

    // useEffect(() => {
    //     const socket = new SockJS("http://localhost:8080/elearning-service/ws-chat");
    //     const stompClient = Stomp.over(socket);

    //     stompClient.connect({}, (frame) => {
    //         console.log("Connected: " + frame);

    //         // Đảm bảo chỉ gửi thông điệp đăng ký 1 lần
    //         stompClient.send("/app/register", {}, JSON.stringify({
    //             userId: userId,
    //         }));

    //         // Subscribe vào topic của bài học
    //         stompClient.subscribe(`/topic/comment/${selectedLesson.id}`, (msg) => {
    //             console.log("Received comment:", msg.body);
    //             setComment(prev => [...prev, JSON.parse(msg.body)]);
    //         });
    //     });

    //     // Cleanup khi component bị unmount
    //     return () => {
    //         if (stompClient && stompClient.connected) {
    //             stompClient.disconnect(() => {
    //                 console.log("Disconnected from WebSocket");
    //             });
    //         }
    //     };
    // }, [selectedLesson.id]);


    useEffect(() => {
        if (selectedLesson && selectedLesson.id != null) {
            const fetchCourse = async () => {
                const result = await handleGetAll(`?lessonId=${selectedLesson.id}&page=${currentPage - 1}&pageSize=6`);
                const comments = result.result.map((item) => CommentDto.fromCommentDto(item));

                const page = BaseRequestDto.fromBaseRequestResponse(result);
                setComment(comments);
                setPage(page);
            };

            fetchCourse();
        }
    }, [selectedLesson.id, currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    }


    const handleClickLesson = (lesson) => {


        const data = LessonDto.fromJson(lesson);
        const searchParams = new URLSearchParams(location.search);

        searchParams.set('lessonId', data.id); // thay đổi param 'lessonId' thành newParam

        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
        setSelectedLesson(data);
    }

    const formatSecondsToHMS = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const padded = (num) => String(num).padStart(2, '0');
        return `${padded(hours)}:${padded(minutes)}:${padded(seconds)}`;
    }

    const postComment = async () => {
        const credential = {
            content: message,
            userId: userId,
            lessonId: selectedLesson.id,
            isActive: 'Y'
        }
        await handlePostComment(credential);
        setMessage("");
    }

    const formatDateToSharedPublicly = (dateString) => {
        const date = new Date(dateString);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        return `${month} ${year}`;
    };


    return (
        <div>
            <div className="d-flex rounded bg-dark text-white justify-content-between p-2" style={{ width: '100%', height: '50px' }}>
                <a href="/" class="d-flex text-white align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <i class="custom-logo fs-5 bi bi-alexa px-3"><span className="text-white px-3 fw-bold fs-6">{course.courseName}</span></i>

                </a>
                <div className="d-flex">
                    <div width="8px" height="8px" style={{ border: '1px solid rgb(255, 147, 7)', fontSize: '13px' }} className="text-white p-2 rounded-circle">{course.completionPercentage}%</div>
                    <div className="align-content-center px-3">{course.completedLesson}/{course.totalLesson} Bài học</div>
                </div>
            </div>
            <div className="learning-sign-in d-flex padding-custom" >
                <div class='lesson col-sm-12 col-xl-9 align-content-center rounded '>
                    <Lesson data={selectedLesson} />

                    <SockJsClient
                        key={selectedLesson.id}
                        url="http://localhost:8080/elearning-service/ws-chat"
                        topics={[`/topic/comment/${selectedLesson.id}`]}
                        onConnect={() => console.log("Connected to lesson:", selectedLesson.id)}
                        onDisconnect={() => console.log("Disconnected")}
                        onMessage={(msg) => {
                            console.log("Received comment:", msg);
                            const commentNew = CommentDto.fromCommentDto(msg);
                            setComment(prev => [...prev, commentNew]);
                        }}
                        debug={false}
                    />
                    <div class="mx-3 p-3" style={{ marginTop: '100px' }}>
                        <div class=" w-100">
                            <div class="d-flex flex-row align-items-start ">
                                <img class="rounded-circle mx-3" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    class="form-control ml-1 shadow-none textarea"
                                    placeholder="Viết gì đó ...."
                                >
                                </textarea>
                            </div>
                            <div class="mt-2 text-right" style={{ float: "right" }}>
                                <button
                                    onClick={postComment}
                                    class="btn btn-primary btn-sm shadow-none"
                                    type="button"
                                >
                                    Post comment
                                </button>
                                <button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button>
                            </div>
                        </div>

                        {comment.map((item, index) => (
                            <div class="" key={index}>
                                <div class="d-flex flex-column comment-section w-100">
                                    <div class="">
                                        <div class="d-flex flex-row user-info">
                                            <img class="rounded-circle mx-3" src={item.avatar || "https://pluspng.com/img-png/user-png-icon-user-2-icon-png-file-512x512-pixel-512.png"} width="40" />
                                            <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">{item.firstName + " " + item.lastName}</span><span class="date text-black-50">{formatDateToSharedPublicly(item.createdAt)}</span></div>
                                        </div>
                                        <div class="mt-2">
                                            <p class="comment-text mx-5 px-4">{item.content}</p>
                                        </div>
                                    </div>
                                    {/* <div class="bg-white">
                                    <div class="d-flex flex-row fs-12">
                                        <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                                        <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                                        <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
                                    </div>
                                </div> */}

                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={page.totalPage}
                        onPageChange={onPageChange}
                    />
                </div>

                <div class='lesson col-sm-12 col-xl-3 rounded '>
                    <h5 className="p-4 fs-6 border-bottom fw-bold">Nội dung khóa học</h5>
                    <ul className="p-0">
                        {course.lessons.map((lesson, index) =>
                        (
                            <li 
                                key={lesson.lesson_id}
                                className="py-2 px-3 list-unstyled d-flex justify-content-between lesson-course"
                                style={{ cursor: 'pointer', fontWeight: '500' }}
                                onClick={() => handleClickLesson(lesson)}
                            >
                                <div className="text-decoration-none link-dark">
                                    <div>
                                        {index} . {lesson.lessonName}
                                    </div>
                                    <span style={{ fontSize: '12px' }}>
                                        <i className="bi bi-play-circle px-2"></i>{formatSecondsToHMS(lesson.lessonTime)}
                                    </span>
                                </div>
                                {lesson.status === 'COM' && <span><i class="bi bi-check-circle-fill text-success"></i></span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Learning;