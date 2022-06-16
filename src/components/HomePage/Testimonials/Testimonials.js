import React from "react";
import "./Testimonials.css";
import testimonialsData from "./TestimonialsData";
import { Pagination } from "swiper";
import "./../../../App.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

function Testimonials() {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <div className="testimonial-main-span ">
      <div className="testimonial-main">
        <div className="testimonial-heading ">
          <div className="testimonial-heading-title my-4">
            <p className="uppercase">TESTIMONIALS</p>
          </div>
          <div className="testimonial-heading-sub-title text-5xl text-center font-semibold md:my-5 m-auto">
            WHAT CLIENTS SAY
          </div>

          <div className="testimonial-heading-content text-center  lg:mx-12 mb-12 font-semibold ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>
        <div className="testimonial-box-container container m-5 p-5">
          <Swiper
            spaceBetween={30}
            scrollbar={{ draggable: true }}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              620: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{ delay: 1500 }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonialsData.map((obj, index) => {
              return (
                <SwiperSlide
                  className="testimonial-box container  shadow-2xl "
                  key={obj.id}
                >
                  <div className="testimonial-box-heading px-5  pt-4">
                    <img
                      src={process.env.PUBLIC_URL + `/Images/box-decore-1.svg`}
                    />
                  </div>
                  <div className="testimonial-box-content my-4 text-center px-5">
                    <p>{obj.content}</p>
                  </div>
                  <div className="testimonial-box-profile m-auto">
                    <img
                      src={process.env.PUBLIC_URL + `/Images/${obj.profile}`}
                      className="m-auto my-4"
                    />
                    <div className="testimonial-box-profile-social-media text-white pb-3">
                      <p className="text-center my-2 font-semibold">
                        {obj.userName}
                      </p>
                      <ul className="flex  text-xl justify-center">
                        <li className="">
                          <button className=" items-center justify-center w-8 h-8  rounded-full text-base">
                            <i className="fa-brands fa-facebook-f"></i>
                          </button>
                        </li>
                        <li className="">
                          <button className=" inline-flex items-center justify-center w-8 h-8   rounded-full text-base">
                            <i className="fa-brands fa-instagram"></i>
                          </button>
                        </li>
                        <li className="">
                          <button className=" inline-flex items-center justify-center w-8 h-8  rounded-full text-base">
                            <i className="fa-brands fa-twitter"></i>
                          </button>
                        </li>
                        <li className="">
                          <button className="inline-flex items-center justify-center w-8 h-8  rounded-full text-base">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
