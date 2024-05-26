import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineJavaScript } from "react-icons/ai";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
import { SiAlpinedotjs, SiCypress, SiDocker, SiInsomnia, SiIonic, SiReact, SiStimulus, SiTailwindcss, SiTurbo, SiVercel, SiVuedotjs } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { FaGit } from 'react-icons/fa';

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
          <CardIcon Texto="Docker" Icon={<SiDocker/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Git" Icon={<FaGit/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Insomnia" Icon={<SiInsomnia/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Cypress" Icon={<SiCypress/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Vercel" Icon={<SiVercel/>} />   
        </SwiperSlide>
         <SwiperSlide>
          <CardIcon Texto="Azure" Icon={<VscAzure />} />   
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