
import { useEffect, useState } from 'react';
import Carousel from '../../component/slider/carousel/carousel';
import LogoSlider from '../../component/slider/swiper-circle/swiper-circle';
import SwiperComponent from '../../component/slider/swiper/swiper';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCourse } from '../../hook/useCourse';
import CourseHeaderDto from '../../dto/course-header-dto';
import { useAuth } from '../../hook/useAuth';

const Home = () => {
    const [data, setData] = useState([]);
    const { handleCourseSpecial } = useCourse();
    const { handleLoginByGoogle } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await handleCourseSpecial();
                const courses = result.map((item) => CourseHeaderDto.fromCourseHeaderResponse(item));
                setData(courses);
            } catch (err) {
                console.error("Error fetching articles:", err);
            }
        };
    
        const handleLogin = async (authCode) => {
            try {
                const result = await handleLoginByGoogle({ code: authCode });
                // Xử lý kết quả login nếu cần
            } catch (err) {
                console.error("Error during Google login:", err);
            }
        };
    
        console.log(window.location.href);
    
        const authCodeRegex = /code=([^&]+)/;
        const isMatch = window.location.href.match(authCodeRegex);
        
        if (isMatch) {
            const authCode = isMatch[1];
            console.log('Auth Code:', authCode);
            handleLogin(authCode);
        }
    
        fetchData();
    }, []);
    

    return (
        <div className='home-component px-5'>
            <div className='w-100 py-5' style={{ paddingLeft: '8%', paddingRight: '8%' }}>
                <Carousel />
            </div>

            <div className='home-introduce'>
                <h2 className='fs-4 fw-bold my-5'>Điểm nổi bật</h2>
                <div className='row h-25'>
                    <div class="col-3">
                        <div class="card p-3 h-100">
                            <div class="card-body">
                                <h5 class="card-title fs-6 ">🚀 LỘ TRÌNH ĐA DẠNG</h5>
                                <p class="card-text">Từ nhập môn đến nâng cao: HTML/CSS cơ bản, JavaScript Foundation, Lập trình ReactJS,
                                    NodeJS Backend, Fullstack MERN. Có cả lộ trình chuyên sâu: Cấu trúc dữ liệu & Giải thuật, DevOps, Docker & CI/CD.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card p-3 h-100">
                            <div class="card-body">
                                <h5 class="card-title fs-6 ">🔄 CẬP NHẬT LIÊN TỤC</h5>
                                <p class="card-text">Bài học và công nghệ mới luôn được cập nhật: NextJS, TypeScript, NestJS, AI Prompting, các case-study
                                    thực tế như clone Shopee, Tiki, Blog app... giúp học viên luôn bắt kịp xu hướng.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card p-3 h-100">
                            <div class="card-body">
                                <h5 class="card-title fs-6">⏱ HỌC MỌI LÚC MỌI NƠI</h5>
                                <p class="card-text">Chỉ cần một chiếc laptop, bạn có thể học lập trình bất cứ khi nào, ở bất kỳ đâu. Bài giảng video HD,
                                    kèm theo project thực hành, quiz tương tác và hỗ trợ từ mentor trong suốt quá trình học.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card p-3 h-100">
                            <div class="card-body">
                                <h5 class="card-title fs-6">💡 HỌC TỪ THỰC TẾ</h5>
                                <p class="card-text">Tập trung vào kỹ năng làm thật: xây dựng website, API, hệ thống quản lý... giúp bạn tích
                                    lũy kinh nghiệm thực chiến để dễ dàng apply vào các vị trí lập trình viên junior đến senior.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-100 h-25'>
                <h2 className='fs-4 fw-bold my-5'>Khóa học nổi bật</h2>
                <SwiperComponent data={data} />
            </div>

            <div className='w-100 h-25'>
                <h2 className='fs-4 fw-bold my-5'>Tác giá nổi bật</h2>
                <LogoSlider />
            </div>

        </div>
    )
}
export default Home;