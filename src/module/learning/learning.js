import Lesson from "../../component/lesson/lesson";
import './learning.css';
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
    return (
        <div>
            <div className="d-flex rounded bg-dark text-white justify-content-between p-2" style={{width:  '100%', height: '50px'}}>
                <a href="/" class="d-flex text-white align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <i class="custom-logo fs-5 bi bi-alexa px-3"><span className="text-white px-3 fw-bold fs-6">Name of Course</span></i>
                    
                </a>
                <div className="d-flex">
                    <div width="8px" height="8px" style={{border: '1px solid rgb(255, 147, 7)', fontSize:'13px'}} className="text-white p-2 rounded-circle">58%</div>
                    <div className="align-content-center px-3">117/200 Bài học</div>
                </div>
            </div>
            <div className="learning-sign-in d-flex padding-custom" >
                <div class='lesson col-sm-12 col-xl-9 align-content-center rounded '>
                    <Lesson />
                </div>
                <div class='lesson col-sm-12 col-xl-3 rounded '>
                    <h5 className="p-4 fs-6 border-bottom fw-bold">Nội dung khóa học</h5>
                    <ul className="p-0">
                        {lessons.map((lesson) => 
                            (
                                <li key={lesson.lesson_id} className="py-2 px-3 list-unstyled" style={{cursor: 'pointer', fontWeight: '500'}}>
                                  <a href="" className="text-decoration-none link-dark">
                                  <div>
                                        {lesson.lesson_id} . {lesson.lesson_name}
                                    </div>   
                                    <span style={{fontSize: '12px'}}>
                                        <i  className="bi bi-play-circle px-2"></i>16:27
                                    </span>
                                  </a>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Learning;