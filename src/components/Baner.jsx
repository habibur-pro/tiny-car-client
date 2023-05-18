import slide_1 from '../assets/slide-1.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <div className='max-w-[1240px] mx-auto my-10 border rounded-lg bg-[#e2da02] p-10'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                    delay: 2500,

                }}
                className="mySwiper"
            >
                <SwiperSlide className=''>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='text-5xl font-bold  w-3/4 leading-[70px] '>Speacial Discount On All Toys</h3>
                            <button className='btn btn-primary mt-3'>Shop Now</button>
                        </div>
                        <img src={slide_1} alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='text-5xl font-bold  w-3/4 leading-[70px] '>Speacial Discount On All Toys</h3>
                            <button className='btn btn-primary mt-3'>Shop Now</button>
                        </div>
                        <img src={slide_1} alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='text-5xl font-bold  w-3/4 leading-[70px] '>Speacial Discount On All Toys</h3>
                            <button className='btn btn-primary mt-3'>Shop Now</button>
                        </div>
                        <img src={slide_1} alt="" />
                    </div>

                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Banner;