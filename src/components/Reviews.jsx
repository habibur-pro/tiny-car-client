import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import logo from '../assets/logo.png'

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';



const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className=''>

            <h1 className='text-3xl text-gray-200 text-center font-extrabold'>What our customers say</h1>


            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 4
                    }
                }}


                loop={true}
                spaceBetween={30}
                centeredSlides={false}
                grabCursor={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}


                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide
                        key={review.id}

                    >
                        <div className='card bg-base-200 p-5'>
                            <img className='w-24 h-24 rounded-full border mx-auto' src={logo} alt="" />
                            <Rating className="mt-3"
                                placeholderRating={review.rating}
                                emptySymbol={<FaStar className="icon text-slate-300" />}
                                placeholderSymbol={<FaStar className="icon text-secondary" />}
                                fullSymbol={<FaStar className="icon text-secondary" />}
                            />


                            <h3 className="mt-3 text-lg font-bold  ">
                                {review.name}
                            </h3>
                            <p className="mt-4 ">
                                {review.comment}
                            </p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>


        </div>

    )
}

export default Reviews;