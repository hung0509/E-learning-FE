
const Lesson = ({data}) => {
      
    return (
        <div className="lesson-web">
            <iframe height="500" src={data.urlLesson}
                title={data.lessonName}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                className="w-100 border-0"
                allowfullscreen
            >  
            </iframe>
            <h3 className="px-5 pt-5 color-common">{data.lessonName}</h3>
            <div className="fs-6 opacity-50 px-5">{data.description}</div>
            {/* <span className="fs-6 opacity-50 px-5">Cập nhật tháng 3 năm 2025</span> */}

            <div>
                <p className="px-5 pb-3 pt-5">Tham gia nhóm Học lập trình tại F8 trên Facebook để cùng nhau trao đổi trong quá trình học tập ❤️</p>
                <p className="px-5"> Các bạn subscribe kênh Youtube F8 Official để nhận thông báo khi có các bài học mới nhé ❤️</p>
            </div>
        </div>
    );
}

export default Lesson;