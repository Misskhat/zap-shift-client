import React from "react";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import starPeople from "../../../assets/brands/start_people.png";
import {Autoplay} from "swiper/modules";

const Brands = () => {
    return (
        <Swiper
            className="my-20"
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
            <SwiperSlide>
                <img src={amazon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={amazonVector} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={casio} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={moonstar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={randstad} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={star} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={starPeople} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Brands;
