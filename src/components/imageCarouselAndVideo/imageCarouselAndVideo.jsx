import React from "react";
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { selectCarouselImages } from "../../reduxModules/hhgSelectors";

import "./imageCarouselAndVideo.css";

const ImageCarouselAndVideo = () => {
    const images = useSelector(selectCarouselImages);

    // const handleCircleImageClick = () => {
    //     dispatch(updateModalOpenStatus(true));
    // }

    return (
        <div className="container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                style={{ width: '100%', height: 'auto' }} >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="swiper-slide">
                            <img
                                src={image.url}
                                alt={image.title}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Circles with Text */}
            {/* <div className="circles">
                <div className="circle">
                    <img className="circle-shape" src="https://via.placeholder.com/800x400?text=Image+1" alt="Circle 1"
                        onClick={handleCircleImageClick} />
                    <p>అనగనగా<br />ఒక రోజు</p>
                </div>
                <div className="circle">
                    <img className="circle-shape" src="https://via.placeholder.com/800x400?text=Image+2" alt="Circle 2"
                        onClick={handleCircleImageClick} />
                    <p>అనగనగా<br />ఒక రోజు</p>
                </div>
                <div className="circle">
                    <img className="circle-shape" src="https://via.placeholder.com/800x400?text=Image+3" alt="Circle 3"
                        onClick={handleCircleImageClick} />
                    <p>అనగనగా<br />ఒక రోజు</p>
                </div>
            </div> */}
        </div>
    );
};

export default ImageCarouselAndVideo;
