import slide_1 from '../assets/slide-1.png'
import slide_2 from '../assets/Slide-2.png'
import slide_3 from '../assets/Slide-3.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper";


const Banner = () => {

    return (
        <div className='max-w-[1240px] mx-auto my-10 border rounded-lg bg-[#cfca34] '>
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
                    <div className='flex items-center justify-between p-5 md:p-10 md:h-[500px] h-[250px]'>
                        <div>
                            <h3 className='md:text-5xl font-bold w-4/5  md:w-3/4 md:leading-[70px] '>Find Your Best toys From All</h3>
                            <button className='btn-sm md:btn-md btn btn-primary mt-3'>Shop Now</button>
                        </div>
                        <img className='w-1/2' src={slide_1} alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='flex items-center justify-between p-5 md:p-10 md:h-[500px] h-[250px]'>
                        <div>
                            <h3 className='md:text-5xl font-bold w-4/5  md:w-3/4 md:leading-[70px] '>Speacial Discount On All Toys</h3>
                            <button className='btn-sm md:btn-md btn btn-primary mt-3'>Shop Now</button>
                        </div>
                        <img className='w-1/2' src={slide_2} alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='flex items-center justify-between p-5 md:p-10 md:h-[500px] h-[250px]'>
                        <div>
                            <h3 className='md:text-5xl font-bold w-4/5  md:w-3/4 md:leading-[70px] '>Some New Collection Today For You</h3>
                            <button className='btn-sm md:btn-md btn btn-primary mt-3'>Shop Now</button>
                        </div>
                        <img className='w-1/2' src={slide_3} alt="" />
                    </div>

                </SwiperSlide>




            </Swiper>
        </div>
    );
};

export default Banner;