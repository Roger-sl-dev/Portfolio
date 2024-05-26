import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineJavaScript } from "react-icons/ai";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
import { SiAlpinedotjs, SiAstro, SiCapacitor, SiIonic, SiNextdotjs, SiReact, SiShadcnui, SiStimulus, SiTailwindcss, SiTurbo, SiTypescript, SiVuedotjs } from 'react-icons/si';

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
          <CardIcon Texto="Typescript" Icon={<SiTypescript/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Astro" Icon={<SiAstro/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Stimulus" Icon={<SiStimulus/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Next" Icon={<SiNextdotjs/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Shadcn" Icon={<SiShadcnui/>} />   
        </SwiperSlide>
         <SwiperSlide>
          <CardIcon Texto="Capacitor" Icon={<SiCapacitor />} />   
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