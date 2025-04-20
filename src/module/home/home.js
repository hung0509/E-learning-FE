
import Carousel from '../../component/slider/carousel/carousel';
import LogoSlider from '../../component/slider/swiper-circle/swiper-circle';
import SwiperComponent from '../../component/slider/swiper/swiper';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className='home-component px-5'>
            <div className='w-100 py-5' style={{paddingLeft: '8%', paddingRight: '8%'}}>
                <Carousel />
            </div>

            <div className='home-introduce'>
                <h2 className='fs-4 fw-bold my-5'>Điểm nổi bật</h2>
                <div className='row h-25'>
                    <div class="col-3">
                        <div class="card p-3 h-100">
                            <div class="card-body">
                                <h5 class="card-title fs-6 ">ĐA DẠNG KHOÁ HỌC</h5>
                                <p class="card-text">Gồm các khoá từ cơ bản (Pre-TOEIC, IELTS Basic) nâng cao (TOEIC trọn bộ, Giải đề, TOEIC Intensive,
                                    TOEIC Speaking-Writing), các khoá cấp tốc (TOEIC Cấp tốc, IELTS Giải đề) và các khoá luyện giao tiếp (Speaking Căn bản, Speaking Nâng cao).</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card p-3 h-100">
                            <div class="card-body">
                                <h5 class="card-title fs-6 ">CẬP NHẬT THƯỜNG XUYÊN</h5>
                                <p class="card-text">Gồm các khoá từ cơ bản (Pre-TOEIC, IELTS Basic) nâng cao (TOEIC trọn bộ, Giải đề, TOEIC Intensive, TOEIC Speaking-Writing),
                                    các khoá cấp tốc (TOEIC Cấp tốc, IELTS Giải đề) và các khoá luyện giao tiếp (Speaking Căn bản, Speaking Nâng cao).</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card p-3 h-100">
                            <div class="card-body">
                                <h5 class="card-title fs-6">MỌI LÚC MỌI NƠI</h5>
                                <p class="card-text">Gồm các khoá từ cơ bản (Pre-TOEIC, IELTS Basic) nâng cao (TOEIC trọn bộ, Giải đề, TOEIC Intensive, TOEIC Speaking-Writing), các khoá cấp tốc
                                    (TOEIC Cấp tốc, IELTS Giải đề) và các khoá luyện giao tiếp (Speaking Căn bản, Speaking Nâng cao).</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card p-3 h-100">
                            <div class="card-body">
                                <h5 class="card-title fs-6">Card title</h5>
                                <p class="card-text">Gồm các khoá từ cơ bản (Pre-TOEIC, IELTS Basic) nâng cao (TOEIC trọn bộ, Giải đề, TOEIC Intensive, TOEIC Speaking-Writing), các khoá cấp tốc
                                    (TOEIC Cấp tốc, IELTS Giải đề) và các khoá luyện giao tiếp (Speaking Căn bản, Speaking Nâng cao).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-100 h-25'>
                <h2 className='fs-4 fw-bold my-5'>Khóa học nổi bật</h2>
                <SwiperComponent />
            </div>

            <div className='w-100 h-25'>
                <h2 className='fs-4 fw-bold my-5'>Tác giá nổi bật</h2>
                <LogoSlider />
            </div>

        </div>
    )
}
export default Home;