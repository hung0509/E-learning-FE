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


const CourseDes = ()=>{
    //Check neu chua dang nhap thi vo trang nay

    return (<div className="row p-5">
       <div className=" col-sm-12 col-xl-8 p-2">
            <h2 className="fs-3 fw-bold">Lập trình C/C++ cơ bản, nâng cao</h2>
            <p>Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. 
                Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm căn cơ của lập trình, 
                giúp các bạn có nền tảng vững chắc để chinh phục con đường trở thành một lập trình viên.</p>

            <h4 className="fs-5 fw-bold mt-5">Nội dung khóa học</h4>
            <div className="d-flex align-content-center border-bottom">
                    <p>138 bài học</p>
                    <p className="px-3">Thời lượng 10 giờ 38 phút</p>
            </div>
            <ul className="p-0">
                        {lessons.map((lesson) => 
                            (
                                <li key={lesson.lesson_id} className="py-3 px-3 list-unstyled" style={{cursor: 'pointer', fontWeight: '500'}}>
                                  <a href="" className="text-decoration-none link-dark opacity-75 d-flex justify-content-between pr-5">
                                  <div>
                                        <i className="bi bi-play-circle p-3"></i>
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

       <div className=" col-sm-12 col-xl-4 px-4">
            <div className="p-3 text-center" >
                <img className="w-100 pb-3" style={{borderRadius: '18px'}}  src="https://th.bing.com/th/id/OIP.NK8Sm1NoQz41q1_DhhToUwHaEK?rs=1&pid=ImgDetMain" alt="" />
                <h4 className="color-common">Miễn phí</h4>
                <div style={{borderRadius: '18px'}}  className="btn btn-primary fw-bold fs-6">ĐĂNG KÝ HỌC</div>
            </div>
            <ul style={{marginLeft: '25%'}}>
                <li className="list-unstyled"><i style={{marginRight: '6px'}} className="bi bi-rocket-fill fw-bold"></i>Trình độ cơ bản</li>
                <li className="list-unstyled"><i style={{marginRight: '6px'}} className="bi bi-film fw-bold"></i>Tổng số 138 bài học</li>
                <li className="list-unstyled"><i style={{marginRight: '6px'}}  className="bi bi-alarm fw-bold"></i>Thời lượng 10 giờ 29 phút</li>
                <li className="list-unstyled"><i style={{marginRight: '6px'}} className="bi bi-displayport-fill fw-bold"></i>Học mọi lúc, mọi nơi</li>   
            </ul>
       </div>

    </div>);
}

export default CourseDes;