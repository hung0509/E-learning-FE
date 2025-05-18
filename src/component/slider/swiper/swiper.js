import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const dataAvatar = [
    'https://th.bing.com/th/id/OIP.O_3liXgPrqK_FTyuoEJY2QHaEK?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.g2ytdiyBCFETiMmdSTN0HgHaEm?w=1200&h=745&rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.Es-dWNe-Z2NItaKyPwhiYgHaFQ?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.wvCFGWAMS1WO6t2NSyWOdgHaFQ?w=804&h=571&rs=1&pid=ImgDetMain',
    'https://www.oneeducation.org.uk/wp-content/uploads/2020/10/816.-C-Programming-Beginner-to-Advanced.jpg',
    "https://th.bing.com/th/id/OIP.5Jeqb4Si0-h8ejVzPZ1EwQHaD4?rs=1&pid=ImgDetMain",
    
];

const SwiperComponent = ({data}) => {

    console.log(data);
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={50}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {dataAvatar.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="card text-center" style={{ minWidth: '18rem', borderRadius: '32px' }}>
                            <img width="254px" height="315px"  src={item} className="card-img-bottom"  alt="..." />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default SwiperComponent;
