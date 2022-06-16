import React from "react";
import "./ImageSlider.css";
import dataSlider from "./SliderData";
import { Pagination } from "swiper";
import "./../../../App.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ImageTempSlider() {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <div className="ImageSlider-main-span">
      <div className="ImageSlider-main">
        <Swiper
          className="ImageSlider-banner w-100  "
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 1500 }}
          navigation
        >
          {dataSlider.map((obj, index) => {
            return (
              <SwiperSlide
                key={obj.id}
                className="ImageSlider-main-contnet m-auto grid  sm:grid-cols-1  sm:grid-flow-row-dense  md:grid-cols-1 lg:grid-cols-2 "
              >
                <div className="ImageSlider-main-contnet-title slider-content  block md:m-auto md:mx-5">
                  <div>
                    <p className="text-2xl  text-blue-400 font-normal">
                      {obj.title}
                    </p>
                  </div>
                  <div className="">
                    <span className="ImageSlider-main-contnet-subtitle text-4xl text-blue-500 font-bold leading-snug ">
                      <p className="">{obj.subTitle}</p>
                    </span>
                  </div>
                  <div className="">
                    <button
                      className="ImageSlider-main-contnet-button  ImageSlider-btn text-white font-medium py-3  border-blue-500 "
                      onClick={() => window.open(obj.link, "_blank")}
                    >
                      {obj.button}{" "}
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="slider-image md:m-auto mx-1">
                  <img
                    src={process.env.PUBLIC_URL + `/Images/${obj.image}`}
                    alt="slider image"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div></div>
      </div>
    </div>
  );
}

export default ImageTempSlider;
