import React, {use} from "react";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {EffectCoverflow, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);
    return (
        <div className="my-20">
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"3"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <ReviewCard review={review}></ReviewCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </div>
    );
};

export default Reviews;
