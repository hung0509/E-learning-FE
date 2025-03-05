
const Lesson = () => {
    return (
        <div className="lesson-web">
            <iframe height="500" src="https://www.youtube.com/embed/HoJGmN5f_X4?si=zdaXUG2ePfC31Z85"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                className="w-100 border-0"
                allowfullscreen
            >  
            </iframe>
            <h3 className="px-5 pt-5 color-common">Tối ưu Performan</h3>
            <span className="fs-6 opacity-50 px-5">Cập nhật tháng 3 năm 2025</span>

            <div>
                <p className="px-5 pb-3 pt-5">Tham gia nhóm Học lập trình tại F8 trên Facebook để cùng nhau trao đổi trong quá trình học tập ❤️</p>
                <p className="px-5"> Các bạn subscribe kênh Youtube F8 Official để nhận thông báo khi có các bài học mới nhé ❤️</p>
            </div>
        </div>
    );
}

export default Lesson;