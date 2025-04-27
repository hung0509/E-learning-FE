import { unstable_HistoryRouter, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import Lesson from "../../component/lesson/lesson";
import './learning.css';
import { useEffect, useState } from "react";
import { useLesson } from "../../hook/useLesson";
import LessonDto from "../../dto/lesson-dto";
import { useCourse } from "../../hook/useCourse";
import CourseDetailDto from "../../dto/course-detail-dto";
const lessons = [
    {
        lesson_id: 1,
        course_id: 1,
        lesson_name: 'Introduction to SQL',
        url_lesson: 'http://example.com/sql-intro',
        description: 'Learn the basics of SQL',
        lesson_time: 30, // tính theo số phút
        is_active: 'Y',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        lesson_id: 2,
        course_id: 1,
        lesson_name: 'Advanced SQL Queries',
        url_lesson: 'http://example.com/sql-advanced',
        description: 'Dive into advanced SQL topics',
        lesson_time: 45, // tính theo số phút
        is_active: 'Y',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        lesson_id: 3,
        course_id: 2,
        lesson_name: 'Python for Data Science',
        url_lesson: 'http://example.com/python-data-science',
        description: 'Introduction to Python in data science',
        lesson_time: 60, // tính theo số phút
        is_active: 'Y',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        lesson_id: 4,
        course_id: 2,
        lesson_name: 'Data Visualization with Python',
        url_lesson: 'http://example.com/data-visualization-python',
        description: 'Learn to create visualizations with Python',
        lesson_time: 50, // tính theo số phút
        is_active: 'Y',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        lesson_id: 5,
        course_id: 3,
        lesson_name: 'Machine Learning Basics',
        url_lesson: 'http://example.com/ml-basics',
        description: 'Understand the fundamentals of machine learning',
        lesson_time: 90, // tính theo số phút
        is_active: 'Y',
        created_at: new Date(),
        updated_at: new Date()
    }
];

const Learning = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userId = localStorage.getItem("userId");
    const [searchParams] = useSearchParams();

    const courseId = searchParams.get("courseId");
    const lessonId = searchParams.get("lessonId");
    const [course, setCourse] = useState(new CourseDetailDto());
    const { handleGetDetailCourse } = useCourse();
    const [selectedLesson, setSelectedLesson] = useState(new LessonDto());

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

    return (
        <div>
            <div className="d-flex rounded bg-dark text-white justify-content-between p-2" style={{ width: '100%', height: '50px' }}>
                <a href="/" class="d-flex text-white align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <i class="custom-logo fs-5 bi bi-alexa px-3"><span className="text-white px-3 fw-bold fs-6">{course.courseName}</span></i>

                </a>
                <div className="d-flex">
                    <div width="8px" height="8px" style={{ border: '1px solid rgb(255, 147, 7)', fontSize: '13px' }} className="text-white p-2 rounded-circle">58%</div>
                    <div className="align-content-center px-3">0/{course.quantity} Bài học</div>
                </div>
            </div>
            <div className="learning-sign-in d-flex padding-custom" >
                <div class='lesson col-sm-12 col-xl-9 align-content-center rounded '>
                    <Lesson data={selectedLesson} />
                </div>
                <div class='lesson col-sm-12 col-xl-3 rounded '>
                    <h5 className="p-4 fs-6 border-bottom fw-bold">Nội dung khóa học</h5>
                    <ul className="p-0">
                        {course.lessons.map((lesson, index) =>
                        (
                            <li
                                key={lesson.lesson_id}
                                className="py-2 px-3 list-unstyled"
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
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Learning;