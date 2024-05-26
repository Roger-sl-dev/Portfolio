import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineJavaScript } from "react-icons/ai";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
import { SiAlpinedotjs, SiElixir, SiIonic, SiMongodb, SiMysql, SiNodedotjs, SiPhp, SiReact, SiRuby, SiStimulus, SiTailwindcss, SiTurbo, SiVuedotjs } from 'react-icons/si';

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
          <CardIcon Texto="PHP" Icon={<SiPhp/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Node" Icon={<SiNodedotjs/>} />   
        </SwiperSlide>
     
        <SwiperSlide>
          <CardIcon Texto="Ruby" Icon={<SiRuby/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Elixir" Icon={<SiElixir/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="MySQl" Icon={<SiMysql/>} />   
        </SwiperSlide>
         <SwiperSlide>
          <CardIcon Texto="Mongo" Icon={<SiMongodb />} />   
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