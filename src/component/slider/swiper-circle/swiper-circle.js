import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import './swiper-circle.css';

const logos = [
    'https://i.pinimg.com/originals/a9/71/d8/a971d8b69fdc16c9ca3222a38e895226.jpg',
        null,
        null,
        null,
        null,
        null,
        null,
];

const SwiperComponent = ({data}) => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={50}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper-circle"
        >
            {data.map((logo, index) => (
                <SwiperSlide className="card-circle-custom" key={index}>
                    <div className="circular-card">
                        <img src={logo.avatar || "https://pluspng.com/img-png/user-png-icon-user-2-icon-png-file-512x512-pixel-512.png"} className="circular-img" alt={`Logo ${index + 1}`} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperComponent;
