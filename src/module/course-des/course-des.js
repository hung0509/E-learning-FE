import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCourse } from "../../hook/useCourse";
import CourseDetailDto from "../../dto/course-detail-dto";
import { useAccount } from "../../hook/useAccount";

// const lessons = [
//   {
//     lesson_id: 1,
//     course_id: 1,
//     lesson_name: 'Introduction to SQL',
//     url_lesson: 'http://example.com/sql-intro',
//     description: 'Learn the basics of SQL',
//     lesson_time: 30, // tính theo số phút
//     is_active: 'Y',
//     created_at: new Date(),
//     updated_at: new Date()
//   },
//   {
//     lesson_id: 2,
//     course_id: 1,
//     lesson_name: 'Advanced SQL Queries',
//     url_lesson: 'http://example.com/sql-advanced',
//     description: 'Dive into advanced SQL topics',
//     lesson_time: 45, // tính theo số phút
//     is_active: 'Y',
//     created_at: new Date(),
//     updated_at: new Date()
//   },
//   {
//     lesson_id: 3,
//     course_id: 2,
//     lesson_name: 'Python for Data Science',
//     url_lesson: 'http://example.com/python-data-science',
//     description: 'Introduction to Python in data science',
//     lesson_time: 60, // tính theo số phút
//     is_active: 'Y',
//     created_at: new Date(),
//     updated_at: new Date()
//   },
//   {
//     lesson_id: 4,
//     course_id: 2,
//     lesson_name: 'Data Visualization with Python',
//     url_lesson: 'http://example.com/data-visualization-python',
//     description: 'Learn to create visualizations with Python',
//     lesson_time: 50, // tính theo số phút
//     is_active: 'Y',
//     created_at: new Date(),
//     updated_at: new Date()
//   },
//   {
//     lesson_id: 5,
//     course_id: 3,
//     lesson_name: 'Machine Learning Basics',
//     url_lesson: 'http://example.com/ml-basics',
//     description: 'Understand the fundamentals of machine learning',
//     lesson_time: 90, // tính theo số phút
//     is_active: 'Y',
//     created_at: new Date(),
//     updated_at: new Date()
//   }
// ];


const CourseDes = () => {
  const { courseId } = useParams();
  const [data, setData] = useState(new CourseDetailDto());
  const { handleGetDetailCourse } = useCourse();
  const { registerCourse } = useAccount()
  const [isRegistered, setIsRegistered] = useState(false);
  //Check neu chua dang nhap thi vo trang nay
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const fetchData = async () => {
      const result = await handleGetDetailCourse(`?courseId=${courseId}&userId=${userId}`);

      const courseDetail = CourseDetailDto.fromCourseDetailResponse(result);

      setData(courseDetail);
      setIsRegistered(result.isRegister);
    }

    fetchData();
  }, []);

  function formatDuration(seconds) {
    const totalSeconds = Math.floor(seconds);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
  }

  function pad(num) {
    return num.toString().padStart(2, '0');
  }

  function formatDurationText(seconds) {
    const totalSeconds = Math.floor(seconds);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const parts = [];
    if (hours > 0) parts.push(`${hours} giờ`);
    if (minutes > 0) parts.push(`${minutes} phút`);
    if (secs > 0 || parts.length === 0) parts.push(`${secs} giây`);

    return parts.join(' ');
  }

  const handleRegister = async (id) => {
    await registerCourse({ courseId: id });
    setIsRegistered(true);
  }

  const isFree = (price) => {
    console.log(price);
    return (price === 0 || price === null) ? price : "Miễn phí";
  }

  return (<div className="row p-5">
    <div className=" col-sm-12 col-xl-8 p-2">
      <h2 className="fs-3 fw-bold">{data.courseName}</h2>
      <p>{data.description}</p>

      <h4 className="fs-5 fw-bold mt-5">Nội dung khóa học</h4>
      <div className="d-flex align-content-center border-bottom">
        <p>{data.quantity} bài học</p>
        <p className="px-3">{formatDurationText(data.courseDuration)}</p>
      </div>
      <ul className="p-0">
      {data.lessons.map((lesson) => (
  <li
    key={lesson.id}
    className="py-3 px-3 list-unstyled"
    style={{
      cursor: isRegistered ? 'pointer' : 'not-allowed',
      fontWeight: '500',
      opacity: isRegistered ? '1' : '0.6',
    }}
  >
    {registerCourse && isRegistered ? (
      <Link
        to={`/lesson?courseId=${data.id}&lessonId=${lesson.id}`}
        className="text-decoration-none link-dark opacity-75 d-flex justify-content-between pr-5"
        style={{ width: '100%' }}
      >
        <div>
          <i className="bi bi-play-circle p-3"></i>
          {lesson.id} . {lesson.lessonName}
        </div>
        <span style={{ fontSize: '12px' }}>
          <i className="bi bi-play-circle px-2"></i>
          {formatDuration(lesson.lessonTime)}
        </span>
      </Link>
    ) : (
      <div
        className="text-decoration-none link-dark opacity-75 d-flex justify-content-between pr-5"
        style={{ pointerEvents: 'none', width: '100%' }}
      >
        <div>
          <i className="bi bi-play-circle p-3"></i>
          {lesson.id} . {lesson.lessonName}
        </div>
        <span style={{ fontSize: '12px' }}>
          <i className="bi bi-play-circle px-2"></i>
          {formatDuration(lesson.lessonTime)}
        </span>
      </div>
    )}
  </li>
))}

      </ul>
    </div>

    <div className=" col-sm-12 col-xl-4 px-4">
      <div className="p-3 text-center" >
        <img className="w-100 pb-3" style={{ borderRadius: '18px' }} src="https://th.bing.com/th/id/OIP.NK8Sm1NoQz41q1_DhhToUwHaEK?rs=1&pid=ImgDetMain" alt="" />
        <h4 className="color-common">{data.priceAfterReduce === 0 ? 'Miễn phí' : Number(data.priceEntered).toLocaleString('vi-VN') + "  VND"}</h4>
        {/* <div style={{ borderRadius: '18px' }} className="btn btn-primary fw-bold fs-6" onClick={() => handleRegister(data.id)}>ĐĂNG KÝ HỌC</div> */}
        <div
          style={{
            borderRadius: "18px",
            backgroundColor: isRegistered ? "#d6d6d6" : "#007bff",  // Màu xám nếu đã đăng ký
            cursor: isRegistered ? "not-allowed" : "pointer",  // Không cho click nếu đã đăng ký
          }}
          className="btn btn-primary fw-bold fs-6"
          onClick={() => {
            if (!isRegistered) handleRegister(data.id);  // Chỉ gọi khi chưa đăng ký
          }}
        >
          {isRegistered ? isFree(data.priceAfterReduce) : "ĐĂNG KÝ HỌC"}  {/* Thay đổi nội dung nút */}
        </div>
      </div>
      <ul style={{ marginLeft: '25%' }}>
        <li className="list-unstyled"><i style={{ marginRight: '6px' }} className="bi bi-rocket-fill fw-bold"></i>{data.level}</li>
        <li className="list-unstyled"><i style={{ marginRight: '6px' }} className="bi bi-film fw-bold"></i>Tổng số {data.quantity} bài học</li>
        <li className="list-unstyled"><i style={{ marginRight: '6px' }} className="bi bi-alarm fw-bold"></i>Thời lượng {formatDurationText(data.courseDuration)}</li>
        <li className="list-unstyled"><i style={{ marginRight: '6px' }} className="bi bi-displayport-fill fw-bold"></i>Học mọi lúc, mọi nơi</li>
      </ul>
    </div>

  </div>);
}

export default CourseDes;