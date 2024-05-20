// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
import { MdOutlineDateRange } from "react-icons/md";
import bannerlogo from '../../assets/small-pic/hero-figure1 (1).png'

// Use the Swiper modules
const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
                <div className='md:flex p-5 justify-between'>
                        <div>
                            <div className='flex items-center text-red-700 mt-20'>
                                <MdOutlineDateRange />
                                <h3 className='ml-2 font-semibold'>January 21,2024</h3>
                            </div>
                            <div className='text-3xl font-extrabold'>
                                <h2>EVENTS,MEETUPS & </h2>
                                <h2 className='text-red-700'>CONFERENCES</h2>
                            </div>                      
                        </div>
                    <img src={bannerlogo} alt="" />
                </div>
                              
      </SwiperSlide>
      <SwiperSlide>
        <div className='md:flex p-5 justify-between'>
                        <div>
                            <div className='flex items-center text-red-700 mt-20'>
                                <MdOutlineDateRange />
                                <h3 className='ml-2 font-semibold'>January 21,2024</h3>
                            </div>
                            <div className='text-3xl font-extrabold'>
                                <h2>EVENTS,MEETUPS & </h2>
                                <h2 className='text-red-700'>CONFERENCES</h2>
                            </div>                      
                        </div>
                    <img src={bannerlogo} alt="" />
                </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='md:flex p-5 justify-between'>
                        <div>
                            <div className='flex items-center text-red-700 mt-20'>
                                <MdOutlineDateRange />
                                <h3 className='ml-2 font-semibold'>January 21,2024</h3>
                            </div>
                            <div className='text-3xl font-extrabold'>
                                <h2>EVENTS,MEETUPS & </h2>
                                <h2 className='text-red-700'>CONFERENCES</h2>
                            </div>                      
                        </div>
                    <img src={bannerlogo} alt="" />
                </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
