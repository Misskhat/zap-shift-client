import React, {use} from "react";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {Autoplay, EffectCoverflow, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);
    return (
        <div className="my-20">
            <div className="text-center my-12">
                <h2 className="text-4xl font-bold">What our customers are sayings</h2>
                <p className="opacity-80 w-1/2 mx-auto">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment,
                    reduce pain, and strengthen your body with ease!
                </p>
            </div>

            <Swiper
                loop={true}
                spaceBetween={30}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"3"}
                autoplay={{delay: 1000, disableOnInteraction: false}}
                coverflowEffect={{
                    rotate: 30,
                    stretch: "50%",
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
