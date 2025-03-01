import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const data = [
    'https://i.pinimg.com/originals/a9/71/d8/a971d8b69fdc16c9ca3222a38e895226.jpg',
    'https://th.bing.com/th/id/OIP.zeLczq7P7bxbw2_7meDVJQHaJR?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.rS2WmFXmzYzZsCWk3zKHYQHaLk?rs=1&pid=ImgDetMain',
    'https://i.pinimg.com/736x/d9/de/af/d9deaf0d2f1e48d947bd6f448a5cf3bb.jpg',
    'https://pbs.twimg.com/profile_images/1597114239142936576/gM7XVk83_400x400.jpg'
];

const SwiperComponent = () => {
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
                {data.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="card text-center" style={{ width: '16rem' }}>
                            <img width="254px" height="315px" src={src} className="card-img-bottom" alt="..." />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default SwiperComponent;
