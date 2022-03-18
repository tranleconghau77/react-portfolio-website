import React from "react";
import "./testimonial.scss";
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum provident, quia nihil eos repudiandae amet et at sint illo culpa nisi, ducimus soluta porro aperiam assumenda rem temporibus eveniet cumque."
  },
  {
    avatar: AVTR2,
    name: "Tina Snow",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum provident, quia nihil eos repudiandae amet et at sint illo culpa nisi, ducimus soluta porro aperiam assumenda rem temporibus eveniet cumque."
  }, {
    avatar: AVTR3,
    name: "Tina Snow",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum provident, quia nihil eos repudiandae amet et at sint illo culpa nisi, ducimus soluta porro aperiam assumenda rem temporibus eveniet cumque."
  }, {
    avatar: AVTR4,
    name: "Tina Snow",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum provident, quia nihil eos repudiandae amet et at sint illo culpa nisi, ducimus soluta porro aperiam assumenda rem temporibus eveniet cumque."
  },
]


const Testimonials = () => {
  return <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="container testimonials__container">
      {
        data.map((value, index) => {
          return (<SwiperSlide key={value.id} className="testimonial">
            <div className="client__avatar">
              <img src={value.avatar} alt="Avatar One" />
            </div>
            <h5 className="client__name">{value.name}</h5>
            <small className="client__review">{value.review}</small>
          </SwiperSlide>)
        })
      }


    </Swiper>
  </section>;
};

export default Testimonials;
