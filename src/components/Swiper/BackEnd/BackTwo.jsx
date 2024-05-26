import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineJavaScript } from "react-icons/ai";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
import { SiAdonisjs, SiAlpinedotjs, SiElixir, SiIonic, SiLaravel, SiMongodb, SiMysql, SiNodedotjs, SiPhoenixframework, SiPhp, SiPostgresql, SiReact, SiRuby, SiRubyonrails, SiRxdb, SiStimulus, SiTailwindcss, SiTurbo, SiVuedotjs } from 'react-icons/si';

export default function () {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
           <SwiperSlide>
          <CardIcon Texto="Laravel" Icon={<SiLaravel/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Adonis" Icon={<SiAdonisjs/>} />   
        </SwiperSlide>
     
        <SwiperSlide>
          <CardIcon Texto="Rails" Icon={<SiRubyonrails/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Phoenix" Icon={<SiPhoenixframework/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Postgres" Icon={<SiPostgresql/>} />   
        </SwiperSlide>
         <SwiperSlide>
          <CardIcon Texto="Rxdb" Icon={<SiRxdb />} />   
        </SwiperSlide>
     
     
      </Swiper>
    </>
  );
}

const CardIcon =(props)=>{
    return (
        <div className=' flex flex-col gap-3'>
            <span className='  flex justify-center text-6xl  text-lime-300'>
              {props.Icon}
            </span>
            <p className=' text-3xl text-white  font-semibold text-center'>{props.Texto}</p>
        </div>
    )
}